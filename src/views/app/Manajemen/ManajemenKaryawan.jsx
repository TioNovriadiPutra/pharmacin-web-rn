import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { manajemenKaryawanHeader } from "@utils/constant/pageHeader";
import useUserController from "@controllers/userController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { manajemenKaryawanData } from "@utils/constant/pageTable";

const ManajemenKaryawan = () => {
  const { useGetEmployeesQuery } = useUserController();

  const { isLoading } = useGetEmployeesQuery();

  return (
    <MainContainer>
      <PageHeader headerData={manajemenKaryawanHeader} />

      {isLoading ? (
        <PageTableSkeleton />
      ) : (
        <PageTable pageData={manajemenKaryawanData} />
      )}
    </MainContainer>
  );
};

export default ManajemenKaryawan;

const styles = StyleSheet.create({});
