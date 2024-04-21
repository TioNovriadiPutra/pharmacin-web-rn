import { getPatients } from "@services/pasien";
import { getOccupations } from "@services/pekerjaan";
import { useQueries } from "react-query";

const usePasienModel = () => {
  const useGetPatients = () => {
    return useQueries([
      {
        queryKey: ["getPatients"],
        queryFn: () => getPatients(),
      },
      {
        queryKey: ["getOccupationsDropdown"],
        queryFn: () => getOccupations(),
      },
    ]);
  };

  return {
    useGetPatients,
  };
};

export default usePasienModel;
