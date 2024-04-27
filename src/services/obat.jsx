import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDrugs = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDrugs, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDrugDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getDrugs}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDrugsByDrugFactory = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.getDrugsByDrugFactory}/${id}`,
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

export const getDrugsAssessment = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDrugsAssessment, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addDrug = async (data) => {
  try {
    const finalData = {
      ...data,
      unitId: data.unitId ? data.unitId.value : null,
      categoryId: data.categoryId ? data.categoryId.value : null,
      factoryId: data.factoryId ? data.factoryId.value : null,
    };

    const response = await axiosInstance.post(endpoints.getDrugs, finalData, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDrug = async (data) => {
  try {
    const finalData = {
      ...data.data,
      unitId: data.data.unitId ? data.data.unitId.value : null,
      categoryId: data.data.categoryId ? data.data.categoryId.value : null,
      factoryId: data.data.factoryId ? data.data.factoryId.value : null,
    };

    const response = await axiosInstance.put(
      `${endpoints.getDrugs}/${data.id}`,
      finalData,
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

export const deleteDrug = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getDrugs}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
