import { StyleSheet } from "react-native";
import React from "react";
import { array } from "prop-types";
import ScrollContainer from "@containers/ScrollContainer";
import { colors } from "@themes/colors";
import PageTableBodyRow from "@components/element/PageTableBodyRow";

const PageTableBody = ({ tableBodyData }) => {
  return (
    <ScrollContainer
      containerStyle={styles.container}
      scrollContainerStyle={styles.scrollContainer}
    >
      {tableBodyData.map((body, index) => (
        <PageTableBodyRow key={index.toString()} bodyData={body} />
      ))}
    </ScrollContainer>
  );
};

export default PageTableBody;

PageTableBody.propTypes = {
  tableBodyData: array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
});
