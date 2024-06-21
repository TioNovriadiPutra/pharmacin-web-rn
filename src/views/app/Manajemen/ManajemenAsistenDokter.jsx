import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { ManajemenAsistenDokterHeader } from "@utils/constant/pageHeader";
import {manajemenAsistenDokterData} from "@utils/constant/pageTable";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";

const ManajemenAsistenDokter = () => {
  return (
    <MainContainer>
      <PageHeader headerData={ManajemenAsistenDokterHeader} />
      <PageTable pageData={manajemenAsistenDokterData} />
    </MainContainer>
  );
};

export default ManajemenAsistenDokter;

const styles = StyleSheet.create({});
