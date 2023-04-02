import { View, Text, TextInput } from "react-native";
import React from "react";
import MainScreenContainer from "../components/MainScreenContainer";
import { styles } from "./styles";
import CenterHorizontally from "../components/CenterHorizontally";
import VerticalStack from "../components/VerticalStack";

export default function HomeScreen() {
  return (
    <MainScreenContainer
      statusBarItemsStyle="inverted"
      backgroundColor="#3920ff"
      statusBarBackgroundColor="#2716b2"
      headerColor="#1b0f7e"
      headerChildren={<View></View>}
      withNavigationBar={true}
    >
      <CenterHorizontally>
        <Text style={styles.text}>asjdoia jsiod asd</Text>
        <Text style={styles.text}>asjdoia jsiod asd</Text>
      </CenterHorizontally>

      <VerticalStack gap={10} height={500}>
        <TextInput
          placeholder="first input"
          placeholderTextColor={"white"}
          style={{
            paddingHorizontal: 12,
            width: "100%",
            height: 48,
            backgroundColor: "#535353",
            borderRadius: 8,
          }}
        />

        <TextInput
          placeholder="first input"
          placeholderTextColor={"white"}
          style={{
            paddingHorizontal: 12,
            width: "100%",
            height: 48,
            backgroundColor: "#535353",
            borderRadius: 8,
          }}
        />
      </VerticalStack>
    </MainScreenContainer>
  );
}
