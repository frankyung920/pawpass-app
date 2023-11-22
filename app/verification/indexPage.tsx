import PageLayout from "@/components/verification/PageLayout";
import { routerPush } from "@/router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { verifyDogStyles } from "./styles";

const IndexPage = () => {
  const nextPage = () => {
    routerPush("/verification/microChip");
  };
  return (
    <PageLayout
      title={"Verify Dog & Owner"}
      content={
        "This ensures authenticity, prevents fraud and complies with regulatory requirements."
      }
      next={nextPage}
    >
      <View style={verifyDogStyles.banner}>
        <Image
          style={{ width: "100%", resizeMode: "stretch" }}
          source={require("@/assets/images/verification/banner.png")}
        ></Image>
      </View>
      <Text style={verifyDogStyles.content}>
        You’ll be asked to place the identity document (microchip and owner’s
        identity card) on the phone.{"\n"}
      </Text>
      <Text style={verifyDogStyles.content}>
        This will check the electronic information stored in it, so we know it’s
        genuine.
      </Text>
    </PageLayout>
  );
};

export default IndexPage;

const styles = StyleSheet.create({});
