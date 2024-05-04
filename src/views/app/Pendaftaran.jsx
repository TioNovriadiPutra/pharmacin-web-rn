import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import PageHeader from "@components/layout/PageHeader";
import { pendaftaranHeader } from "@utils/constant/pageHeader";
import usePasienController from "src/controllers/pasienController";
import PageTableSkeleton from "@components/skeleton/PageTableSkeleton";
import PageTableSwitch from "@components/layout/PageTableSwitch";
import { pasienData } from "@utils/constant/pageTable";

const Pendaftaran = () => {
  const { useGetPatientsQuery } = usePasienController();

  const { isLoading } = useGetPatientsQuery();

  return (
    <MainContainer>
      <PageHeader headerData={pendaftaranHeader} />

      {isLoading ? <PageTableSkeleton /> : <PageTableSwitch tableSwitchData={pasienData} />}
    </MainContainer>
  );
};

export default Pendaftaran;

const styles = StyleSheet.create({});
