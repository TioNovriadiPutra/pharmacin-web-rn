import {
  getDoctorConsultingQueueDetail,
  getDoctorConsultingQueues,
} from "@services/antrian";
import { getDrugsAssessment } from "@services/obat";
import { getActions } from "@services/tindakan";
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
      {
        queryKey: ["getActionsDropdown"],
        queryFn: () => getActions(),
      },
    ]);
  };

  return {
    useGetDoctorConsultingQueues,
    useGetDoctorConsultingQueueDetail,
  };
};

export default useAntrianModel;
