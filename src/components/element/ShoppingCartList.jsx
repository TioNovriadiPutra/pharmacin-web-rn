import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { any, array, string } from "prop-types";
import PharmacinDropdown from "./PharmacinDropdown";
import PharmacinCurrencyInput from "./PharmacinCurrencyInput";
import PharmacinTextInput from "./PharmacinTextInput";
import { colors } from "@themes/colors";
import PharmacinDatePicker from "./PharmacinDatePicker";

const ShoppingCartList = ({
  listData,
  control,
  actions,
  template,
  listName,
}) => {
  return (
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={({ _, index }) => (
        <View style={styles.container}>
          {template.map((tmp, indexTmp) => (
            <View key={indexTmp.toString()} style={styles.input}>
              {tmp.type === "dropdown" ? (
                <PharmacinDropdown
                  control={control}
                  inputData={{
                    ...tmp,
                    name: `${listName}.${index}.${tmp.name}`,
                  }}
                />
              ) : tmp.type === "currency" ? (
                <PharmacinCurrencyInput
                  control={control}
                  inputData={{
                    ...tmp,
                    name: `${listName}.${index}.${tmp.name}`,
                  }}
                />
              ) : tmp.type === "date" ? (
                <PharmacinDatePicker
                  control={control}
                  inputData={{
                    ...tmp,
                    name: `${listName}.${index}.${tmp.name}`,
                  }}
                />
              ) : (
                <PharmacinTextInput
                  control={control}
                  inputData={{
                    ...tmp,
                    name: `${listName}.${index}.${tmp.name}`,
                  }}
                />
              )}
            </View>
          ))}

          {actions && (
            <View style={styles.actionContainer}>
              {actions.map((action, indexAction) => (
                <Pressable
                  key={indexAction.toString()}
                  onPress={() => action.onPress(index)}
                >
                  <Image
                    source={
                      action.type === "delete"
                        ? require("@assets/images/delete.png")
                        : action.type === "edit"
                        ? require("@assets/images/edit.png")
                        : require("@assets/images/info.png")
                    }
                  />
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
  template: array.isRequired,
  name: string,
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
