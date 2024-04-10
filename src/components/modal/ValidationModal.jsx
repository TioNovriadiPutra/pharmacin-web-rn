import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useValidationModal from "@hooks/useValidationModal";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";
import Bar from "@components/element/Bar";
import SubmitButton from "@components/element/SubmitButton";

const ValidationModal = () => {
  const { showModal, closeModal, agree } = useValidationModal();

  return (
    <ModalContainer visible={showModal} modalStyle={styles.modal}>
      <View style={styles.box}>
        <Text style={[systemFonts.H1, styles.title]}>Hapus Data?</Text>

        <View style={styles.descContainer}>
          <Text style={[systemFonts.H3, styles.desc]}>Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin ingin menghapus data pada aplikasi?</Text>
        </View>

        <Bar containerStyle={styles.bar} />

        <View style={styles.buttonContainer}>
          <SubmitButton label="Batalkan" color={colors.Placeholder} buttonStyle={styles.button} onPress={closeModal} />

          <SubmitButton label="Hapus" color={colors.Danger} buttonStyle={styles.button} onPress={agree} />
        </View>
      </View>
    </ModalContainer>
  );
};

export default ValidationModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    paddingHorizontal: 14,
    paddingTop: 36,
    paddingBottom: 24,
    backgroundColor: colors.White,
    borderRadius: 10,
    width: 542,
    height: 336,
  },
  title: {
    color: colors.Black,
    textAlign: "center",
  },
  descContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 42,
  },
  desc: {
    textAlign: "center",
    color: colors.SubTitle,
  },
  bar: {
    marginVertical: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});
