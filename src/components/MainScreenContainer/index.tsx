import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import VerticalStack from "../VerticalStack";
import CenterHorizontally from "../CenterHorizontally";
import Toast from "react-native-toast-message";

type Props = {
  children?: JSX.Element | JSX.Element[];
  headerChildren?: JSX.Element | undefined;
  headerColor?: string;
  headerHeight?: string | number;
  statusBarItemsStyle?: "auto" | "dark" | "inverted" | "light";
  statusBarBackgroundColor?: string;
  backgroundColor?: string;
  enableScroll?: boolean;
  withNavigationBar?: boolean;
};

export default function MainScreenContainer({
  children,
  headerChildren,
  headerColor,
  headerHeight,
  statusBarItemsStyle,
  statusBarBackgroundColor,
  backgroundColor,
  enableScroll,
  withNavigationBar,
}: Props) {
  return (
    <View style={[styles.mainContainer]}>
      {headerChildren && (
        <View
          style={[
            styles.header,
            { backgroundColor: headerColor, height: headerHeight },
          ]}
        >
          {headerChildren}
        </View>
      )}
      <ScrollView
        scrollEnabled={enableScroll}
        keyboardDismissMode="interactive"
        style={[
          styles.scrollViewContainer,
          {
            backgroundColor: backgroundColor ? backgroundColor : "#3920ff",
            paddingTop: headerChildren ? 0 : 16,
          },
        ]}
      >
        {!children && (
          <VerticalStack justifyContent="center" height={500}>
            <CenterHorizontally>
              <Text style={{ color: "white", fontSize: 112 }}>
                {"hello wold"}
              </Text>
            </CenterHorizontally>
          </VerticalStack>
        )}
        <View>{children}</View>
      </ScrollView>
      {statusBarItemsStyle && (
        <StatusBar
          style={statusBarItemsStyle}
          translucent
          animated
          backgroundColor={
            statusBarBackgroundColor ? statusBarBackgroundColor : "#2716b2"
          }
        />
      )}
      <Toast />
    </View>
  );
}
