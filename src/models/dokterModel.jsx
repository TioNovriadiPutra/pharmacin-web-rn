import { getDoctors } from "@services/dokter";
import { useQuery } from "react-query";

const useDokterModel = () => {
  const useGetDoctors = () => {
    return useQuery({
      queryKey: ["getDoctors"],
      queryFn: () => getDoctors(),
    });
  };

  return {
    useGetDoctors,
  };
};

export default useDokterModel;
