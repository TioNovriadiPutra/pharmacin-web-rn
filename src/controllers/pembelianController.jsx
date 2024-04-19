import usePembelianModel from "@models/pembelianModel";
import { useNavigation } from "@react-navigation/native";
import { getDrugsByDrugFactory } from "@services/obat";
import { addPurchaseTransaction } from "@services/pembelian";
import { validationErrorState } from "@store/atom/formState";
import { isLoadingState } from "@store/atom/pageState";
import { addPurchaseTransactionForm } from "@utils/constant/form";
import { pembelianData } from "@utils/constant/pageTable";
import { currencyFormatter } from "@utils/helper/currency";
import { hashId } from "@utils/helper/hash";
import { handleToast } from "@utils/helper/toast";
import moment from "moment";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const usePembelianController = () => {
  const {
    useGetPurchaseDrugFactoriesDropdown,
    useGetPurchaseTransactions,
    useGetPurchaseTransactionDetail,
  } = usePembelianModel();

  const useGetPurchaseTransactionsQuery = () => {
    const { data, isLoading, isError, error } = useGetPurchaseTransactions();

    const nav = useNavigation();

    if (!isLoading) {
      if (!isError) {
        Object.assign(pembelianData, {
          tableData: data.data.map((item) => {
            const arr = [
              item.invoice_number,
              item.factory_name,
              moment(item.created_at).format("DD-MM-YYYY"),
              currencyFormatter(item.total_price),
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "invoice",
                  onPress: () =>
                    nav.navigate("PembelianStack", {
                      screen: "PembelianInvoice",
                      params: {
                        id: hashId(item.id),
                      },
                    }),
                },
              ],
            };
          }),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const useGetPurchaseTransactionDetailQuery = () => {
    const { data, isLoading, isError, error } =
      useGetPurchaseTransactionDetail();

    if (!isLoading) {
      if (!isError) {
      }
    }
  };

  const useGetPurchaseDrugFactoriesDropdownQuery = () => {
    const { data, isLoading, isError } = useGetPurchaseDrugFactoriesDropdown();

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

  const addPurchaseTransactionMutation = useMutation(addPurchaseTransaction, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
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
    useGetPurchaseTransactionsQuery,
    useGetPurchaseDrugFactoriesDropdownQuery,
    getPurchaseDrugsDropdown: (id) =>
      getPurchaseDrugsDropdownMutation.mutate(id),
    addPurchaseTransaction: (data) =>
      addPurchaseTransactionMutation.mutate(data),
  };
};

export default usePembelianController;
