import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getUserProfile, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getUserDetail}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAdministrators = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getAdministrators, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getEmployees = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getEmployees, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAdministrator = async (data) => {
  try {
    const reqBody = {
      ...data.data,
      gender: data.data.gender ? data.data.gender.value : null,
    };

    const response = await axiosInstance.put(`${endpoints.getAdministrators}/${data.id}`, reqBody, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateEmployee = async (data) => {
  try {
    const reqBody = {
      ...data.data,
      gender: data.data.gender ? data.data.gender.value : null,
    };

    const response = await axiosInstance.put(`${endpoints.getEmployees}/${data.id}`, reqBody, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAdministrator = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getAdministrators}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getEmployees}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
