import { getDrugFactories } from "@services/pabrikan";
import { useQuery } from "react-query";

const usePembelianModel = () => {
  const getPurchaseDrugFactoriesDropdown = () => {
    return useQuery({
      queryKey: ["getPurchaseDrugFactoriesDropdown"],
      queryFn: () => getDrugFactories(),
    });
  };

  return {
    getPurchaseDrugFactoriesDropdown,
  };
};

export default usePembelianModel;
