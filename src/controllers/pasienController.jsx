import usePasienModel from "@models/pasienModel";
import { addPatient, addPatientQueue } from "@services/pasien";
import { formDataState, validationErrorState } from "@store/atom/formState";
import {
  isLoadingState,
  pendaftaranModalData,
  rowIdState,
  showFormModalState,
  showPendaftaranModalState,
  showValidationModalState,
} from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { queryClient } from "@utils/config/client";
import { addPatientForm, addPatientQueueForm } from "@utils/constant/form";
import { pasienData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import useAntrianController from "./antrianController";

const usePasienController = () => {
  const { useGetPatients } = usePasienModel();
  const { cancelQueue } = useAntrianController();

  const useGetPatientsQuery = () => {
    const results = useGetPatients();

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const error = results.some((result) => result.error);

    if (!isLoading) {
      if (!isError) {
        console.log(results[0].data);

        Object.assign(pasienData[0], {
          tableData: results[0].data.data.queueData.map((item) => {
            const arr = [
              {
                type: "text",
                value: item.registration_number,
              },
              {
                type: "text",
                value: item.full_name,
              },
              {
                type: "text",
                value: item.record_number,
              },
              {
                type: "text",
                value: item.gender,
              },
              {
                type: "text",
                value: item.created_at,
              },
              {
                type: "status",
                value: item.status,
                color: colors.Failed,
                textColor: colors.Danger,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(showValidationModalState, true);
                    setRecoil(rowIdState, {
                      onDelete: () => cancelQueue(item.id),
                    });
                  },
                },
              ],
            };
          }),
        });

        Object.assign(pasienData[1], {
          tableData: results[0].data.data.patientData.map((item) => {
            const arr = [
              { type: "text", value: item.full_name },
              { type: "text", value: item.record_number },
              { type: "text", value: item.phone },
              { type: "text", value: item.address },
              { type: "text", value: item.gender },
              { type: "text", value: item.date_birth },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "button",
                  label: "Daftar",
                  active: item.ready,
                  color: colors.Secondary,
                  onPress: () => {
                    setRecoil(showPendaftaranModalState, true);
                    setRecoil(pendaftaranModalData, {
                      fullName: item.full_name,
                      onPress: (data, reset) =>
                        addPatientQueueMutation.mutate({
                          data,
                          id: item.id,
                          reset,
                        }),
                    });
                  },
                },
              ],
            };
          }),
        });

        Object.assign(addPatientForm, {
          inputs: addPatientForm.inputs.map((input) => {
            if (input.name === "occupationId") {
              Object.assign(input, {
                items: results[1].data.data.map((item) => {
                  return {
                    label: item.occupation_name,
                    value: item.id,
                  };
                }),
              });
            }

            return input;
          }),
          onSubmit: (data) => addPatientMutation.mutate(data),
        });

        Object.assign(addPatientQueueForm, {
          inputs: addPatientQueueForm.inputs.map((input) => {
            if (input.name === "doctorId") {
              Object.assign(input, {
                items: results[2].data.data.map((item) => {
                  return {
                    label: item.full_name,
                    value: item.doctor_id,
                  };
                }),
              });
            }

            return input;
          }),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const addPatientMutation = useMutation(addPatient, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries(["getPatients"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
        setRecoil(formDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const addPatientQueueMutation = useMutation(addPatientQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showPendaftaranModalState, false);
      setRecoil(pendaftaranModalData, {
        fullName: "",
      });
      queryClient.invalidateQueries(["getPatients"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
        setRecoil(showPendaftaranModalState, false);
        setRecoil(pendaftaranModalData, {
          fullName: "",
        });
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetPatientsQuery,
  };
};

export default usePasienController;
