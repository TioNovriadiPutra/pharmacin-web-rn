import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDoctorConsultingQueues = async () => {
  try {
    const response = await axiosInstance.get(
      endpoints.getDoctorConsultingQueues,
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

export const getDoctorConsultingQueueDetail = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.getDoctorConsultingQueues}/${id}`,
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

export const cancelQueue = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `${endpoints.cancelQueue}/${id}`,
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
