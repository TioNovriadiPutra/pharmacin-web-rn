import useObatModel from "@models/obatModel";
import { getDrugDetail } from "@services/obat";
import { detailDataState, showDetailModalState } from "@store/atom/detailState";
import { formDataState } from "@store/atom/formState";
import { isLoadingState, showFormModalState } from "@store/atom/pageState";
import { addDrugForm } from "@utils/constant/form";
import { obatDetail } from "@utils/constant/pageDetail";
import { obatData } from "@utils/constant/pageTable";
import { currencyFormatter } from "@utils/helper/currency";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useObatController = () => {
  const { useGetDrugs } = useObatModel();

  const useGetDrugsQuery = () => {
    const results = useGetDrugs();

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);

    if (!isLoading) {
      if (!isError) {
        Object.assign(obatData, {
          tableData: results[0].data.data.map((item) => {
            const arr = [item.drug, item.drug_generic_name || "-", item.category_name, item.shelve || "-", currencyFormatter(item.selling_price), item.composition];

            return {
              tables: arr,
              actions: [
                {
                  type: "info",
                  onPress: () => getDrugDetailMutation.mutate(item.id),
                },
                {
                  type: "edit",
                  onPress: () => getDrugUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                },
              ],
            };
          }),
        });

        Object.assign(addDrugForm, {
          inputs: addDrugForm.inputs.map((input) => {
            if (input.name === "unitId") {
              Object.assign(input, {
                items: results[3].data.data.map((result) => {
                  return {
                    label: result.unit_name,
                    value: result.id,
                  };
                }),
              });
            } else if (input.name === "categoryId") {
              Object.assign(input, {
                items: results[2].data.data.map((result) => {
                  return {
                    label: result.category_name,
                    value: result.id,
                  };
                }),
              });
            } else if (input.name === "factoryId") {
              Object.assign(input, {
                items: results[1].data.data.map((result) => {
                  return {
                    label: result.factory_name,
                    value: result.id,
                  };
                }),
              });
            }

            return input;
          }),
        });
      }
    }

    return {
      isLoading,
    };
  };

  const getDrugDetailMutation = useMutation(getDrugDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const detail = JSON.parse(JSON.stringify(obatDetail));

      Object.assign(detail, {
        detailData: {
          ...detail.detailData,
          list: [
            {
              ...detail.detailData.list[0],
              data: response.data.drug_number,
            },
            {
              ...detail.detailData.list[1],
              data: response.data.drug,
            },
            {
              ...detail.detailData.list[2],
              data: response.data.drug_generic_name || "-",
            },
            {
              ...detail.detailData.list[3],
              data: response.data.unit_name,
            },
            {
              ...detail.detailData.list[4],
              data: response.data.composition,
            },
            {
              ...detail.detailData.list[5],
              data: response.data.drugCategory.category_name,
            },
            {
              ...detail.detailData.list[6],
              data: response.data.shelve || "-",
            },
            {
              ...detail.detailData.list[7],
              data: response.data.drugFactory.factory_name,
            },
            {
              ...detail.detailData.list[8],
              data: currencyFormatter(response.data.purchase_price),
            },
            {
              ...detail.detailData.list[9],
              data: currencyFormatter(response.data.selling_price),
            },
          ],
          footer: [
            {
              ...detail.detailData.footer[0],
              value: response.data.total_stock,
            },
            {
              ...detail.detailData.footer[1],
              value: 0,
            },
            {
              ...detail.detailData.footer[2],
              value: 0,
            },
          ],
        },
      });

      setRecoil(detailDataState, detail.detailData);
      setRecoil(showDetailModalState, true);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const getDrugUpdateFormMutation = useMutation(getDrugDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(addDrugForm));

      Object.assign(formData, {
        title: "Edit Obat",
        defaultValues: {
          drug: response.data.drug,
          drugGenericName: response.data.drug_generic_name,
          unitId: {
            label: response.data.unit.unit_name,
            value: response.data.unit.id,
          },
          composition: response.data.composition,
          categoryId: {
            label: response.data.drugCategory.category_name,
            value: response.data.drugCategory.id,
          },
          shelve: response.data.shelve,
          factoryId: {
            label: response.data.drugFactory.factory_name,
            value: response.data.drugFactory.id,
          },
          purchasePrice: response.data.purchase_price,
          sellingPrice: response.data.selling_price,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Obat",
        },
        onSubmit: (data) => updateDrugCategoryMutation.mutate({ data, id: response.data.id }),
      });

      setRecoil(showFormModalState, true);
      setRecoil(formDataState, formData);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetDrugsQuery,
  };
};

export default useObatController;
