import React, { useState } from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Get Cash" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Enter your password!</Text>

      <View style={{ flexDirection: "row" }}>
        <View>
          <TextInput
            style={styles.passwordContainer}
            onChangeText={text => onChangeText(text)}
          />
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  passwordContainer: {
    height: 40,
    width: 200,
    borderColor: "black",
    borderWidth: 2
  }
});
