import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  children?: JSX.Element;
  headerColor?: string;
};

export default function Header({ children, headerColor }: Props) {
  return (
    <View
      style={[styles.container, { backgroundColor: headerColor || "#1b0f7e" }]}
    >
      {children}
    </View>
  );
}
