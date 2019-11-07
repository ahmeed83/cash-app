import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [text, setText] = useState("Hello AHmed");
  render(
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Press me" onPress={() => Alert.alert("Hello CASH!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
