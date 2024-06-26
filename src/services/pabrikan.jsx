import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDrugFactories = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDrugFactories, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDrugFactoryDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getDrugFactoryDetail}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
};

export const addDrugFactory = async (data) => {
  try {
    const response = await axiosInstance.post(endpoints.getDrugFactoryDetail, data, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDrugFactory = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getDrugFactoryDetail}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
