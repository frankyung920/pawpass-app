import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
const id = () => {
  return (
    <LinearGradient
      colors={["#289490", "#3D4C70"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.profilePicContainer}>
        <Image
          source={{
            uri: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
          }} // Replace with your dog image URL
          style={styles.profilePic}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.contentContainer}>
          <QRCode
            value="https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg" // Replace with your desired value
            logoBackgroundColor="transparent"
            backgroundColor="transparent"
            color="white"
            logoMargin={5}
            logo={require("@/assets/images/qr-logo.png")}
          />
          <Text style={styles.nameText}>Dog's Name</Text>
          <Text style={styles.idText}>ID: 12345</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default id;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    zIndex: 1,
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent background
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E9EAEB", // Solid border color
    marginTop: -60,
    zIndex: 0,
  },
  contentContainer: {
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 18,
    marginTop: 10,
  },
  idText: {
    fontSize: 16,
    color: "grey",
    marginTop: 5,
  },
});
