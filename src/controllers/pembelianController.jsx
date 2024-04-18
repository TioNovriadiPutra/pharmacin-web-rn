import useObatModel from "@models/obatModel";
import usePembelianModel from "@models/pembelianModel";
import { getDrugsByDrugFactory } from "@services/obat";
import { isLoadingState } from "@store/atom/pageState";
import { addPurchaseTransactionForm } from "@utils/constant/form";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const usePembelianController = () => {
  const { getPurchaseDrugFactoriesDropdown } = usePembelianModel();
  const { useGetDrugsByDrugFactory } = useObatModel();

  const useGetPurchaseDrugFactoriesDropdownQuery = () => {
    const { data, isLoading, isError } = getPurchaseDrugFactoriesDropdown();

    if (!isLoading) {
      if (!isError) {
        Object.assign(addPurchaseTransactionForm, {
          inputs1: addPurchaseTransactionForm.inputs1.map((input) => {
            if (input.name === "factoryId") {
              Object.assign(input, {
                items: data.data.map((tmp) => {
                  return {
                    label: tmp.factory_name,
                    value: tmp.id,
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
      isLoadingFactories: isLoading,
    };
  };

  const getPurchaseDrugsDropdownMutation = useMutation(getDrugsByDrugFactory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      Object.assign(addPurchaseTransactionForm.carts, {
        template: addPurchaseTransactionForm.carts.template.map((tmp) => {
          if (tmp.name === "drugId") {
            Object.assign(tmp, {
              items: response.data.map((item) => {
                return {
                  label: item.drug,
                  value: item.id,
                  extra: item.purchase_price,
                };
              }),
            });
          }

          return tmp;
        }),
      });
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetPurchaseDrugFactoriesDropdownQuery,
    getPurchaseDrugsDropdown: (id) =>
      getPurchaseDrugsDropdownMutation.mutate(id),
  };
};

export default usePembelianController;
