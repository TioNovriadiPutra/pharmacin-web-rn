import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenDiagnosisHeader } from "@utils/constant/pageHeader";
import {manajemenDiagnosisData} from "@utils/constant/pageTable";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";

const ManajemenDiagnosis = () => {
  return (
    <MainContainer>
      <PageHeader headerData={manajemenDiagnosisHeader} />
      <PageTable pageData={manajemenDiagnosisData} />

    </MainContainer>
  );
};

export default ManajemenDiagnosis;

const styles = StyleSheet.create({});
