import Colors from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import QRCodeStyled from "react-native-qrcode-styled";
import Result from "./Result";

interface Props {
  name: string;
  qrCode: string;
  profilePic: string;
  microchip: string;
  results: any[];
}

const PetInformation = ({
  name,
  qrCode,
  profilePic,
  results,
  microchip,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image
          source={{
            uri: profilePic,
          }}
          style={styles.profilePic}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.qrcode}>
            <QRCodeStyled
              data={qrCode}
              style={{}}
              color={Colors.background[1]}
            />
          </View>
          <Text style={styles.nameText}>{name}</Text>
          <View style={{ paddingBottom: 20 }}>
            <Text style={styles.idTitle}>Microchip number:</Text>
            <Text style={styles.idText}>{microchip}</Text>
          </View>
        </View>
      </View>
      {results.map((r, index) => {
        return <Result key={index} success={r.success} text={r.text}></Result>;
      })}
    </View>
  );
};

export default PetInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicContainer: {
    borderWidth: 5,
    borderColor: Colors.background[1],
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
    width: "76%",
    backgroundColor: "rgba(255, 255, 255, 0.25)", // Semi-transparent background
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.background[4], // Solid border color
    marginTop: -60,
    zIndex: 0,
  },
  contentContainer: {
    paddingTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  qrcode: {
    padding: 16,
  },
  nameText: {
    textAlign: "center",
    fontSize: 32,
    fontFamily: "pop-reg",
    lineHeight: 44,
    color: Colors.contrast.primary,
  },
  idTitle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 20,
    color: Colors.contrast.primary,
  },
  idText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 20,
    color: Colors.contrast.primary,
  },
});
