import Colors from "@/constants/Colors";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

interface Props {
  image: string;
}

const Passport = ({ image }: Props) => {
  return (
    <View style={styles.passportContainer}>
      <View
        style={[
          styles.passport,
          {
            backgroundColor: Colors.brand.secondary,
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
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
      <View
        style={[
          styles.passport,
          {
            backgroundColor: Colors.inverse.background[1],
            width: "50%",
          },
        ]}
      />
      <View
        style={[
          styles.passport,
          {
            width: 128,
            overflow: "hidden",
          },
        ]}
      >
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={{ flex: 1 }}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default Passport;

const styles = StyleSheet.create({
  passportContainer: {
    flex: 1,
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
