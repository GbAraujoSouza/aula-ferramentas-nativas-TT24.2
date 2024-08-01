import { useRef, useState } from "react";
import { View, Button } from "react-native";

import { useCameraPermissions } from "expo-camera";
import { Container, StyledCameraView, Message } from "./styles";
import { BarCodeScanningResult } from "expo-camera/build/legacy/Camera.types";
import ResultModal from "../../components/ResultModal";

export default function CameraComponent() {
  const camRef = useRef(null);

  const [permission, requestPermission] = useCameraPermissions();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [scannedLink, setScannedLink] = useState("");

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const handleCodeScanned = (result: BarCodeScanningResult) => {
    setIsModalVisible(true);
    setScannedLink(result.data);
    // console.log(result.data) 
  }

  if (!permission) {
    console.log("could not get permission")
    return <View />;
  }

  if (!permission.granted) {
    return (
      <Container>
        <Message>We need your permission to show the camera</Message>
        <Button onPress={requestPermission} title="grant permission" />
      </Container>
    );
  }

  return (
    <Container>
      <StyledCameraView
        ref={camRef}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={handleCodeScanned}
      />
      <ResultModal isVisible={isModalVisible} onClose={onModalClose} data={scannedLink}/>
    </Container>

  );
}
