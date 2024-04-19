import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";

const PageTableBodyRow = ({ bodyData }) => {
  const nav = useNavigation();

  return (
    <Pressable
      style={[
        styles.container,
        { paddingVertical: bodyData.actions ? 11 : 18 },
      ]}
      onPress={() => {
        if (bodyData.rowPress) {
          bodyData.rowPress(nav);
        }
      }}
    >
      {bodyData.tables.map((table, index) => (
        <Text key={index.toString()} style={[systemFonts.P, styles.label]}>
          {table}
        </Text>
      ))}

      {bodyData.actions && (
        <View style={styles.actionContainer}>
          {bodyData.actions.map((action, index) => (
            <Pressable key={index.toString()} onPress={action.onPress}>
              <Image
                source={
                  action.type === "delete"
                    ? require("@assets/images/delete.png")
                    : action.type === "edit"
                    ? require("@assets/images/edit.png")
                    : action.type === "invoice"
                    ? require("@assets/images/invoice.png")
                    : require("@assets/images/info.png")
                }
              />
            </Pressable>
          ))}
        </View>
      )}
    </Pressable>
  );
};

export default PageTableBodyRow;

PageTableBodyRow.propTypes = {
  bodyData: object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.TableBorder,
  },
  label: {
    color: colors.Black,
    flex: 1,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 10,
  },
});
