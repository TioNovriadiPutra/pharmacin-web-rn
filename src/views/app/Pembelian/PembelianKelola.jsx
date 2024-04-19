import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { pembelianKelolaHeader } from "@utils/constant/pageHeader";
import usePembelianController from "src/controllers/pembelianController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTable from "@components/layout/PageTable";
import { pembelianData } from "@utils/constant/pageTable";

const PembelianKelola = () => {
  const { useGetPurchaseTransactionsQuery } = usePembelianController();

  const { isLoading } = useGetPurchaseTransactionsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={pembelianKelolaHeader} />

      {isLoading ? (
        <PageTableSkeleton />
      ) : (
        <PageTable pageData={pembelianData} />
      )}
    </MainContainer>
  );
};

export default PembelianKelola;

const styles = StyleSheet.create({});
