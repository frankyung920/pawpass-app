import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: any;
  icon: string;
  text?: string;
}

const CameraButton = ({ onPress, icon, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons style={styles.icon} name={icon || "disc-outline"} size={28} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CameraButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "pop-b",
    fontSize: 16,
    color: Colors.contrast.primary,
    marginLeft: 10,
  },
  icon: {
    color: Colors.contrast.primary,
  },
});
