import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  text?: string;
}

const Separator = ({ text }: Props) => {
  return (
    <View style={[styles.separatorView]}>
      <View
        style={{
          flex: 1,
          borderBottomColor: "#000",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      ></View>
      <Text style={styles.separator}>{text}</Text>
      <View
        style={{
          flex: 1,
          width: "50%",
          borderBottomColor: "#000",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      ></View>
    </View>
  );
};

export default Separator;

const styles = StyleSheet.create({
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  separator: {
    fontFamily: "inter-reg",
    color: "#000",
  },
});
