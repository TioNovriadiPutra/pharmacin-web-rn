import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getLaborat = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getLaborat, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const getLaboratDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getLaborat}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const addLaborat = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.getLaborat, data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const updateLaborat = async (data) => {
  try {
    const response = await axiosInstance.put(`${endpoints.getLaborat}/${data.id}`, data.data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
    } catch (error) {
    throw error.response.data;
    }
}

export const deleteLaborat = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getLaborat}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}