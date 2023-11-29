import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  message: string;
  image?: any;
}

const NotificationItem = ({ message, image }: Props) => {
  return (
    <TouchableOpacity
      style={[
        defaultStyles.cardContainer,
        { flexDirection: "column", marginBottom: 12 },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Image style={styles.image} source={image} />
        <View
          style={{ gap: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.appointmentClinic}>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  image: {
    marginTop: 4,
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  appointmentClinic: {
    fontFamily: "inter-sb",
    fontSize: 12,
    lineHeight: 16,
    color: Colors.text.primary,
  },
});
