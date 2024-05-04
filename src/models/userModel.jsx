import { getDoctors } from "@services/dokter";
import {
  getAdministrators,
  getDoctorDetail,
  getEmployees,
  getUserProfile,
} from "@services/user";
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

  const useGetDoctors = () => {
    return useQuery({
      queryKey: ["getDoctors"],
      queryFn: () => getDoctors(),
    });
  };

  const useGetDoctorDetail = (id) => {
    return useQuery({
      queryKey: ["getDoctorDetail"],
      queryFn: () => getDoctorDetail(id),
    });
  };

  return {
    useGetUserProfile,
    useGetAdministrators,
    useGetEmployees,
    useGetDoctors,
    useGetDoctorDetail,
  };
};

export default useUserModel;
