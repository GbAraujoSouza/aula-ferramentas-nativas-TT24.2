import { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { Container, StyledMapView } from "./styles";

export default function LocationPage() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão negada");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      Location.reverseGeocodeAsync(location.coords).then((data) => {
        alert(
          `Você está no estado do(a) ${data[0].region} na Cidade do(a) ${data[0].subregion}.${"\n\n"} Este país que é o(a) ${data[0].country}.`,
        );
      });
    }
  }, [location]);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  return (
    <Container>
      <StyledMapView>
        {location && (
          <Marker
            coordinate={{
              latitude: location["coords"]["latitude"],
              longitude: location["coords"]["longitude"],
            }}
            onDragEnd={(data) => {
              setLocation({
                ...location,
                coords: {
                  ...location.coords,
                  latitude: data.nativeEvent.coordinate.latitude,
                  longitude: data.nativeEvent.coordinate.longitude,
                },
              });
            }}
            draggable
          />
        )}
      </StyledMapView>
    </Container>
  );
}

