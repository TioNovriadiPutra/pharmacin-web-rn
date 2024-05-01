import { getAdministrators, getUserProfile } from "@services/user";
import { useQuery } from "react-query";

const useUserModel = () => {
  const useGetUserProfile = () => {
    return useQuery({
      queryKey: ["getUserProfile"],
      queryFn: () => getUserProfile(),
    });
  };

  const useGetAdministrators = () => {
    return useQuery({
      queryKey: ["getAdministrators"],
      queryFn: () => getAdministrators(),
    });
  };

  return {
    useGetUserProfile,
    useGetAdministrators,
  };
};

export default useUserModel;
