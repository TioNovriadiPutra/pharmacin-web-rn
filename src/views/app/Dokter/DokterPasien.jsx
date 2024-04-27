import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { dokterPasienHeader } from "@utils/constant/pageHeader";
import useAntrianController from "src/controllers/antrianController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { dokterPasienData } from "@utils/constant/pageTable";

const DokterPasien = () => {
  const { useGetDoctorConsultingQueuesQuery } = useAntrianController();

  const { isLoading } = useGetDoctorConsultingQueuesQuery();

  return (
    <MainContainer>
      <PageHeader headerData={dokterPasienHeader} />

      {isLoading ? (
        <PageTableSkeleton />
      ) : (
        <PageTable pageData={dokterPasienData} />
      )}
    </MainContainer>
  );
};

export default DokterPasien;

const styles = StyleSheet.create({});
