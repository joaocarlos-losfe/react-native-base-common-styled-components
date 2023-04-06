import { Text, TextInput } from "react-native";
import React from "react";
import MainScreenContainer from "../components/MainScreenContainer";
import { styles } from "./styles";
import CenterHorizontally from "../components/CenterHorizontally";
import VerticalStack from "../components/VerticalStack";
import HorizontalStack from "../components/HorizontalStack";

export default function HomeScreen() {
  return (
    <MainScreenContainer
      statusBarItemsStyle="light"
      backgroundColor="#3920ff"
      statusBarBackgroundColor="#2716b2"
      headerColor="#1b0f7e"
      headerChildren={
        <HorizontalStack gap={10} justifyContent="space-evenly">
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>B</Text>
          <Text style={styles.text}>C</Text>
        </HorizontalStack>
      }
      withNavigationBar={true}
    >
      <VerticalStack gap={32}>
        <CenterHorizontally>
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>B</Text>
          <Text style={styles.text}>C</Text>
        </CenterHorizontally>

        <HorizontalStack justifyContent="space-between">
          <Text style={styles.text}>D</Text>
          <Text style={styles.text}>D</Text>
          <Text style={styles.text}>E</Text>
        </HorizontalStack>

        <VerticalStack>
          <Text style={styles.text}>F</Text>
          <Text style={styles.text}>G</Text>
          <Text style={styles.text}>H</Text>
          <Text style={styles.text}>I</Text>
        </VerticalStack>
      </VerticalStack>

      <CenterHorizontally>
        <Text style={styles.text}>joao</Text>
        <Text style={styles.text}>carlos</Text>

        <VerticalStack gap={16}>
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
            placeholder="second input"
            placeholderTextColor={"white"}
            style={{
              paddingHorizontal: 12,
              width: "100%",
              height: 48,
              backgroundColor: "#535353",
              borderRadius: 8,
            }}
          />

          <VerticalStack gap={32}>
            <CenterHorizontally>
              <Text style={{ fontSize: 16, color: "white" }}>
                Leite de capivaris, leite de mula manquis sem cabeça.In
                elementis mé pra quem é amistosis quis leo.Cevadis im ampola pa
                arma uma pindureta.Atirei o pau no gatis, per gatis num morreus.
              </Text>
            </CenterHorizontally>

            <Text style={styles.text}>
              Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso
              pudia ce receita de bolis, mais bolis eu num gostis.Admodum
              accumsan disputationi eu sit. Vide electram sadipscing et per.Copo
              furadis é disculpa de bebadis, arcu quam euismod magna.Tá
              deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
            </Text>

            <TextInput
              placeholder="last input"
              placeholderTextColor={"white"}
              style={{
                paddingHorizontal: 12,
                width: "100%",
                height: 48,
                backgroundColor: "#535353",
                borderRadius: 8,
                marginBottom: 8,
              }}
            />
          </VerticalStack>
        </VerticalStack>
      </CenterHorizontally>
    </MainScreenContainer>
  );
}
