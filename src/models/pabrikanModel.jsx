import { useQuery } from "react-query";
import { getDrugFactories, getDrugFactoryDetail } from "@services/pabrikan";

const usePabrikanModel = () => {
  const useGetDrugFactories = () => {
    return useQuery({
      queryKey: ["getDrugFactories"],
      queryFn: () => getDrugFactories(),
    });
  };

  const useGetDrugFactoryDetail = (id) => {
    return useQuery({
      queryKey: ["getDrugFactoryDetail"],
      queryFn: () => getDrugFactoryDetail(id),
    });
  };

  return {
    useGetDrugFactories,
    useGetDrugFactoryDetail,
  };
};

export default usePabrikanModel;
