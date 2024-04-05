import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, logout, register } from "@services/auth";
import {
  paymentStatusState,
  roleIdState,
  tokenState,
} from "@store/atom/authState";
import { validationErrorState } from "@store/atom/formState";
import { isLoadingState } from "@store/atom/pageState";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useAuthController = (nav) => {
  const isLoggedIn = async () => {
    const token = await AsyncStorage.getItem("@token");
    const roleId = await AsyncStorage.getItem("@roleId");
    const paymentStatus = await AsyncStorage.getItem("@paymentStatus");

    if (token) {
      setRecoil(tokenState, token);
      setRecoil(roleIdState, JSON.parse(roleId));
      setRecoil(paymentStatusState, JSON.parse(paymentStatus));
    }
  };

  const loginMutation = useMutation(login, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      setRecoil(tokenState, response.token.token);
      setRecoil(roleIdState, response.roleId);
      setRecoil(paymentStatusState, response.paymentStatus);
      AsyncStorage.setItem("@token", response.token.token);
      AsyncStorage.setItem("@roleId", JSON.stringify(response.roleId));
      AsyncStorage.setItem(
        "@paymentStatus",
        JSON.stringify(response.paymentStatus)
      );

      handleToast("success", response.message);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const registerMutation = useMutation(register, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      nav.navigate("Login");
    },
    onError: (error) => {
      setRecoil(validationErrorState, error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const logoutMutation = useMutation(logout, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      setRecoil(tokenState, null);
      setRecoil(roleIdState, null);
      setRecoil(paymentStatusState, null);
      AsyncStorage.removeItem("@token");
      AsyncStorage.removeItem("@roleId");
      AsyncStorage.removeItem("@paymentStatus");

      handleToast("success", response.message);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  return {
    login: (data) => loginMutation.mutate(data),
    register: (data) =>
      registerMutation.mutate({
        ...data,
        gender: data.gender ? data.gender.value : null,
      }),
    isLoggedIn,
    logout: () => logoutMutation.mutate(),
  };
};

export default useAuthController;
