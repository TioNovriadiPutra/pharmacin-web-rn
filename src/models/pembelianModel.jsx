import { getDrugFactories } from "@services/pabrikan";
import {
  getPurchaseTransactionDetail,
  getPurchaseTransactions,
} from "@services/pembelian";
import { useQuery } from "react-query";

const usePembelianModel = () => {
  const useGetPurchaseDrugFactoriesDropdown = () => {
    return useQuery({
      queryKey: ["getPurchaseDrugFactoriesDropdown"],
      queryFn: () => getDrugFactories(),
    });
  };

  const useGetPurchaseTransactions = () => {
    return useQuery({
      queryKey: ["getPurchaseTransactions"],
      queryFn: () => getPurchaseTransactions(),
    });
  };

  const useGetPurchaseTransactionDetail = (id) => {
    return useQuery({
      queryKey: ["getPurchaseTransactionDetail"],
      queryFn: () => getPurchaseTransactionDetail(id),
    });
  };

  return {
    useGetPurchaseDrugFactoriesDropdown,
    useGetPurchaseTransactions,
    useGetPurchaseTransactionDetail,
  };
};

export default usePembelianModel;
