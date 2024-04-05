import { StyleSheet, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import PageTableHeader from "@components/fragment/PageTableHeader";
import PageTableBody from "@components/fragment/PageTableBody";

const PageTable = ({ pageData }) => {
  return (
    <View style={styles.container}>
      <PageTableHeader tableHeaderData={pageData.headerData} />

      <PageTableBody tableBodyData={pageData.tableData} />
    </View>
  );
};

export default PageTable;

PageTable.propTypes = {
  pageData: object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
  },
});
