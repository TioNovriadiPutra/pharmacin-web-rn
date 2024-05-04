import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

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

export const registerAdministrator = async (data) => {
  try {
    const reqBody = {
      ...data,
      gender: data.gender ? data.gender.value : null,
    };

    const response = await axiosInstance.post(
      endpoints.registerAdministrator,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${getRecoil(tokenState)}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerEmployee = async (data) => {
  try {
    const reqBody = {
      ...data,
      gender: data.gender ? data.gender.value : null,
    };

    const response = await axiosInstance.post(
      endpoints.registerEmployee,
      reqBody,
      {
        headers: {
          Authorization: `Bearer ${getRecoil(tokenState)}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.get(endpoints.logout, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
