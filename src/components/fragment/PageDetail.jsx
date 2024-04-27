import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { array, bool, object, oneOfType } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import DetailFooter from "./DetailFooter";
import DetailList from "./DetailList";

const PageDetail = ({ detailData, containerStyles, showIndicator = true }) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {detailData.title && (
        <Text numberOfLines={1} style={[systemFonts.H1, styles.title]}>
          {detailData.title}
        </Text>
      )}

      <DetailList listData={detailData.list} showIndicator={showIndicator} />

      {detailData.footer && <DetailFooter footerData={detailData.footer} />}
    </View>
  );
};

export default PageDetail;

PageDetail.propTypes = {
  detailData: object,
  containerStyles: oneOfType([object, array]),
  showIndicator: bool,
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
