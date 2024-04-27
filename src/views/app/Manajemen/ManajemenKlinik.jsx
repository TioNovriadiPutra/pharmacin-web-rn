import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenKlinikHeader } from "@utils/constant/pageHeader";
import ManajemenContainer from "@containers/ManajemenContainer";
import useKlinikController from "src/controllers/klinikController";
import TableSkeleton from "@components/skeleton/TableSkeleton";
import PageDetail from "@components/fragment/PageDetail";
import { manajemenKlinikDetail } from "@utils/constant/pageDetail";

const ManajemenKlinik = () => {
  const { useGetClinicDetailQuery } = useKlinikController();

  const { isLoading } = useGetClinicDetailQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenKlinikHeader} />

      {isLoading ? (
        <TableSkeleton />
      ) : (
        <ManajemenContainer>
          <PageDetail
            detailData={manajemenKlinikDetail.detailData}
            containerStyles={styles.detail}
            showIndicator={false}
          />
        </ManajemenContainer>
      )}
    </MainContainer>
  );
};

export default ManajemenKlinik;

const styles = StyleSheet.create({
  detail: {
    width: "50%",
  },
});
