import NotificationItem from "@/components/notifications/NotificationItem";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const NotificationIndex = () => {
  const [items, setItems] = useState([
    {
      image: require("@/assets/images/id.png"),
      message:
        "1 Your vet appointment with Bell Brown & Bentley Veterinary Surgeons has been confirmed",
    },
    {
      image: require("@/assets/images/id.png"),
      message:
        "2 Your vet appointment with Bell Brown & Bentley Veterinary Surgeons has been confirmed",
    },
    {
      image: require("@/assets/images/id.png"),
      message:
        "3 Your vet appointment with Bell Brown & Bentley Veterinary Surgeons has been confirmed",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {items.map((item, i) => {
        return (
          <NotificationItem key={i} image={item.image} message={item.message} />
        );
      })}
    </ScrollView>
  );
};

export default NotificationIndex;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: "column",
  },
});
