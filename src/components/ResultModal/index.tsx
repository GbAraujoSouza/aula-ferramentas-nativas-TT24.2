import React from "react";
import { Button, Modal, Pressable, Text } from "react-native";
import { ModalContent, ResultContainer, Title, TitleContainer } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

type ResultModalProp = {
  data: string;
  isVisible: boolean;
  onClose: () => void;
};

export default function ResultModal({
  isVisible,
  onClose,
  data,
}: ResultModalProp) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <ModalContent>
        <TitleContainer>
          <Title>Result</Title>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </TitleContainer>
        <ResultContainer>
          <Button title={data} onPress={() => Linking.openURL(data)}>
            <Text style={{ color: "#fff" }}>{data}</Text>
          </Button>
        </ResultContainer>
      </ModalContent>
    </Modal>
  );
}
