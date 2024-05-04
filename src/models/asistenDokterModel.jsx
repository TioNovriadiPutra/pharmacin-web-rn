import { getDoctorAssistants } from "@services/asistenDokter";
import { getDoctors } from "@services/dokter";
import { useQueries } from "react-query";

const useAsistenDokterModel = () => {
  const useGetDoctorAssistants = () => {
    return useQueries([
      {
        queryKey: ["getDoctorAssistants"],
        queryFn: () => getDoctorAssistants(),
      },
      {
        queryKey: ["getDoctorsDropdown"],
        queryFn: () => getDoctors(),
      },
    ]);
  };

  return {
    useGetDoctorAssistants,
  };
};

export default useAsistenDokterModel;
