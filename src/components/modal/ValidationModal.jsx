import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import useValidationModal from "@hooks/useValidationModal";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";
import Bar from "@components/element/Bar";
import SubmitButton from "@components/element/SubmitButton";

const ValidationModal = () => {
  const { showModal, closeModal, agree, rowId } = useValidationModal();

  return (
    <ModalContainer visible={showModal} modalStyle={styles.modal}>
      {rowId && (
        <View style={[styles.box, { height: rowId === "delete" ? 336 : 422 }]}>
          {rowId.type === "confirm" && (
            <Image
              source={require("@assets/images/confirmation.png")}
              style={styles.vector}
            />
          )}

          <Text style={[systemFonts.H1, styles.title]}>
            {rowId.type === "delete" ? "Hapus Data?" : rowId.title}
          </Text>

          <View style={styles.descContainer}>
            <Text
              style={[
                systemFonts.H3,
                styles.desc,
                {
                  color:
                    rowId.type === "delete" ? colors.SubTitle : colors.Black,
                },
              ]}
            >
              {rowId.type === "delete"
                ? "Tindakan ini tidak dapat dibatalkan. Apakah Anda yakin ingin menghapus data pada aplikasi?"
                : rowId.description}
            </Text>
          </View>

          <Bar containerStyle={styles.bar} />

          <View style={styles.buttonContainer}>
            <SubmitButton
              label="Batalkan"
              color={colors.Placeholder}
              buttonStyle={styles.button}
              onPress={closeModal}
            />

            <SubmitButton
              label={rowId.type === "delete" ? "Hapus" : "Lanjutkan"}
              color={rowId.type === "delete" ? colors.Danger : colors.Primary}
              buttonStyle={styles.button}
              onPress={agree}
            />
          </View>
        </View>
      )}
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
  vector: {
    alignSelf: "center",
    marginBottom: 24,
  },
});
