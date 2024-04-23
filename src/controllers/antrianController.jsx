import { cancelQueue } from "@services/antrian";
import {
  isLoadingState,
  rowIdState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useAntrianController = () => {
  const cancelQueueMutation = useMutation(cancelQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getPatients"]);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(showValidationModalState, false);
      setRecoil(rowIdState, null);
    },
  });

  return {
    cancelQueue: (id) => cancelQueueMutation.mutate(id),
  };
};

export default useAntrianController;
