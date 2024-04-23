import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalContainer from "@containers/ModalContainer";
import usePendaftaranModal from "@hooks/usePendaftaranModal";
import { colors } from "@themes/colors";
import { systemFonts } from "@themes/fonts";
import Form from "@components/fragment/Form";
import { addPatientQueueForm } from "@utils/constant/form";
import Bar from "@components/element/Bar";
import SubmitButton from "@components/element/SubmitButton";

const PendaftaranConfirmationModal = () => {
  const { showModal, modalData, control, onClose, onSubmit } =
    usePendaftaranModal();

  return (
    <ModalContainer visible={showModal} modalStyle={styles.modal}>
      <View style={styles.container}>
        <Image
          source={require("@assets/images/confirmation.png")}
          style={styles.vector}
        />

        <Text style={[systemFonts.H1, styles.text, styles.title]}>
          Konfirmasi Perawatan
        </Text>

        <Text style={[systemFonts.P, styles.text, styles.subTitle]}>
          Lanjutkan proses perawatan dengan nama{" "}
          <Text style={systemFonts.H2}>{modalData.fullName}</Text> menuju
          doktor:
        </Text>

        <View style={styles.form}>
          <Form control={control} inputListData={addPatientQueueForm.inputs} />
        </View>

        <Bar containerStyle={styles.bar} />

        <View style={styles.footer}>
          <SubmitButton
            label="Batalkan"
            color={colors.Placeholder}
            buttonStyle={styles.button}
            onPress={onClose}
          />

          <SubmitButton
            label="Lanjutkan"
            color={colors.Primary}
            buttonStyle={styles.button}
            onPress={onSubmit}
          />
        </View>
      </View>
    </ModalContainer>
  );
};

export default PendaftaranConfirmationModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.White,
    paddingHorizontal: 14,
    paddingVertical: 24,
    borderRadius: 10,
    width: 542,
    height: 470,
  },
  vector: {
    alignSelf: "center",
    marginBottom: 24,
  },
  text: {
    textAlign: "center",
    color: colors.Black,
  },
  title: {
    marginBottom: 40,
  },
  subTitle: {
    marginHorizontal: 32,
    marginBottom: 36,
  },
  bar: {
    marginBottom: 24,
  },
  form: {
    flex: 1,
    marginHorizontal: 32,
  },
  footer: {
    flexDirection: "row",
    gap: 24,
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});
