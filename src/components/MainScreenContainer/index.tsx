import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
  headerChildren?: JSX.Element | undefined;
  headerColor?: string;
  statusBarItemsStyle?: "auto" | "dark" | "inverted" | "light";
  statusBarBackgroundColor?: string;
  backgroundColor?: string;
  withNavigationBar?: boolean;
};

export default function MainScreenContainer({
  children,
  headerChildren,
  headerColor,
  statusBarItemsStyle,
  statusBarBackgroundColor,
  backgroundColor,
  withNavigationBar,
}: Props) {
  return (
    <View style={[styles.mainContainer]}>
      {headerChildren && (
        <Header headerColor={headerColor}>{headerChildren}</Header>
      )}
      <ScrollView
        keyboardDismissMode="interactive"
        style={[
          styles.scrollViewContainer,
          {
            backgroundColor: backgroundColor ? backgroundColor : "white",
            paddingTop: headerChildren ? 0 : 16,
          },
        ]}
      >
        <View>{children}</View>
      </ScrollView>
      {statusBarItemsStyle && (
        <StatusBar
          style={statusBarItemsStyle}
          translucent
          animated
          backgroundColor={
            statusBarBackgroundColor ? statusBarBackgroundColor : "gray"
          }
        />
      )}
    </View>
  );
}
