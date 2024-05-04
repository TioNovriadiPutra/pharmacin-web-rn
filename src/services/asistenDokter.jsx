import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDoctorAssistants = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDoctorAssistants, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorAssistantDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getDoctorAssistants}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDoctorAssistant = async (data) => {
  try {
    const reqBody = {
      ...data.data,
      gender: data.data.gender ? data.data.gender.value : null,
      doctorId: data.data.doctorId ? data.data.doctorId.value : null,
    };

    const response = await axiosInstance.put(`${endpoints.getDoctorAssistants}/${data.id}`, reqBody, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDoctorAssistant = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getDoctorAssistants}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
