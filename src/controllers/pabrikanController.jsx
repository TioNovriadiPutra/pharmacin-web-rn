import usePabrikanModel from "@models/pabrikanModel";
import { addDrugFactory, deleteDrugFactory } from "@services/pabrikan";
import { formDataState, validationErrorState } from "@store/atom/formState";
import {
  isLoadingState,
  rowIdState,
  showFormModalState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { addDrugFactoryForm } from "@utils/constant/form";
import { pabrikanDetail } from "@utils/constant/pageDetail";
import { pabrikanData } from "@utils/constant/pageTable";
import { hashId } from "@utils/helper/hash";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const usePabrikanController = () => {
  const { useGetDrugFactories, useGetDrugFactoryDetail } = usePabrikanModel();

  const useGetDrugFactoriesQuery = () => {
    const { data, isLoading, isError } = useGetDrugFactories();

    if (!isLoading) {
      if (!isError) {
        Object.assign(pabrikanData, {
          tableData: data.data.map((tmp) => {
            const arr = [
              { type: "text", value: tmp.id },
              { type: "text", value: tmp.factory_name },
              { type: "text", value: tmp.factory_email },
              { type: "text", value: tmp.factory_phone },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () => deleteDrugFactoryMutation.mutate(tmp.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
              rowPress: (nav) => {
                nav.navigate("PabrikanStack", {
                  screen: "PabrikanDetail",
                  params: {
                    id: hashId(tmp.id),
                  },
                });
              },
            };
          }),
        });

        Object.assign(addDrugFactoryForm, {
          onSubmit: (data) => addDrugFactoryMutation.mutate(data),
        });
      }
    }

    return {
      isLoading,
    };
  };

  const useGetDrugFactoryDetailQuery = (id) => {
    const { data, isLoading, isError } = useGetDrugFactoryDetail(id);

    if (!isLoading) {
      if (!isError) {
        Object.assign(pabrikanDetail, {
          title: data.data.factory_name,
          tableData: data.data.drugs.map((drug) => {
            const arr = [
              { type: "text", value: drug.drug },
              { type: "text", value: drug.drug_generic_name || "-" },
              { type: "text", value: drug.drugCategory.category_name },
              { type: "currency", value: drug.purchase_price },
              { type: "currency", value: drug.selling_price },
              { type: "text", value: drug.composition },
              { type: "text", value: drug.total_stock },
            ];

            return {
              tables: arr,
            };
          }),
          detailData: {
            ...pabrikanDetail.detailData,
            list: [
              {
                ...pabrikanDetail.detailData.list[0],
                data: data.data.factory_name,
              },
              {
                ...pabrikanDetail.detailData.list[1],
                data: data.data.factory_email,
              },
              {
                ...pabrikanDetail.detailData.list[2],
                data: data.data.factory_phone,
              },
            ],
            footer: [
              {
                ...pabrikanDetail.detailData.footer[0],
                value: data.data.drugs.length,
              },
            ],
          },
        });
      }
    }

    return {
      isLoading,
    };
  };

  const addDrugFactoryMutation = useMutation(addDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries(["getDrugFactories"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const deleteDrugFactoryMutation = useMutation(deleteDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getDrugFactories"]);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(showValidationModalState, false);
      setRecoil(rowIdState, null);
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetDrugFactoriesQuery,
    useGetDrugFactoryDetailQuery,
    addDrugFactory: (data) => addDrugFactoryMutation.mutate(data),
  };
};

export default usePabrikanController;
