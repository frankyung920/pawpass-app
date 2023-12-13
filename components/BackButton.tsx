import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
      <Ionicons
        name="chevron-back"
        style={{ padding: 10 }}
        size={20}
        color={Colors.primary}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
