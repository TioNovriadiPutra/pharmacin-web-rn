import { getDrugs } from "@services/obat";
import { getDrugCategories } from "@services/obatKategori";
import { getDrugFactories } from "@services/pabrikan";
import { getUnits } from "@services/unit";
import { useQueries } from "react-query";

const useObatModel = () => {
  const useGetDrugs = () => {
    return useQueries([
      { queryKey: ["getDrugs"], queryFn: () => getDrugs() },
      { queryKey: ["getDrugFactoriesDropdown"], queryFn: () => getDrugFactories() },
      { queryKey: ["getDrugCategoriesDropdown"], queryFn: () => getDrugCategories() },
      { queryKey: ["getUnitsDropdown"], queryFn: () => getUnits() },
    ]);
  };

  return {
    useGetDrugs,
  };
};

export default useObatModel;
