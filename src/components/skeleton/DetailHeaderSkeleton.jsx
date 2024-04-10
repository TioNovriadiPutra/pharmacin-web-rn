import { Skeleton } from "@rneui/themed";
import { StyleSheet } from "react-native";

const DetailHeaderSkeleton = () => {
  return <Skeleton height={44} style={styles.container} />;
};

export default DetailHeaderSkeleton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});
