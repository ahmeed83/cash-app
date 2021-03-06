import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import ConfirmationScreen from "./ConfirmationScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ING",
            headerStyle: {
              backgroundColor: "#rgb(238, 107, 45)",
              height: 115
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#rgb(238, 107, 45)",
              height: 115
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#rgb(238, 107, 45)",
              height: 115
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
