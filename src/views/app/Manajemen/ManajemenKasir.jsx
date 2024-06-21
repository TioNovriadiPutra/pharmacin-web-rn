import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenKasirHeader } from "@utils/constant/pageHeader";
import {manajemenKasirData} from "@utils/constant/pageTable";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";

const ManajemenKasir = () => {
  return (
    <MainContainer>
      <PageHeader headerData={manajemenKasirHeader} />
      <PageTable pageData={manajemenKasirData} />
    </MainContainer>
  );
};

export default ManajemenKasir;

const styles = StyleSheet.create({});
