import { getDrugs } from "@services/obat";
import { useQuery } from "react-query";

const useObatModel = () => {
  const useGetDrugs = () => {
    return useQuery({ queryKey: ["getDrugs"], queryFn: () => getDrugs() });
  };

  return {
    useGetDrugs,
  };
};

export default useObatModel;
