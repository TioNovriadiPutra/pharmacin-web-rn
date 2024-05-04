import useTindakanModel from "@models/tindakanModel";
import { addAction, deleteAction, getActionDetail, updateAction } from "@services/tindakan";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { isLoadingState, rowIdState, showFormModalState, showValidationModalState } from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { manajemenTindakanForm } from "@utils/constant/form";
import { manajemenTindakanData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useTindakanController = () => {
  const { useGetActions } = useTindakanModel();

  const useGetActionsQuery = () => {
    const { data, isLoading, isError, error } = useGetActions();

    if (!isLoading) {
      if (!isError) {
        Object.assign(manajemenTindakanData, {
          tableData: data.data.map((item) => {
            const arr = [
              {
                type: "text",
                value: item.action_name,
              },
              {
                type: "currency",
                value: item.action_price,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "edit",
                  onPress: () => getActionUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      type: "delete",
                      onDelete: () => deleteActionMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(manajemenTindakanForm, {
          onSubmit: (data) => addActionMutation.mutate(data),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const getActionUpdateFormMutation = useMutation(getActionDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(manajemenTindakanForm));

      Object.assign(formData, {
        title: "Edit Tindakan",
        defaultValues: {
          actionName: response.data.action_name,
          actionPrice: response.data.action_price,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Tindakan",
        },
        onSubmit: (data) => updateActionMutation.mutate({ data, id: response.data.id }),
      });

      setRecoil(showFormModalState, true);
      setRecoil(formDataState, formData);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const addActionMutation = useMutation(addAction, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
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
    },
  });

  const updateActionMutation = useMutation(updateAction, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(showFormModalState, false);
      setRecoil(formDataState, null);
      queryClient.invalidateQueries(["getActions"]);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        handleToast("failed", error.error.message);
        setRecoil(showFormModalState, false);
        setRecoil(validationErrorState, null);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const deleteActionMutation = useMutation(deleteAction, {
    onMutate: () => {
      setRecoil(showValidationModalState, false);
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
      setRecoil(rowIdState, null);
      setRecoil(isLoadingState, false);
    },
  });

  return {
    useGetActionsQuery,
  };
};

export default useTindakanController;
