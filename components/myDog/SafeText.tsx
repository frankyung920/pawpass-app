import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SafeText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="Safety" size={24} color={Colors.brand.secondary} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Distributed network architecture safeguards user data on the
          blockchain.
        </Text>
      </View>
    </View>
  );
};

export default SafeText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background[5],
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    borderRadius: 12,
  },
  iconContainer: { paddingRight: 12 },
  textContainer: {
    flex: 1,
  },
  text: {
    color: Colors.brand.secondary,
    flexShrink: 1,
    fontFamily: "inter-sb",
  },
});
