import PageLayout from "@/components/verification/PageLayout";
import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { verifyDogStyles } from "./styles";

const instructions = [
  "Place the user's ID within the frame on the screen.",
  "Make sure the entire ID is visible and well-lit.",
  "Check the image for clear and focused details.",
  "If satisfied, move on. If not, take another picture.",
];

const MicroChip = () => {
  const nextPage = () => {
    routerPush("/verification/scanOwnerId");
  };
  return (
    <PageLayout
      title={"Scan Owner’s ID"}
      content={
        "This ensures authenticity, prevents fraud and complies with regulatory requirements."
      }
      next={nextPage}
      customStyle={{}}
    >
      <View style={[verifyDogStyles.banner, { flexDirection: "column" }]}>
        <Image
          style={{ width: "100%", resizeMode: "stretch" }}
          source={require("@/assets/images/verification/owner-id.png")}
        ></Image>
      </View>
      <Text style={styles.instruction}>Short instruction: </Text>
      {instructions.map((text, index) => {
        return (
          <View key={index} style={styles.bulletPointContainer}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>{text}</Text>
          </View>
        );
      })}
    </PageLayout>
  );
};

export default MicroChip;

const styles = StyleSheet.create({
  instruction: {
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 20,
    color: Colors.text.primary,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  bulletPointContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bulletPoint: {
    marginRight: 10,
    color: Colors.text.secondary,
    fontSize: 14,
    fontFamily: "pop-reg",
  },
  bulletText: {
    flex: 1,
    color: Colors.text.secondary,
    fontSize: 14,
    fontFamily: "pop-reg",
  },
});
