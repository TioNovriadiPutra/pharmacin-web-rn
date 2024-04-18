import { StyleSheet } from "react-native";
import React from "react";
import PageHeader from "@components/layout/PageHeader";
import MainContainer from "@containers/MainContainer";
import Cashier from "@components/layout/Cashier";
import { useRecoilValue } from "recoil";
import { pembelianHeaderSelector } from "@store/selector/headerSelector";

const PembelianTambah = () => {
  const pembelianHeader = useRecoilValue(pembelianHeaderSelector);

  return (
    <MainContainer>
      <PageHeader headerData={pembelianHeader} />

      <Cashier />
    </MainContainer>
  );
};

export default PembelianTambah;

const styles = StyleSheet.create({});
