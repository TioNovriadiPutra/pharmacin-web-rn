import { useQuery } from "react-query";
import { getLaborat } from "@services/laborat";

const useLaboratModel = () => {
  const useGetLaborat = () => {
    return useQuery({ queryKey: ["getLaborat"], queryFn: () => getLaborat() });
  };

  return {
    useGetLaborat,
  };
};

export default useLaboratModel;