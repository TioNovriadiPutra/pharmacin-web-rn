import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.login, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.registerAdmin, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
