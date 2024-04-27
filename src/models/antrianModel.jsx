import {
  getDoctorConsultingQueueDetail,
  getDoctorConsultingQueues,
} from "@services/antrian";
import { getDrugsAssessment } from "@services/obat";
import { useQueries, useQuery } from "react-query";

const useAntrianModel = () => {
  const useGetDoctorConsultingQueues = () => {
    return useQuery({
      queryKey: ["getDoctorConsultingQueues"],
      queryFn: () => getDoctorConsultingQueues(),
    });
  };

  const useGetDoctorConsultingQueueDetail = (id) => {
    return useQueries([
      {
        queryKey: ["getDoctorConsultingQueueDetail"],
        queryFn: () => getDoctorConsultingQueueDetail(id),
      },
      {
        queryKey: ["getDrugsAssessment"],
        queryFn: () => getDrugsAssessment(),
      },
    ]);
  };

  return {
    useGetDoctorConsultingQueues,
    useGetDoctorConsultingQueueDetail,
  };
};

export default useAntrianModel;
