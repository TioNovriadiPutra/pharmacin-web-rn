import usePabrikanModel from "@models/pabrikanModel";
import { addDrugFactory } from "@services/pabrikan";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { isLoadingState, showFormModalState } from "@store/atom/pageState";
import { pabrikanData } from "@utils/constant/pageTable";
import { hashId } from "@utils/helper/hash";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const usePabrikanController = () => {
  const { useGetDrugFactories } = usePabrikanModel();

  function useGetDrugFactoriesQuery() {
    const { data, isLoading } = useGetDrugFactories();

    if (!isLoading) {
      Object.assign(pabrikanData, {
        tableData: data.data.map((tmp) => {
          const arr = [
            tmp.id,
            tmp.factory_name,
            tmp.factory_email,
            tmp.factory_phone,
          ];

          return {
            tables: arr,
            actions: [
              {
                type: "delete",
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
    }

    return {
      isLoading,
    };
  }

  const addDrugFactoryMutation = useMutation(addDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
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

  return {
    useGetDrugFactoriesQuery,
    addDrugFactory: (data) => addDrugFactoryMutation.mutate(data),
  };
};

export default usePabrikanController;
