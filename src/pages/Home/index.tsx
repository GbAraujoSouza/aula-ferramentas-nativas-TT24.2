import React from "react";
import { Container, NavButton, NavButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <NavButton bgColor="#ca9ee6" onPress={() => navigation.navigate("Camera")}>
        <NavButtonText>Camera</NavButtonText>
      </NavButton>
      <NavButton bgColor="#8caaee" onPress={() => navigation.navigate("Location")}>
        <NavButtonText>Location</NavButtonText>
      </NavButton>
    </Container>
  );
}
