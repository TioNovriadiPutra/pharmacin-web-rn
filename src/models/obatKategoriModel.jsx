import { getDrugCategories } from "@services/obatKategori";
import { useQuery } from "react-query";

const useObatKategoriModel = () => {
  const useGetDrugCategories = () => {
    return useQuery({ queryKey: ["getDrugCategories"], queryFn: () => getDrugCategories() });
  };

  return {
    useGetDrugCategories,
  };
};

export default useObatKategoriModel;
