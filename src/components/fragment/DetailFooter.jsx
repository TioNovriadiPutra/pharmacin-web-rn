import { StyleSheet, View } from "react-native";
import React from "react";
import { array } from "prop-types";
import DetailFooterItem from "@components/element/DetailFooterItem";

const DetailFooter = ({ footerData }) => {
  return (
    <View style={styles.container}>
      {footerData.map((footer, index) => (
        <DetailFooterItem key={index.toString()} itemData={footer} index={index} />
      ))}
    </View>
  );
};

export default DetailFooter;

DetailFooter.propTypes = {
  footerData: array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 21,
  },
});
