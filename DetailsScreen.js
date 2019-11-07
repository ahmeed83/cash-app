import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

function Separator() {
  return <View style={styles2.separator} />;
}

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          label="Password"
          secureTextEntry
          leftIcon={<Icon name="user" size={20} color="orange" />}
          containerStyle={{ borderColor: "orange", borderWidth: 0.5 }}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <Separator />
      <Button
        style={styles.buttonContainer}
        title="enter"
        color="orange"
        // onPress={() => Alert.alert("9-4-5-3-2-1-6-7-8-4")}
        onPress={() => navigation.navigate("Confirmation")}
      />
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
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    width: 300,
    color: "orange"
  },
  buttonContainer: {
    flexDirection: "row",
    color: "orange"
  }
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default DetailsScreen;
