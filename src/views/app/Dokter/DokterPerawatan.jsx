import { StyleSheet, Text } from "react-native";
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

const DokterPerawatan = ({ route }) => {
  const { id } = route.params;

  const { useGetDoctorConsultingQueueDetailQuery } = useAntrianController();

  const { isLoading } = useGetDoctorConsultingQueueDetailQuery(unhashId(id));

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: perawatanForm.defaultValues,
  });

  return (
    <ScrollContainer
      containerStyle={styles.container}
      scrollContainerStyle={styles.scrollContainer}
    >
      <DetailHeader headerTitle={dokterPerawatanDetail.title} />

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
