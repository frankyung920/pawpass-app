import CameraButton from "@/components/CameraButton";
import { Camera, CameraPictureOptions, CameraType } from "expo-camera";
import Constants from "expo-constants";
import * as MediaLibrary from "expo-media-library";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

interface Props {
  onImageSelected: any;
}

const flashOff = Camera.Constants.FlashMode.Off;
const height = Dimensions.get("window").height;

const CustomCamera = ({ onImageSelected }: Props) => {
  const router = useRouter();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [base64, setBase64] = useState("");

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          quality: 0,
          base64: true,
        } as CameraPictureOptions);
        const { base64, uri } = data;
        setImage(uri);
        setBase64(base64);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    console.log("savePicture");
    if (image && base64) {
      try {
        console.log("save");
        const uri = `data:image/png;base64,${base64}`;
        onImageSelected({ uri });
        goBack();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const goBack = () => {
    router.push("/addAPhoto");
  };

  if (hasCameraPermission === false) {
    goBack();
  }

  return (
    <View style={styles.container}>
      {!image && (
        <View style={styles.topOptions}>
          <CameraButton
            icon={"camera-reverse"}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          />
          <CameraButton icon={"exit-outline"} onPress={() => goBack()} />
        </View>
      )}
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flashOff}
          ratio={"1:1"}
        ></Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <CameraButton
              text={"Re-take"}
              icon={"arrow-redo"}
              onPress={() => setImage(null)}
            />

            <CameraButton
              text={"Ok!"}
              icon={"md-checkmark-circle-outline"}
              onPress={savePicture}
            />
          </View>
        ) : (
          <CameraButton
            text={"Take a picture"}
            icon={"camera"}
            onPress={takePicture}
          />
        )}
      </View>
    </View>
  );
};

export default CustomCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 16,
  },
  controls: {
    justifyContent: "center",
    paddingVertical: 60,
  },
  topOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  camera: {
    maxHeight: height / 2,
    flex: 1,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});
