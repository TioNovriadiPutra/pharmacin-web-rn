import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenTindakanHeader } from "@utils/constant/pageHeader";
import useTindakanController from "src/controllers/tindakanController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { manajemenTindakanData } from "@utils/constant/pageTable";

const ManajemenTindakan = () => {
  const { useGetTindakanQuery } = useTindakanController();
  const { isLoading } = useGetTindakanQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenTindakanHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTable pageData={manajemenTindakanData} />}
    </MainContainer>
  );
};

export default ManajemenTindakan;

const styles = StyleSheet.create({});
