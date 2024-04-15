import { StyleSheet, View } from "react-native";
import React from "react";
import { any } from "prop-types";
import { colors } from "@themes/colors";
import Form from "@components/fragment/Form";
import { addPurchaseTransactionForm } from "@utils/constant/form";
import ShoppingCart from "@components/fragment/ShoppingCart";
import SubmitButton from "@components/element/SubmitButton";
import useCashier from "@hooks/useCashier";
import CashierFirstRowSkeleton from "@components/skeleton/CashierFirstRowSkeleton";

const Cashier = ({ control }) => {
  const { shoppingCartInputs, append, watchFactory, isLoading } = useCashier(addPurchaseTransactionForm.carts.name, control);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <CashierFirstRowSkeleton />
      ) : (
        <View style={styles.firstRow}>
          <View style={[styles.box, styles.boxNormal, styles.firstBox]}>
            <Form control={control} inputListData={addPurchaseTransactionForm.inputs1} />
          </View>

          <View style={[styles.box, styles.boxNormal, styles.secondBox]}>
            <Form control={control} inputListData={addPurchaseTransactionForm.inputs2} />
          </View>
        </View>
      )}

      <View style={[styles.box, styles.boxCart]}>
        <ShoppingCart control={control} cartInputData={shoppingCartInputs} cartHeaderData={addPurchaseTransactionForm.carts.headers} cartActionData={addPurchaseTransactionForm.carts.actions} />

        {watchFactory && (
          <SubmitButton
            label="Tambah Obat"
            color={colors.Secondary}
            buttonStyle={styles.button}
            onPress={() =>
              addPurchaseTransactionForm.carts.onAdd(append, addPurchaseTransactionForm.carts.name, addPurchaseTransactionForm.carts.defaultValues, addPurchaseTransactionForm.carts.template)
            }
          />
        )}
      </View>
    </View>
  );
};

export default Cashier;

Cashier.propTypes = {
  control: any.isRequired,
};

const styles = StyleSheet.create({
  container: {
    gap: 14,
    flex: 1,
  },
  firstRow: {
    gap: 14,
    flexDirection: "row",
  },
  box: {
    backgroundColor: colors.White,
    borderRadius: 10,
  },
  boxNormal: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  boxCart: {
    flex: 1,
    padding: 10,
  },
  firstBox: {
    flex: 1,
  },
  secondBox: {
    flex: 2,
  },
  button: {
    paddingHorizontal: 45,
  },
});
