import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const list1 = [
    {
      title: "Messages",
      icon: "markunread"
    },
    {
      title: "Address Book",
      icon: "book"
    },
    {
      title: "Service",
      icon: "airplay"
    }
  ];
  const list2 = [
    {
      title: "App settings",
      icon: "archive"
    },
    {
      title: "Apple Pay",
      icon: "wifi"
    },
    {
      title: "Cash",
      icon: "home"
    },
    {
      title: "Debit card use abroad",
      icon: "sms"
    },
    {
      title: "Connections",
      icon: "camera"
    },
    {
      title: "Payconiq",
      icon: "polymer"
    }
  ];

  return (
    <View>
      <ListItem
        title="Personal Details"
        leftIcon={{ name: "home", color: "#rgb(238, 107, 45)" }}
        bottomDivider
        chevron
      />
      <View style={styles.contentContainer}>
        {list1.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: "#rgb(238, 107, 45)" }}
            bottomDivider
            chevron
          />
        ))}
      </View>
      <View style={styles.contentContainer}>
        {list2.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon, color: "#rgb(238, 107, 45)" }}
            bottomDivider
            chevron
            onPress={() => navigation.navigate("Details")}
          />
        ))}
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
    width: 40,
    borderColor: "black",
    borderWidth: 2
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 20
  }
});

export default HomeScreen;
