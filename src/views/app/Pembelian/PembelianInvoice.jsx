import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import DetailHeader from "@components/layout/DetailHeader";
import { pembelianDetail } from "@utils/constant/pageDetail";
import DataBlock from "@components/layout/DataBlock";

const PembelianInvoice = ({ route }) => {
  const { id } = route.params;

  return (
    <MainContainer>
      <DetailHeader headerTitle={pembelianDetail.title} />

      <DataBlock />
    </MainContainer>
  );
};

export default PembelianInvoice;

const styles = StyleSheet.create({});
