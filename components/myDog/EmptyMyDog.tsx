import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EmptyMyDog = () => {
  return (
    <View style={styles.empty}>
      <Image
        source={require("@/assets/images/bg-empty.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
      ></Image>
      <Text style={styles.emptyText}>Integrate doggo for adventure</Text>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => routerPush("/verification")}
      >
        <Image source={require("@/assets/images/add-new-profile.png")} />
        <Text style={styles.name}>Add new pet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyMyDog;

const styles = StyleSheet.create({
  empty: {
    backgroundColor: Colors.background[2],
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  backgroundImage: {
    backgroundColor: Colors.background[2],
    justifyContent: "center", // This will ensure the image is centered in the view
    alignSelf: "center",
    width: "50%",
    height: "30%",
  },
  emptyText: {
    fontFamily: "pop-reg",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.text.secondary,
    alignSelf: "center",
  },
  fab: {
    paddingTop: 20,
    alignSelf: "center",
  },
  name: {
    fontSize: 12,
    fontFamily: "inter-sb",
    lineHeight: 16,
    color: Colors.brand.primary,
  },
});
