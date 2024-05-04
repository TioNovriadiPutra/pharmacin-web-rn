import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import { getRecoil } from "recoil-nexus";

export const getDoctors = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDoctors, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`${endpoints.getDoctors}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorSpecialities = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getDoctorSpecialities, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addAssessments = async (data) => {
  try {
    const reqBody = {
      ...data.data,
      actions: data.data.actions.map((item) => {
        if (item.actionId) {
          return item.actionId.value;
        } else {
          return null;
        }
      }),
      drugCarts: data.data.drugCarts.map((item) => {
        if (item.drugId) {
          return {
            drugId: item.drugId.value,
            instruction: item.instruction,
            quantity: item.quantity,
            totalPrice: item.totalPrice,
          };
        }
      }),
    };

    const response = await axiosInstance.post(`${endpoints.addAssessments}/${data.id}`, reqBody, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    data.reset();

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDoctor = async (data) => {
  try {
    const reqBody = {
      ...data.data,
      gender: data.data.gender ? data.data.gender.value : null,
      specialityId: data.data.specialityId ? data.data.specialityId.value : null,
    };

    const response = await axiosInstance.put(`${endpoints.getDoctors}/${data.id}`, reqBody, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDoctor = async (id) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.getDoctors}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
