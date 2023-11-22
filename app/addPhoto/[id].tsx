import { AddPhotoSectionMessage } from "@/assets/data/message";
import CustomCamera from "@/components/CustomCamera";
import PhotoModal from "@/components/modals/PhotoModal";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { IAddPhotoSectionMessage } from "@/interfaces/message";
import { routerPush } from "@/router";
import { Camera } from "expo-camera";
import { useLocalSearchParams, usePathname } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PhotoSection = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const current = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  const [picUploaded, setPicUploaded] = useState(false);
  const [imageSource, setImageSource] = useState(
    require("@/assets/images/default-photo.png")
  );
  const updateProfilePic = (source: any) => {
    setImageSource(source);
    setPicUploaded(true);
    setCameraOn(false);
  };

  const { title, content, next, maybeLaterTo } = useMemo(
    () =>
      AddPhotoSectionMessage.find(
        (e) => e.id === (id ? id : "success")
      ) as IAddPhotoSectionMessage,
    []
  );

  const openPhotoModal = () => {
    setShowModal(true);
  };

  const confirmPhoto = () => {
    // TODO: Upload photo
    console.log("confirm");
    routerPush(next);
  };

  const maybeLater = () => {
    // TODO: Skip Upload photo
    console.log("maybe later ");
    routerPush(maybeLaterTo);
  };

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setShowModal(false);
      setCameraOn(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  return !cameraOn ? (
    <SafeAreaView style={[defaultStyles.container, styles.container]}>
      <>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{content}</Text>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageSource} />
          </View>
        </View>

        <View style={styles.btnContainer}>
          {!picUploaded ? (
            <>
              <TouchableOpacity
                style={[defaultStyles.primaryBtn]}
                onPress={() => {
                  openPhotoModal();
                }}
              >
                <Text style={defaultStyles.primaryBtnText}>Choose a photo</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={[defaultStyles.primaryBtn]}
                onPress={() => confirmPhoto()}
              >
                <Text style={defaultStyles.primaryBtnText}>Confirm photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[defaultStyles.secondaryButton, { height: 40 }]}
                onPress={() => setShowModal(true)}
              >
                <Text style={defaultStyles.secondaryButtonText}>
                  Choose another photo
                </Text>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity
            style={[defaultStyles.noBorderBtn]}
            onPress={() => {
              maybeLater();
            }}
          >
            <Text style={defaultStyles.noBorderBtnText}>Maybe later</Text>
          </TouchableOpacity>
        </View>
      </>

      <PhotoModal
        isModalVisible={showModal}
        onPressClose={() => setShowModal(false)}
        onImageSelected={(source: any) => updateProfilePic(source)}
        turnOnCamera={() => startCamera()}
      ></PhotoModal>
    </SafeAreaView>
  ) : (
    <CustomCamera
      back={current}
      onImageSelected={(source: any) => updateProfilePic(source)}
    />
  );
};

export default PhotoSection;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 32,
  },
  textContainer: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    gap: 8,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontFamily: "pop-b",
    lineHeight: 28,
    color: "#000",
  },
  text: {
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 28,
    color: Colors.text.secondary,
  },
  imageContainer: {
    padding: 64,
    marginHorizontal: 24,
    marginTop: 24,
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 100,
  },
  btnContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
});
