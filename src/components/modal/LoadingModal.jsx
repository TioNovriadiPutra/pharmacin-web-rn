import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "@store/atom/pageState";
import { colors } from "@themes/colors";

const LoadingModal = () => {
  const isLoading = useRecoilValue(isLoadingState);

  return (
    <Modal visible={isLoading} transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.Primary} />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.White,
    padding: 20,
    borderRadius: 20,
  },
});
