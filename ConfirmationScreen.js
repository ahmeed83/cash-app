import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { pic } from "./assets/image/geldmaat.png";

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>9-4-5-3-2-1-6-7-8-4</Text>
      {/* <Image source={pic} /> */}
      <Image style={{ width: 300, height: 350 }} source={require('./assets/image/map.png')} />
      {/* <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: { pic }
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  passwordContainer: {
    height: 40,
    width: 180,
    borderColor: "black",
    borderWidth: 2
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 40
  },
  inputContainer: {
    flexDirection: "row",
    width: 300,
    color: "orange"
  },
  baseText: {
    fontFamily: "Cochin",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 20
  }
});

export default ConfirmationScreen;
