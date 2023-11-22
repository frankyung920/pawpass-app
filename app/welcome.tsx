import WelcomeBottomSheet from "@/components/WelcomeBottomSheet";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/landing_bg.png")}
        style={styles.bg}
      ></ImageBackground>
      <WelcomeBottomSheet></WelcomeBottomSheet>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
