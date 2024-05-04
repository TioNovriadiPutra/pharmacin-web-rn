import { getAdministrators, getEmployees, getUserProfile } from "@services/user";
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

  const useGetEmployees = () => {
    return useQuery({
      queryKey: ["getEmployees"],
      queryFn: () => getEmployees(),
    });
  };

  return {
    useGetUserProfile,
    useGetAdministrators,
    useGetEmployees,
  };
};

export default useUserModel;
