import { View } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
  justifyContent?: "center" | "space-around" | "space-between" | "space-evenly";
  gap?: number;
  height?: number;
};

export default function HorizontalStack({
  children,
  justifyContent,
  gap,
  height,
}: Props) {
  return (
    <View style={[styles.container, { justifyContent, gap, height }]}>
      {children}
    </View>
  );
}
