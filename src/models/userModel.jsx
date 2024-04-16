import { getUserProfile } from "@services/user";
import { useQuery } from "react-query";

const useUserModel = () => {
  const useGetUserProfile = () => {
    return useQuery({
      queryKey: ["getUserProfile"],
      queryFn: () => getUserProfile(),
    });
  };

  return {
    useGetUserProfile,
  };
};

export default useUserModel;
