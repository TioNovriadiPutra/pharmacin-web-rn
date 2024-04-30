import { StyleSheet } from "react-native";
import React from "react";
import DetailHeader from "@components/layout/DetailHeader";
import { dokterPerawatanDetail } from "@utils/constant/pageDetail";
import useAntrianController from "src/controllers/antrianController";
import { unhashId } from "@utils/helper/hash";
import InvoiceSkeleton from "@components/skeleton/InvoiceSkeleton";
import DataBlock from "@components/layout/DataBlock";
import PageHeaderFunction from "@components/fragment/PageHeaderFunction";
import ScrollContainer from "@containers/ScrollContainer";
import { colors } from "@themes/colors";
import { useForm } from "react-hook-form";
import { perawatanForm } from "@utils/constant/form";
import AssessmentFormSwitch from "@components/layout/AssessmentFormSwitch";
import useDokterController from "@controllers/dokterController";
import { useSetRecoilState } from "recoil";
import { rowIdState, showValidationModalState } from "@store/atom/pageState";

const DokterPerawatan = ({ route }) => {
  const { id } = route.params;

  const setShowModal = useSetRecoilState(showValidationModalState);
  const setRowId = useSetRecoilState(rowIdState);

  const { useGetDoctorConsultingQueueDetailQuery } = useAntrianController();
  const { addAssessment } = useDokterController();

  const { isLoading } = useGetDoctorConsultingQueueDetailQuery(unhashId(id));

  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: perawatanForm.defaultValues,
  });

  return (
    <ScrollContainer
      containerStyle={styles.container}
      scrollContainerStyle={styles.scrollContainer}
    >
      <DetailHeader
        headerTitle={dokterPerawatanDetail.title}
        submitData={() => {
          setShowModal(true);
          setRowId({
            type: "confirm",
            title: "Simpan Form",
            description: `Simpan form perawatan ${dokterPerawatanDetail.detailBlock[0][0].value} dan proses administrasi dengan nama ${dokterPerawatanDetail.detailBlock[0][2].value}`,
            onSubmit: handleSubmit((data) =>
              addAssessment({
                data,
                id: unhashId(id),
                reset: () => reset(perawatanForm.defaultValues),
              })
            ),
          });
        }}
      />

      {isLoading ? (
        <InvoiceSkeleton />
      ) : (
        <DataBlock blockData={dokterPerawatanDetail.detailBlock} />
      )}

      <PageHeaderFunction
        headerFunctionData={dokterPerawatanDetail.headerFunction}
        secondary
      />

      <AssessmentFormSwitch control={control} setValue={setValue} />
    </ScrollContainer>
  );
};

export default DokterPerawatan;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Default,
    paddingLeft: 14,
    paddingRight: 4,
    paddingVertical: 14,
    flex: 1,
  },
  scrollContainer: {
    marginRight: 6,
    gap: 14,
  },
});
