import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modal } from "./Modal";

interface Props {
  isModalVisible: boolean;
  onPressClose: any;
  title: string;
  text: string;
}

const MessageModal = ({ isModalVisible, onPressClose, title, text }: Props) => {
  return (
    <Modal isVisible={isModalVisible}>
      <View style={defaultStyles.modalContainer}>
        <TouchableOpacity style={styles.drag}></TouchableOpacity>
        <TouchableOpacity style={styles.closeContainer} onPress={onPressClose}>
          <View style={{ flex: 1, flexDirection: "row" }}></View>
          <AntDesign
            style={styles.closeButton}
            name="close"
            size={16}
            color="black"
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require("@/assets/images/check.png")}
        ></Image>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Modal>
  );
};

export default MessageModal;

const styles = StyleSheet.create({
  drag: {
    borderRadius: 5,
    width: "25%", // Width of the handle
    height: 5, // Height of the handle
    backgroundColor: Colors.text.secondary,
  },
  closeContainer: {
    flex: 1,
    flexDirection: "row",
  },
  closeButton: {
    alignItems: "flex-end",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    resizeMode: "stretch",
    height: 64,
  },
  title: {
    fontSize: 16,
    fontFamily: "pop-b",
    lineHeight: 24,
    color: Colors.text.primary,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 20,
    color: Colors.text.secondary,
    textAlign: "center",
  },
});
