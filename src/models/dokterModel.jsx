import { getDoctorSpecialities, getDoctors } from "@services/dokter";
import { useQueries } from "react-query";

const useDokterModel = () => {
  const useGetDoctors = () => {
    return useQueries([
      {
        queryKey: ["getDoctors"],
        queryFn: () => getDoctors(),
      },
      {
        queryKey: ["getDoctorSpecialities"],
        queryFn: () => getDoctorSpecialities(),
      },
    ]);
  };

  return {
    useGetDoctors,
  };
};

export default useDokterModel;
