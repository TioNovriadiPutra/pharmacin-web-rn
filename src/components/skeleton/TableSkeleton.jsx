import { Skeleton } from "@rneui/themed";
import { StyleSheet } from "react-native";

const TableSkeleton = () => {
  return <Skeleton animation="pulse" style={styles.box} />;
};

export default TableSkeleton;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    flex: 1,
  },
});
