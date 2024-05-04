import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenDokterHeader } from "@utils/constant/pageHeader";
import useUserController from "@controllers/userController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { manajemenDokterData } from "@utils/constant/pageTable";

const ManajemenDokter = () => {
  const { useGetDoctorsQuery } = useUserController();

  const { isLoading } = useGetDoctorsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenDokterHeader} />

      {isLoading ? (
        <PageTableSkeleton />
      ) : (
        <PageTable pageData={manajemenDokterData} />
      )}
    </MainContainer>
  );
};

export default ManajemenDokter;

const styles = StyleSheet.create({});
