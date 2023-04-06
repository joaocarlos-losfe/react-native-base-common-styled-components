import { View } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[] | undefined;
};

export default function CenterHorizontally({ children }: Props) {
  return <View style={[styles.container]}>{children}</View>;
}
