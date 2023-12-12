import Passport from "@/components/myDog/Passport";
import PassportDetails from "@/components/myDog/PassportDetails";
import SafeText from "@/components/myDog/SafeText";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const DogPassport = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.passportContainer}>
        <Passport
          image={"https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg"}
        ></Passport>
      </View>
      <View style={styles.passportDetailContainer}>
        <PassportDetails />
      </View>
      <View style={styles.safeTextContainer}>
        <SafeText />
      </View>
    </View>
  );
};

export default DogPassport;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flex: 1,
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 24,
  },
  passportContainer: {
    minHeight: 128,
  },
  passportDetailContainer: {
    paddingBottom: 32,
  },
  safeTextContainer: {
    height: 50,
    marginBottom: 32,
  },
});
