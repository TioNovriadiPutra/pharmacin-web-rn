import useUserModel from "@models/userModel";
import { userProfileDataState } from "@store/atom/userState";
import { settingMenu } from "@utils/constant/drawer";
import { setRecoil } from "recoil-nexus";
import useAuthController from "./authController";
import { manajemenAdministratorData } from "@utils/constant/pageTable";
import { manajemenAdministratorForm } from "@utils/constant/form";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { deleteAdministrator } from "@services/user";
import {
  isLoadingState,
  rowIdState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";

const useUserController = () => {
  const { useGetUserProfile, useGetAdministrators } = useUserModel();
  const { logout, registerAdministrator } = useAuthController();

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

  return {
    useGetUserProfileQuery,
    useGetAdministratorsQuery,
  };
};

export default useUserController;
