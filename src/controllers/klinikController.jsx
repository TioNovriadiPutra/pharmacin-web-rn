import useKlinikModel from "@models/klinikModel";
import { updateClinicDetail } from "@services/klinik";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { isLoadingState, showFormModalState } from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { updateClinicForm } from "@utils/constant/form";
import { manajemenKlinikDetail } from "@utils/constant/pageDetail";
import { manajemenKlinikHeader } from "@utils/constant/pageHeader";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useKlinikController = () => {
  const { useGetClinicDetail } = useKlinikModel();

  const useGetClinicDetailQuery = () => {
    const { data, isLoading, isError, error } = useGetClinicDetail();

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenKlinikDetail.detailData, {
          list: [
            {
              ...manajemenKlinikDetail.detailData.list[0],
              data: data.data.clinic_name,
            },
            {
              ...manajemenKlinikDetail.detailData.list[1],
              data: data.data.address || "-",
            },
            {
              ...manajemenKlinikDetail.detailData.list[2],
              data: data.data.clinic_phone,
            },
          ],
        });

        Object.assign(updateClinicForm, {
          defaultValues: {
            clinicName: data.data.clinic_name,
            address: data.data.address,
            clinicPhone: data.data.clinic_phone,
          },
          onSubmit: (data) => updateClinicDetailMutation.mutate(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const updateClinicDetailMutation = useMutation(updateClinicDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries(["getClinicDetail"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetClinicDetailQuery,
  };
};

export default useKlinikController;
