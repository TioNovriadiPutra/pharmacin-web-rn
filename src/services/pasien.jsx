import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import moment from "moment";
import { getRecoil } from "recoil-nexus";

export const getPatients = async () => {
  try {
    const response = await axiosInstance.get(endpoints.getPatients, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addPatient = async (data) => {
  try {
    const finalData = {
      ...data,
      gender: data.gender ? data.gender.value : null,
      occupationId: data.occupationId ? data.occupationId.value : null,
      dob: data.dob ? moment(data.dob).format("YYYY-MM-DD") : null,
    };

    const response = await axiosInstance.post(endpoints.getPatients, finalData, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addPatientQueue = async (data) => {
  try {
    console.log(data);
    const response = await axiosInstance.post(
      `${endpoints.addPatientQueue}/${data.id}`,
      { doctorId: data.data.doctorId ? data.data.doctorId.value : null },
      {
        headers: {
          Authorization: `Bearer ${getRecoil(tokenState)}`,
        },
      }
    );

    data.reset();

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
