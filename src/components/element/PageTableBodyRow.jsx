import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { object } from "prop-types";
import { systemFonts } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useNavigation } from "@react-navigation/native";
import { currencyFormatter } from "@utils/helper/currency";

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
      {bodyData.tables.map((table, index) => {
        if (table.type === "status") {
          return (
            <View style={styles.statusContainer}>
              <View style={[styles.status, { backgroundColor: table.color }]}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[systemFonts.P, { color: table.textColor }]}
                >
                  {table.value}
                </Text>
              </View>
            </View>
          );
        }

        return (
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            key={index.toString()}
            style={[systemFonts.P, styles.label]}
          >
            {table.type === "currency"
              ? currencyFormatter(table.value)
              : table.value}
          </Text>
        );
      })}

      {bodyData.actions && (
        <View style={styles.actionContainer}>
          {bodyData.actions.map((action, index) => (
            <Pressable
              key={index.toString()}
              onPress={action.onPress}
              style={
                action.type === "button" && [
                  styles.button,
                  {
                    backgroundColor: action.active
                      ? action.color
                      : colors.Placeholder,
                  },
                ]
              }
            >
              {action.type === "button" ? (
                <Text style={[systemFonts.H2, styles.labelButton]}>
                  {action.label}
                </Text>
              ) : (
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
              )}
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
    paddingHorizontal: 10,
  },
  label: {
    color: colors.Black,
    flex: 1,
    overflow: "hidden",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  labelButton: {
    color: colors.White,
  },
  statusContainer: {
    flex: 1,
    alignItems: "center",
  },
  status: {
    paddingVertical: 7,
    paddingHorizontal: 8.5,
    borderRadius: 6,
  },
});
