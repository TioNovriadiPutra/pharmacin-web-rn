import useUserModel from "@models/userModel";
import { userProfileDataState } from "@store/atom/userState";
import { settingMenu } from "@utils/constant/drawer";
import { setRecoil } from "recoil-nexus";
import useAuthController from "./authController";
import {
  manajemenAdministratorData,
  manajemenDokterData,
  manajemenKaryawanData,
} from "@utils/constant/pageTable";
import {
  manajemenAdministratorForm,
  manajemenKaryawanForm,
} from "@utils/constant/form";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import {
  deleteAdministrator,
  deleteEmployee,
  getUserDetail,
  updateAdministrator,
  updateEmployee,
} from "@services/user";
import {
  isLoadingState,
  rowIdState,
  showFormModalState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { formDataState, validationErrorState } from "@store/atom/formState";

const useUserController = () => {
  const {
    useGetUserProfile,
    useGetAdministrators,
    useGetEmployees,
    useGetDoctors,
  } = useUserModel();
  const { logout, registerAdministrator, registerEmployee } =
    useAuthController();

  const useGetUserProfileQuery = () => {
    const { data, isLoading, isError } = useGetUserProfile();

    if (!isLoading) {
      if (!isError) {
        setRecoil(userProfileDataState, {
          name: data.data.full_name,
          role: data.data.role_name,
        });

        Object.assign(settingMenu[1], {
          onPress: () => logout(),
        });
      }
    }

    return {
      isLoading,
    };
  };

  const useGetAdministratorsQuery = () => {
    const { data, isLoading, isError, error } = useGetAdministrators();

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenAdministratorData, {
          tableData: data.data.map((item) => {
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
                value: item.address,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "edit",
                  onPress: () =>
                    getAdministratorUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () =>
                        deleteAdministratorMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(manajemenAdministratorForm, {
          onSubmit: (data) => registerAdministrator(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const useGetEmployeesQuery = () => {
    const { data, isLoading, isError, error } = useGetEmployees();

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenKaryawanData, {
          tableData: data.data.map((item) => {
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
                value: item.address,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "edit",
                  onPress: () => getEmployeeUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () => deleteEmployeeMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(manajemenKaryawanForm, {
          onSubmit: (data) => registerEmployee(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const useGetDoctorsQuery = () => {
    const { data, isLoading, isError, error } = useGetDoctors();

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenDokterData, {
          tableData: data.data.map((item) => {
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
                },
                {
                  type: "delete",
                },
              ],
            };
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

  const getAdministratorUpdateFormMutation = useMutation(getUserDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(manajemenAdministratorForm));

      Object.assign(formData, {
        title: "Edit Administrator",
        inputs: formData.inputs.splice(0, 4),
        defaultValues: {
          fullName: response.data.full_name,
          gender: {
            label: response.data.gender,
            value: response.data.gender === "Laki-laki" ? "male" : "female",
          },
          phone: response.data.phone,
          address: response.data.address,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
        },
        onSubmit: (data) =>
          updateAdministratorMutation.mutate({ data, id: response.data.id }),
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

  const getEmployeeUpdateFormMutation = useMutation(getUserDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(manajemenKaryawanForm));

      Object.assign(formData, {
        title: "Edit Employee",
        inputs: formData.inputs.splice(0, 4),
        defaultValues: {
          fullName: response.data.full_name,
          gender: {
            label: response.data.gender,
            value: response.data.gender === "Laki-laki" ? "male" : "female",
          },
          phone: response.data.phone,
          address: response.data.address,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
        },
        onSubmit: (data) =>
          updateEmployeeMutation.mutate({ data, id: response.data.id }),
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

  const updateAdministratorMutation = useMutation(updateAdministrator, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showFormModalState, false);
      setRecoil(formDataState, null);
      queryClient.invalidateQueries(["getAdministrators"]);
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

  const updateEmployeeMutation = useMutation(updateEmployee, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showFormModalState, false);
      setRecoil(formDataState, null);
      queryClient.invalidateQueries(["getEmployees"]);
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

  const deleteAdministratorMutation = useMutation(deleteAdministrator, {
    onMutate: () => {
      setRecoil(showValidationModalState, false);
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getAdministrators"]);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(rowIdState, null);
      setRecoil(isLoadingState, false);
    },
  });

  const deleteEmployeeMutation = useMutation(deleteEmployee, {
    onMutate: () => {
      setRecoil(showValidationModalState, false);
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getEmployees"]);
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
    useGetUserProfileQuery,
    useGetAdministratorsQuery,
    useGetEmployeesQuery,
    useGetDoctorsQuery,
  };
};

export default useUserController;
