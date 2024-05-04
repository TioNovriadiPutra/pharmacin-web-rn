import useAsistenDokterModel from "@models/asistenDokterModel";
import useAuthController from "./authController";
import { manajemenAsistenDokterForm } from "@utils/constant/form";
import { handleToast } from "@utils/helper/toast";
import { manajemenAsistenDokterData } from "@utils/constant/pageTable";
import { useMutation } from "react-query";
import { deleteDoctorAssistant, getDoctorAssistantDetail, updateDoctorAssistant } from "@services/asistenDokter";
import { setRecoil } from "recoil-nexus";
import { isLoadingState, rowIdState, showFormModalState, showValidationModalState } from "@store/atom/pageState";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { queryClient } from "@utils/config/client";

const useAsistenDokterController = () => {
  const { useGetDoctorAssistants } = useAsistenDokterModel();
  const { registerDoctorAssistant } = useAuthController();

  const useGetDoctorAssistantsQuery = () => {
    const results = useGetDoctorAssistants();

    const isLoading = results.some((item) => item.isLoading);
    const isError = results.some((item) => item.isError);
    const error = results.some((item) => item.error);

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenAsistenDokterData, {
          tableData: results[0].data.data.map((item) => {
            const arr = [
              {
                type: "text",
                value: item.email,
              },
              {
                type: "text",
                value: item.full_name,
              },
              {
                type: "text",
                value: item.gender,
              },
              {
                type: "text",
                value: item.phone,
              },
              {
                type: "text",
                value: item.doctor_full_name,
              },
              {
                type: "text",
                value: item.address,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "edit",
                  onPress: () => getDoctorAssistantUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () => deleteDoctorAssistantMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(manajemenAsistenDokterForm, {
          inputs: manajemenAsistenDokterForm.inputs.map((input) => {
            if (input.name === "doctorId") {
              Object.assign(input, {
                items: results[1].data.data.map((item) => {
                  return {
                    label: item.full_name,
                    value: item.doctor_id,
                  };
                }),
              });
            }

            return input;
          }),
          onSubmit: (data) => registerDoctorAssistant(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const getDoctorAssistantUpdateFormMutation = useMutation(getDoctorAssistantDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(manajemenAsistenDokterForm));

      Object.assign(formData, {
        title: "Edit Asisten Dokter",
        inputs: formData.inputs.splice(0, 5),
        defaultValues: {
          fullName: response.data.full_name,
          gender: response.data.gender,
          phone: response.data.phone,
          doctorId: response.data.doctor,
          address: response.data.address,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
        },
        onSubmit: (data) => updateDoctorAssistantMutation.mutate({ data, id: response.data.id }),
      });

      setRecoil(showFormModalState, true);
      setRecoil(formDataState, formData);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const updateDoctorAssistantMutation = useMutation(updateDoctorAssistant, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showFormModalState, false);
      setRecoil(formDataState, null);
      queryClient.invalidateQueries(["getDoctorAssistants"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
        setRecoil(showFormModalState, false);
        setRecoil(validationErrorState, null);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const deleteDoctorAssistantMutation = useMutation(deleteDoctorAssistant, {
    onMutate: () => {
      setRecoil(showValidationModalState, false);
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getDoctorAssistants"]);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(rowIdState, null);
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetDoctorAssistantsQuery,
  };
};

export default useAsistenDokterController;
