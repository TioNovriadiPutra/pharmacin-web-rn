import useDokterModel from "@models/dokterModel";
import { useNavigation } from "@react-navigation/native";
import { addAssessments, deleteDoctor, getDoctorDetail, updateDoctor } from "@services/dokter";
import { isLoadingState, rowIdState, showFormModalState, showValidationModalState, switchAssessmentIndex } from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { manajemenDokterForm } from "@utils/constant/form";
import { manajemenDokterData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import useAuthController from "./authController";
import { formDataState, validationErrorState } from "@store/atom/formState";

const useDokterController = () => {
  const { useGetDoctors } = useDokterModel();
  const { registerDoctor } = useAuthController();

  const nav = useNavigation();

  const useGetDoctorsQuery = () => {
    const results = useGetDoctors();

    const isLoading = results.some((item) => item.isLoading);
    const isError = results.some((item) => item.isError);
    const error = results.some((item) => item.error);

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenDokterData, {
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
                value: item.speciality_name,
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
                  onPress: () => getDoctorUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () => deleteDoctorMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(manajemenDokterForm, {
          inputs: manajemenDokterForm.inputs.map((input) => {
            if (input.name === "specialityId") {
              Object.assign(input, {
                items: results[1].data.data.map((item) => {
                  return {
                    label: item.speciality,
                    value: item.id,
                  };
                }),
              });
            }

            return input;
          }),
          onSubmit: (data) => registerDoctor(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const getDoctorUpdateFormMutation = useMutation(getDoctorDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(manajemenDokterForm));

      Object.assign(formData, {
        title: "Edit Dokter",
        inputs: formData.inputs.splice(0, 4),
        defaultValues: {
          fullName: response.data.full_name,
          gender: response.data.gender,
          phone: response.data.phone,
          specialityId: response.data.speciality,
          address: response.data.address,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
        },
        onSubmit: (data) => updateDoctorMutation.mutate({ data, id: response.data.id }),
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

  const updateDoctorMutation = useMutation(updateDoctor, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showFormModalState, false);
      setRecoil(formDataState, null);
      queryClient.invalidateQueries(["getDoctors"]);
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

  const deleteDoctorMutation = useMutation(deleteDoctor, {
    onMutate: () => {
      setRecoil(showValidationModalState, false);
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getDoctors"]);
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
    useGetDoctorsQuery,
    addAssessment: (data) => addAssessmentMutation.mutate(data),
  };
};

export default useDokterController;
