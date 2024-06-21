import useLaboratModel from "@models/laboratModel";
import {
  getLaborat,
  getLaboratDetail,
  addLaborat,
  updateLaborat,
  deleteLaborat,
} from "@services/laborat";
import { formDataState, validationErrorState } from "@store/atom/formState";
import {
  isLoadingState,
  rowIdState,
  showFormModalState,
  showValidationModalState,
} from "@store/atom/pageState";
import { queryClient } from "@utils/config/client";
import { addLaboratForm } from "@utils/constant/form";
import { manajemenLaboratData } from "@utils/constant/pageTable";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { queryClient } from "@utils/config/client";

const useLaboratController = () => {
    const { useGetLaborat } = useLaboratModel();

    const useGetLaboratQuery = () => {
        const { data, isLoading, isError } = useGetLaborat();

        if (!isLoading) {
            if (!isError) {
                Object.assign(manajemenLaboratData, {
                    tableData: data.data.map((item) => {
                        const arr = [
                            { type: "text", value: item.laboratory_number },
                            { type: "text", value: item.laboratory_name },
                        ];

                        return {
                            tables: arr,
                            actions: [
                                {
                                    type: "edit",
                                    onPress: () =>
                                        getLaboratUpdateFormMutation.mutate(item.id),
                                },
                                {
                                    type: "delete",
                                    onPress: () => {
                                        setRecoil(rowIdState, {
                                            type: "delete",
                                            onDelete: () =>
                                                deleteLaboratMutation.mutate(item.id),
                                        });
                                        setRecoil(showValidationModalState, true);
                                    },
                                },
                            ],
                        };
                    }),
                });

                Object.assign(addLaboratForm, {
                    onSubmit: (data) => addLaboratMutation.mutate(data),
                });
            }
        }
        return {
            isLoading,
        };
    };

    const getLaboratUpdateFormMutation = useMutation(getLaboratDetail, {
        onMutate: () => {
            setRecoil(isLoadingState, true);
        },
        onSuccess : (data) => {
            setRecoil(formDataState, data);
            setRecoil(showFormModalState, true);
            setRecoil(isLoadingState, false);
        }

    });


    const addLaboratMutation = useMutation(addLaborat, {
        onSuccess: () => {
            queryClient.invalidateQueries("getLaborat");
            setRecoil(showFormModalState, false);
            handleToast("success", "Laborat berhasil ditambahkan");
        },
        onError: (error) => {
            setRecoil(validationErrorState, error);
        },
    });

    const updateLaboratMutation = useMutation(updateLaborat, {
        onSuccess: () => {
            queryClient.invalidateQueries("getLaborat");
            setRecoil(showFormModalState, false);
            handleToast("success", "Laborat berhasil diubah");
        },
        onError: (error) => {
            setRecoil(validationErrorState, error);
        },
    });

    const deleteLaboratMutation = useMutation(deleteLaborat, {
        onSuccess: () => {
            queryClient.invalidateQueries("getLaborat");
            setRecoil(showValidationModalState, false);
            handleToast("success", "Laborat berhasil dihapus");
        },
    });

    return {
        useGetLaboratQuery,
    };
};

export default useLaboratController;