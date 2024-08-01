import styled from "styled-components/native";
import { CameraView } from "expo-camera";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  justifyContent: center;
`
export const StyledCameraView = styled(CameraView)`
  flex: 1;
`
export const Message = styled.Text`
  textAlign: center;
  paddingBottom: 10px;
`
  
