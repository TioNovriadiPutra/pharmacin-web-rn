import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { array, node, object, oneOfType } from "prop-types";

const ScrollContainer = ({
  children,
  containerStyle,
  scrollContainerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        contentContainerStyle={scrollContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default ScrollContainer;

ScrollContainer.propTypes = {
  children: node,
  containerStyle: oneOfType([object, array]),
  scrollContainerStyle: oneOfType([object, array]),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
