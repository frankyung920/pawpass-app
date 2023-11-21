import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { type IImagePicker } from "@/interfaces/IImagePicker";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modal } from "./Modal";

interface Props {
  isModalVisible: boolean;
  onPressClose: any;
  title?: string;
  text?: string;
  onImageSelected: any;
  turnOnCamera: any;
}

const PhotoModal = ({
  isModalVisible,
  onPressClose,
  onImageSelected,
  turnOnCamera,
}: Props) => {
  const pickImage = async () => {
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.75,
      base64: true,
    })) as IImagePicker;

    if (!result.canceled) {
      const { base64 } = result.assets[0];
      const uri = `data:image/png;base64,${base64}`;
      onImageSelected({ uri });
      onPressClose();
    }
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={defaultStyles.modalContainer}>
        <TouchableOpacity style={styles.drag}></TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 18,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={onPressClose}
          >
            <View style={{ flex: 1, flexDirection: "row" }}></View>
            <AntDesign
              style={styles.closeButton}
              name="close"
              size={16}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[defaultStyles.secondaryButton]}
            onPress={turnOnCamera}
          >
            <Text style={defaultStyles.secondaryButtonText}>Take a photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[defaultStyles.secondaryButton]}
            onPress={() => pickImage()}
          >
            <Text style={defaultStyles.secondaryButtonText}>
              Add a photo from a Gallery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PhotoModal;

const styles = StyleSheet.create({
  drag: {
    borderRadius: 5,
    width: "25%", // Width of the handle
    height: 5, // Height of the handle
    backgroundColor: Colors.outline.primary,
  },
  closeContainer: {
    flex: 1,
    flexDirection: "row",
  },
  closeButton: {
    alignItems: "flex-end",
  },
});
