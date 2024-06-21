import useTindakanModel from "@models/tindakanModel";
import {addAction,
    deleteAction,
    getActionDetail,
    updateAction,
 } from "@services/tindakan";
import { formDataState, validationErrorState } from "@store/atom/formState";
import {
  isLoadingState,
  rowIdState,
  showFormModalState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { manajemenTindakanData } from "@utils/constant/pageTable";
import { manajemenTindakanForm } from "@utils/constant/form";

const useTindakanController = () => {
    const { useGetActions } = useTindakanModel();

    const useGetTindakanQuery = () => {
        const { data, isLoading, isError } = useGetActions();

        if (!isLoading) {
            if (!isError) {
                Object.assign(manajemenTindakanData, {
                    tableData: data.data.map((item) => {
                        const arr = [
                            { type: "text", value: item.id },
                            { type: "text", value: item.action_name },
                            { type: "text", value: item.action_price },
                        ];

                        return {
                            tables: arr,
                            actions: [
                                {
                                    type: "edit",
                                    onPress: () =>
                                        getTindakanUpdateFormMutation.mutate(item.id),
                                },
                                {
                                    type: "delete",
                                    onPress: () => {
                                        setRecoil(rowIdState, {
                                            type: "delete",
                                            onDelete: () =>
                                                deleteTindakanMutation.mutate(item.id),
                                        });
                                        setRecoil(showValidationModalState, true);
                                    },
                                },
                            ],
                        };
                    }),
                });

                Object.assign(manajemenTindakanForm, {
                    onSubmit: (data) => addTindakanMutation.mutate(data),
                });
            }
        }
        return{
            isLoading
        };
    };

    const getTindakanUpdateFormMutation = useMutation(getActionDetail, {
        onMutate: () => {
            setRecoil(isLoadingState, true);
        },
        onSuccess: (response) => {
            const formData = JSON.parse(JSON.stringify(manajemenTindakanForm));
            Object.assign(formData, {
                defaultValues: {
                    action_number: response.data.action_number,
                    action_name: response.data.action_name,
                },
                onSubmit: (data) => updateTindakanMutation.mutate({ id: response.data.id, data }),
            });
            setRecoil(showFormModalState, true);
            setRecoil(formDataState, formData);
        },
        onError: (error) => {
            handleToast(error.response.data.message, "error");
        },
        onSettled: () => {
            setRecoil(isLoadingState, false);
        },
    });

    const addTindakanMutation = useMutation(addAction, {
        onMutate: () => {
            setRecoil(isLoadingState, true);
            setRecoil(validationErrorState, null)
        },
        onSuccess: (response) => {
            handleToast("success", response.message);
            setRecoil(formDataState, null);
            setRecoil(showFormModalState, false);
            queryClient.invalidateQueries(["getActions"]);
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
        }
    });

    const updateTindakanMutation = useMutation(updateAction, {
        onMutate: () => {
            setRecoil(isLoadingState, true);
            setRecoil(validationErrorState, null);
        },
        onSuccess: (response) => {
            handleToast("success", response.message);
            setRecoil(formDataState, null);
            setRecoil(showFormModalState, false);
            queryClient.invalidateQueries("getActions");
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

    const deleteTindakanMutation = useMutation(deleteAction, {
        onMutate: () => {
            setRecoil(isLoadingState, true);
        },
        onSuccess: (response) => {
            handleToast("success", response.message);
            queryClient.invalidateQueries(["getActions"]);
        },
        onError: (error) => {
          handleToast("failed", error.error.message);
        },
        onSettled: () => {
            setRecoil(showValidationModalState, false);
            setRecoil(rowIdState, null);
            setRecoil(isLoadingState, false);
        },
    });
   
    return {
        useGetTindakanQuery,
    };
};

export default useTindakanController;