import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import DetailFooter from "./DetailFooter";
import DetailList from "./DetailList";

const PageDetail = ({ detailData }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[systemFonts.H1, styles.title]}>
        {detailData.title}
      </Text>

      <DetailList listData={detailData.list} />

      <DetailFooter footerData={detailData.footer} />
    </View>
  );
};

export default PageDetail;

PageDetail.propTypes = {
  detailData: object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.Title,
    textAlign: "center",
    marginBottom: 32,
    overflow: "visible",
  },
});
