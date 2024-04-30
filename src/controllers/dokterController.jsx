import { useNavigation } from "@react-navigation/native";
import { addAssessments } from "@services/dokter";
import {
  isLoadingState,
  rowIdState,
  showValidationModalState,
  switchAssessmentIndex,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useDokterController = () => {
  const nav = useNavigation();

  const addAssessmentMutation = useMutation(addAssessments, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(showValidationModalState, false);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getDoctorConsultingQueues"]);
      nav.navigate("DokterStack", {
        screen: "DokterPasien",
      });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        handleToast("failed", error.error.message[0].message);
      } else {
        handleToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(rowIdState, null);
      setRecoil(switchAssessmentIndex, 0);
    },
  });

  return {
    addAssessment: (data) => addAssessmentMutation.mutate(data),
  };
};

export default useDokterController;
