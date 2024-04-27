import { Animated, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { array, bool, node, object, oneOfType } from "prop-types";
import useScroll from "@hooks/useScroll";
import { colors } from "@themes/colors";

const ScrollContainer = ({
  children,
  containerStyle,
  scrollContainerStyle,
  showIndicator = true,
}) => {
  const {
    scrollAnim,
    scrollIndicatorPosition,
    scrollIndicatorSize,
    setCompleteScrollBarHeight,
    setVisibleScrollBarHeight,
  } = useScroll();

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <ScrollView
        contentContainerStyle={scrollContainerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={(width, height) => {
          setCompleteScrollBarHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setVisibleScrollBarHeight(height);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollAnim } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {children}
      </ScrollView>

      {showIndicator && (
        <View style={[styles.scrollContainer, styles.scroll]}>
          <Animated.View
            style={[
              styles.scrollContainer,
              styles.scrollIndicator,
              {
                height: scrollIndicatorSize,
                transform: [{ translateY: scrollIndicatorPosition }],
              },
            ]}
          />
        </View>
      )}
    </View>
  );
};

export default ScrollContainer;

ScrollContainer.propTypes = {
  children: node,
  containerStyle: oneOfType([object, array]),
  scrollContainerStyle: oneOfType([object, array]),
  showIndicator: bool,
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  scrollContainer: {
    width: 4,
    borderRadius: 100,
  },
  scroll: {
    height: "100%",
  },
  scrollIndicator: {
    backgroundColor: colors.Scroll,
  },
});
