import useAntrianModel from "@models/antrianModel";
import { useNavigation } from "@react-navigation/native";
import { cancelQueue } from "@services/antrian";
import {
  isLoadingState,
  rowIdState,
  showValidationModalState,
} from "@store/atom/pageState";
import { colors } from "@themes/colors";
import { queryClient } from "@utils/config/client";
import { perawatanForm } from "@utils/constant/form";
import { dokterPerawatanDetail } from "@utils/constant/pageDetail";
import { dokterPasienData } from "@utils/constant/pageTable";
import { hashId } from "@utils/helper/hash";
import { handleToast } from "@utils/helper/toast";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";

const useAntrianController = () => {
  const { useGetDoctorConsultingQueues, useGetDoctorConsultingQueueDetail } =
    useAntrianModel();

  const nav = useNavigation();

  const useGetDoctorConsultingQueuesQuery = () => {
    const { data, isLoading, isError, error } = useGetDoctorConsultingQueues();

    if (!isLoading) {
      if (!isError) {
        Object.assign(dokterPasienData, {
          tableData: data.data.map((item) => {
            const arr = [
              {
                type: "text",
                value: item.full_name,
              },
              {
                type: "text",
                value: item.registration_number,
              },
              {
                type: "text",
                value: item.record_number,
              },
              {
                type: "text",
                value: item.queue_date,
              },
            ];

            return {
              tables: arr,
              actions: [
                {
                  type: "button",
                  label: "Periksa",
                  active: true,
                  color: colors.Primary,
                  onPress: () => {
                    nav.navigate("DokterStack", {
                      screen: "DokterPerawatan",
                      params: {
                        id: hashId(item.id),
                      },
                    });
                  },
                },
              ],
            };
          }),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const useGetDoctorConsultingQueueDetailQuery = (id) => {
    const results = useGetDoctorConsultingQueueDetail(id);

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const error = results.some((result) => result.error);

    if (!isLoading) {
      if (!isError) {
        Object.assign(dokterPerawatanDetail, {
          detailBlock: [
            [
              {
                ...dokterPerawatanDetail.detailBlock[0][0],
                value: results[0].data.data.registration_number,
              },
              {
                ...dokterPerawatanDetail.detailBlock[0][1],
                value: results[0].data.data.record_number,
              },
              {
                ...dokterPerawatanDetail.detailBlock[0][2],
                value: results[0].data.data.full_name,
              },
              {
                ...dokterPerawatanDetail.detailBlock[0][3],
                value: results[0].data.data.ttl,
              },
              {
                ...dokterPerawatanDetail.detailBlock[0][4],
                value: results[0].data.data.address,
              },
            ],
            [
              {
                ...dokterPerawatanDetail.detailBlock[1][0],
                value: results[0].data.data.queue_date,
              },
              {
                ...dokterPerawatanDetail.detailBlock[1][1],
                value: results[0].data.data.doctor,
              },
              {
                ...dokterPerawatanDetail.detailBlock[1][2],
                value: results[0].data.data.allergy || "-",
              },
            ],
          ],
        });

        Object.assign(perawatanForm.inputs[1].pengajuanObatSection[0], {
          template:
            perawatanForm.inputs[1].pengajuanObatSection[0].template.map(
              (tmp) => {
                if (tmp.name === "drugId") {
                  Object.assign(tmp, {
                    items: results[1].data.data.map((tmp2) => {
                      return {
                        label: tmp2.drug,
                        value: tmp2.id,
                        sellingPrice: tmp2.selling_price,
                        unit: tmp2.unit_name,
                      };
                    }),
                  });
                }

                return tmp;
              }
            ),
        });
      } else {
        handleToast("failed", error.error.message);
      }
    }

    return {
      isLoading,
    };
  };

  const cancelQueueMutation = useMutation(cancelQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      handleToast("success", response.message);
      queryClient.invalidateQueries(["getPatients"]);
    },
    onError: (error) => {
      handleToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(showValidationModalState, false);
      setRecoil(rowIdState, null);
    },
  });

  return {
    useGetDoctorConsultingQueuesQuery,
    useGetDoctorConsultingQueueDetailQuery,
    cancelQueue: (id) => cancelQueueMutation.mutate(id),
  };
};

export default useAntrianController;
