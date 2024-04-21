import usePasienModel from "@models/pasienModel";
import { addPatient } from "@services/pasien";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { isLoadingState, showFormModalState } from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { addPatientForm } from "@utils/constant/form";
import { pasienData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const usePasienController = () => {
  const { useGetPatients } = usePasienModel();

  const useGetPatientsQuery = () => {
    const results = useGetPatients();

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const error = results.some((result) => result.error);

    if (!isLoading) {
      if (!isError) {
        Object.assign(pasienData[1], {
          tableData: results[0].data.data.patientData.map((item) => {
            const arr = [item.full_name, item.record_number, item.phone, item.address, item.gender, item.date_birth];

            return {
              tables: arr,
              actions: [
                {
                  type: "button",
                  label: "Daftar",
                  active: item.ready,
                  color: colors.Secondary,
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

  return {
    useGetPatientsQuery,
  };
};

export default usePasienController;
