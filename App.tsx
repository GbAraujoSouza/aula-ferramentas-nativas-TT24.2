import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Camera from "./src/pages/Camera";
import LocationPage from "./src/pages/Location";

const Stack = createNativeStackNavigator();

const navHeaderOption = {
  headerStyle: {
    backgroundColor: "#232634",
  },
  headerTintColor: "#c6d0f5",
  headerTitleStyle: {
    color: "#c6d0f5",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={navHeaderOption} />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={navHeaderOption}
        />
        <Stack.Screen
          name="Location"
          component={LocationPage}
          options={navHeaderOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
