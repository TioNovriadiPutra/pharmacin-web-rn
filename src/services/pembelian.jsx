import { tokenState } from "@store/atom/authState";
import { axiosInstance } from "@utils/config/axios";
import { endpoints } from "@utils/config/endpoint";
import moment from "moment";
import { getRecoil } from "recoil-nexus";

export const getPurchaseTransactions = async () => {
  try {
    const response = await axiosInstance.get(
      endpoints.getPurchaseTransactions,
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

export const getPurchaseTransactionDetail = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.getPurchaseTransactions}/${id}`,
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

export const addPurchaseTransaction = async (data) => {
  try {
    const finalData = {
      ...data.data,
      factoryId: data.data.factoryId ? data.data.factoryId.value : null,
      purchaseItems: data.data.purchaseItems.map((item) => {
        return {
          ...item,
          drugId: item.drugId ? item.drugId.value : null,
          expired: moment(item.expired).format("YYYY-MM-DD"),
        };
      }),
    };

    const response = await axiosInstance.post(
      endpoints.getPurchaseTransactions,
      finalData,
      {
        headers: {
          Authorization: `Bearer ${getRecoil(tokenState)}`,
        },
      }
    );

    data.onRefresh();

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
