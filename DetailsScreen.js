import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

const DetailsScreen = () => {
  // const myIcon = <Icon name="idcard" size={30} color="#900" />;
  const [text, setText] = useState();
  const onChangeText = () => {
    
  }


  return (
    <View style={styles.container}>
      <Text>Enter your password!</Text>

      <View style={{ flexDirection: "row" }}>
        <View>
          <TextInput
            style={styles.passwordContainer}
            onChangeText={text => onChangeText(text)}
          />
          {/* <Input
            placeholder="INPUT WITH ICON"
            leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          />
          {myIcon} */}
        </View>
      </View>
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
  }
});

export default DetailsScreen;
