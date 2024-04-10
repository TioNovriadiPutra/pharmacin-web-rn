import useObatKategoriModel from "@models/obatKategoriModel";
import { addDrugCategory, deleteDrugCategory, getDrugCategoryDetail, updateDrugCategory } from "@services/obatKategori";
import { formDataState, validationErrorState } from "@store/atom/formState";
import { isLoadingState, rowIdState, showFormModalState, showValidationModalState } from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { addDrugCategoryForm } from "@utils/constant/form";
import { obatKategoriData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useObatKategoriController = () => {
  const { useGetDrugCategories } = useObatKategoriModel();

  const useGetDrugCategoriesQuery = () => {
    const { data, isLoading, isError } = useGetDrugCategories();

    if (!isLoading) {
      if (!isError) {
        Object.assign(obatKategoriData, {
          tableData: data.data.map((item) => {
            const arr = [item.category_number, item.category_name];

            return {
              tables: arr,
              actions: [
                {
                  type: "edit",
                  onPress: () => getDrugCategoryUpdateFormMutation.mutate(item.id),
                },
                {
                  type: "delete",
                  onPress: () => {
                    setRecoil(rowIdState, {
                      onDelete: () => deleteDrugCategoryMutation.mutate(item.id),
                    });
                    setRecoil(showValidationModalState, true);
                  },
                },
              ],
            };
          }),
        });

        Object.assign(addDrugCategoryForm, {
          onSubmit: (data) => addDrugCategoryMutation.mutate(data),
        });
      }
    }

    return {
      isLoading,
    };
  };

  const getDrugCategoryUpdateFormMutation = useMutation(getDrugCategoryDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      const formData = JSON.parse(JSON.stringify(addDrugCategoryForm));

      Object.assign(formData, {
        title: "Edit Kategori",
        defaultValues: {
          categoryName: response.data.category_name,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Kategori",
        },
        onSubmit: (data) => updateDrugCategoryMutation.mutate({ data, id: response.data.id }),
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

  const addDrugCategoryMutation = useMutation(addDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries(["getDrugCategories"]);
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

  const updateDrugCategoryMutation = useMutation(updateDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      setRecoil(formDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries(["getDrugCategories"]);
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

  const deleteDrugCategoryMutation = useMutation(deleteDrugCategory, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getDrugCategories"]);
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
    useGetDrugCategoriesQuery,
  };
};

export default useObatKategoriController;
