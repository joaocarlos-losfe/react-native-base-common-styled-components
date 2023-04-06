import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export type Props = {
  backgroundColor: string;
  primaryColor: string;
  borderColor: string;
  cardColor: string;
  notificationColor: string;
  textColor: string;
  darkMode: boolean;
  children: JSX.Element | JSX.Element[];
};

export default function MainNavigationContainer({
  children,
  backgroundColor,
  primaryColor,
  borderColor,
  cardColor,
  notificationColor,
  textColor,
  darkMode,
}: Props) {
  return (
    <NavigationContainer
      theme={{
        dark: darkMode,
        colors: {
          background: backgroundColor,
          primary: primaryColor,
          border: borderColor,
          card: cardColor,
          notification: notificationColor,
          text: textColor,
        },
      }}
    >
      {children}
    </NavigationContainer>
  );
}
