import useUserModel from "@models/userModel";
import { userProfileDataState } from "@store/atom/userState";
import { settingMenu } from "@utils/constant/drawer";
import { setRecoil } from "recoil-nexus";
import useAuthController from "./authController";

const useUserController = () => {
  const { useGetUserProfile } = useUserModel();
  const { logout } = useAuthController();

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

  return {
    useGetUserProfileQuery,
  };
};

export default useUserController;
