import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import DetailHeader from "@components/layout/DetailHeader";
import { pembelianDetail } from "@utils/constant/pageDetail";
import DataBlock from "@components/layout/DataBlock";
import usePembelianController from "src/controllers/pembelianController";
import { unhashId } from "@utils/helper/hash";
import InvoiceSkeleton from "@components/skeleton/InvoiceSkeleton";
import CartTable from "@components/layout/CartTable";

const PembelianInvoice = ({ route }) => {
  const { id } = route.params;

  const { useGetPurchaseTransactionDetailQuery } = usePembelianController();

  const { isLoading } = useGetPurchaseTransactionDetailQuery(unhashId(id));

  return (
    <MainContainer>
      <DetailHeader headerTitle={pembelianDetail.title} />

      {isLoading ? (
        <InvoiceSkeleton />
      ) : (
        <>
          <DataBlock blockData={pembelianDetail.detailBlock} />

          <CartTable cartData={pembelianDetail.detailData} type="single" />
        </>
      )}
    </MainContainer>
  );
};

export default PembelianInvoice;

const styles = StyleSheet.create({});
