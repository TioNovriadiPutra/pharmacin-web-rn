import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { manajemenLaboratHeader } from "@utils/constant/pageHeader";
import PageHeader from "@components/layout/PageHeader";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import useObatKategoriController from "src/controllers/obatKategoriController";
import { obatKategoriData } from "@utils/constant/pageTable";

const ManajemenLaborat = () => {
  const { useGetDrugCategoriesQuery } = useObatKategoriController();

  const { isLoading } = useGetDrugCategoriesQuery();
  return (
    <MainContainer>
      <PageHeader headerData={manajemenLaboratHeader} />
    </MainContainer>
  );
};

export default ManajemenLaborat;

const styles = StyleSheet.create({});
