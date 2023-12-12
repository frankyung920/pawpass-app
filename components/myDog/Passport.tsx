import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface Props {
  image: string;
}

const Passport = ({ image }: Props) => {
  return (
    <TouchableOpacity
      style={styles.passportContainer}
      onPress={() => routerPush("/passports/1")}
    >
      <View style={[styles.passport, styles.firstBg]}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/qr-logo.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
          <Text numberOfLines={2} style={styles.passportText}>
            Pet digital Passport
          </Text>
        </View>
      </View>
      <View style={[styles.passport, styles.secBg]} />
      <View style={[styles.passport, styles.dogImg]}>
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={{ flex: 1 }}
        ></ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Passport;

const styles = StyleSheet.create({
  passportContainer: {
    flex: 1,
    maxHeight: 128,
  },
  firstBg: {
    backgroundColor: Colors.brand.secondary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  secBg: {
    backgroundColor: Colors.inverse.background[1],
    width: "50%",
  },
  dogImg: {
    width: 128,
    overflow: "hidden",
  },
  logoContainer: {
    flexDirection: "column",
  },
  passport: {
    position: "absolute",
    flex: 1,
    height: 128,
    borderRadius: 13,
  },
  logo: {
    height: 48,
    width: 48,
    marginTop: 24,
    marginBottom: 12,
    marginHorizontal: 65,
  },
  passportText: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "inter-reg",
    fontSize: 12,
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: Colors.contrast.primary,
    width: "50%",
    marginBottom: 24,
  },
});
