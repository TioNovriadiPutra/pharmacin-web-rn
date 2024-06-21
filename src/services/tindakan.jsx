import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getActions = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getActions, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getActionDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getActions}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const addAction = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.getActions, data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAction = async (data) => {
  try {
    const response = await axiosInstance.put(`${endpoints.getActions}/${data.id}`, data.data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
  } catch(error){
    throw error.response.data;
  }
};

export const deleteAction = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getActions}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
