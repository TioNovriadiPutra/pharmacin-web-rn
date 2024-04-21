import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { stokHeader } from "@utils/constant/pageHeader";
import PageTableSwitch from "@components/layout/PageTableSwitch";
import { stokData } from "@utils/constant/pageTable";
import useStokController from "src/controllers/stokController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";

const Stok = () => {
  const { useGetStocksQuery } = useStokController();

  const { isLoading } = useGetStocksQuery();

  return (
    <MainContainer>
      <PageHeader headerData={stokHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTableSwitch tableSwitchData={stokData} />}
    </MainContainer>
  );
};

export default Stok;

const styles = StyleSheet.create({});
