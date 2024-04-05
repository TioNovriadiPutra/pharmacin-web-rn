import { useQuery } from "react-query";
import { getDrugFactories } from "@services/pabrikan";

const usePabrikanModel = () => {
  const useGetDrugFactories = () => {
    return useQuery({
      queryKey: ["getDrugFactories"],
      queryFn: () => getDrugFactories(),
    });
  };

  return {
    useGetDrugFactories,
  };
};

export default usePabrikanModel;
