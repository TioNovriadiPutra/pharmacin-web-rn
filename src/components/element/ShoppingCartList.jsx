import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { any, array } from "prop-types";
import PharmacinDropdown from "./PharmacinDropdown";
import PharmacinCurrencyInput from "./PharmacinCurrencyInput";
import PharmacinTextInput from "./PharmacinTextInput";
import { colors } from "@themes/colors";

const ShoppingCartList = ({ listData, control, actions }) => {
  return (
    <FlatList
      data={listData}
      keyExtractor={(_, index) => index.toString()}
      extraData={listData}
      renderItem={({ item }) => (
        <View style={styles.container}>
          {item.map((tmp, index) => (
            <View key={index.toString()} style={styles.input}>
              {tmp.type === "dropdown" ? (
                <PharmacinDropdown control={control} inputData={tmp} />
              ) : tmp.type === "currency" ? (
                <PharmacinCurrencyInput control={control} inputData={tmp} />
              ) : (
                <PharmacinTextInput control={control} inputData={tmp} />
              )}
            </View>
          ))}

          {actions && (
            <View style={styles.actionContainer}>
              {actions.map((action, index) => (
                <Pressable key={index.toString()} onPress={action.onPress}>
                  <Image source={action.type === "delete" ? require("@assets/images/delete.png") : action.type === "edit" ? require("@assets/images/edit.png") : require("@assets/images/info.png")} />
                </Pressable>
              ))}
            </View>
          )}
        </View>
      )}
    />
  );
};

export default ShoppingCartList;

ShoppingCartList.propTypes = {
  listData: array.isRequired,
  control: any.isRequired,
  actions: array,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 24,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.TableBorder,
  },
  input: {
    flex: 1,
  },
  list: {
    gap: 24,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 10,
  },
});
