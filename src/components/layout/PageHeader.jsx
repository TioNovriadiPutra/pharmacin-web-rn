import { StyleSheet, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import PageHeaderTitle from "@components/fragment/PageHeaderTitle";
import PageHeaderFunction from "@components/fragment/PageHeaderFunction";

const PageHeader = ({ headerData }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <PageHeaderTitle headerTitleData={headerData.headerTitle} />

        {headerData.headerFunction && <PageHeaderFunction headerFunctionData={headerData.headerFunction} />}
      </View>

      {headerData.headerFunction2 && <PageHeaderFunction headerFunctionData={headerData.headerFunction2} secondary />}
    </View>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  headerData: object.isRequired,
};

const styles = StyleSheet.create({
  mainContainer: {
    gap: 14,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
