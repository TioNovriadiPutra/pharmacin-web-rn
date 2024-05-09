import usePembelianModel from "@models/pembelianModel";
import { useNavigation } from "@react-navigation/native";
import { getDrugsByDrugFactory } from "@services/obat";
import { addPurchaseTransaction } from "@services/pembelian";
import { validationErrorState } from "@store/atom/formState";
import { isLoadingState } from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { addPurchaseTransactionForm } from "@utils/constant/form";
import { pembelianDetail } from "@utils/constant/pageDetail";
import { pembelianKelolaHeader } from "@utils/constant/pageHeader";
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
              { type: "text", value: item.invoice_number },
              { type: "text", value: item.factory_name },
              { type: "text", value: item.created_at },
              { type: "currency", value: item.total_price },
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

        Object.assign(pembelianKelolaHeader.headerFunction.function[0], {
          onPress: () =>
            nav.navigate("PembelianStack", {
              screen: "PembelianTambah",
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

  const useGetPurchaseTransactionDetailQuery = (id) => {
    const { data, isLoading, isError, error } =
      useGetPurchaseTransactionDetail(id);

    if (!isLoading) {
      if (!isError) {
        Object.assign(pembelianDetail, {
          detailBlock: [
            [
              {
                ...pembelianDetail.detailBlock[0][0],
                value: data.data.invoice_number,
              },
              {
                ...pembelianDetail.detailBlock[0][1],
                value: data.data.factory_name,
              },
              {
                ...pembelianDetail.detailBlock[0][2],
                value: data.data.created_at,
              },
            ],
          ],
          detailData: [
            {
              ...pembelianDetail.detailData[0],
              cartData: data.data.shopping_carts.map((cart) => {
                const arr = [
                  { type: "text", value: cart.drug_name },
                  { type: "text", value: cart.expired },
                  { type: "text", value: cart.quantity },
                  { type: "currency", value: cart.purchase_price },
                  { type: "currency", value: cart.total_price },
                ];

                return {
                  tables: arr,
                };
              }),
              total: currencyFormatter(
                data.data.shopping_carts.reduce(
                  (total, num) => total + num.total_price,
                  0
                )
              ),
            },
          ],
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
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
      queryClient.invalidateQueries(["getPurchaseTransactions", "getStocks"]);
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
    useGetPurchaseTransactionDetailQuery,
    useGetPurchaseDrugFactoriesDropdownQuery,
    getPurchaseDrugsDropdown: (id) =>
      getPurchaseDrugsDropdownMutation.mutate(id),
    addPurchaseTransaction: (data) =>
      addPurchaseTransactionMutation.mutate(data),
  };
};

export default usePembelianController;
