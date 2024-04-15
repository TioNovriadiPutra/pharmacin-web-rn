import { StyleSheet } from "react-native";
import React from "react";
import PageHeader from "@components/layout/PageHeader";
import { pembelianTambahHeader } from "@utils/constant/pageHeader";
import MainContainer from "@containers/MainContainer";
import Cashier from "@components/layout/Cashier";
import { useForm } from "react-hook-form";
import { addPurchaseTransactionForm } from "@utils/constant/form";

const PembelianTambah = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: addPurchaseTransactionForm.defaultValues,
  });

  return (
    <MainContainer>
      <PageHeader headerData={pembelianTambahHeader} />

      <Cashier control={control} />
    </MainContainer>
  );
};

export default PembelianTambah;

const styles = StyleSheet.create({});
