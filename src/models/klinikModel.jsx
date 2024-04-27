import { getClinicDetail } from "@services/klinik";
import { useQuery } from "react-query";

const useKlinikModel = () => {
  const useGetClinicDetail = () => {
    return useQuery({
      queryKey: ["getClinicDetail"],
      queryFn: () => getClinicDetail(),
    });
  };

  return {
    useGetClinicDetail,
  };
};

export default useKlinikModel;
