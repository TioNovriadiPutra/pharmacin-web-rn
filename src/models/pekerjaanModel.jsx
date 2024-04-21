import { getOccupations } from "@services/pekerjaan";
import { useQuery } from "react-query";

const usePekerjaanModel = () => {
  const useGetOccupations = () => {
    return useQuery({
      queryKey: ["getOccupations"],
      queryFn: () => getOccupations(),
    });
  };

  return {
    useGetOccupations,
  };
};

export default usePekerjaanModel;
