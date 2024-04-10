import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDrugCategories = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDrugCategories, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDrugCategoryDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getDrugCategories}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addDrugCategory = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.getDrugCategories, data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDrugCategory = async (data) => {
  try {
    const response = await axiosInstance.put(`${endpoints.getDrugCategories}/${data.id}`, data.data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDrugCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getDrugCategories}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
