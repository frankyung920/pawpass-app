import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const NotificationButton = () => {
  const toNotifications = () => {
    routerPush("/notifications");
  };
  return (
    <TouchableOpacity
      style={styles.notificationButton}
      onPress={toNotifications}
    >
      <Ionicons name="notifications-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  notificationButton: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "space-between",
    alignItems: "center",
    color: Colors.brand.tertiary,
  },
});
