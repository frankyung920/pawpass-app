import Appointments from "@/components/home/Appointments";
import Blogs from "@/components/home/Blogs";
import Documents from "@/components/home/Documents";
import DogProfiles from "@/components/home/DogProfiles";
import Trips from "@/components/home/Trips";
import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <DogProfiles></DogProfiles>
      <Trips></Trips>
      <Appointments></Appointments>
      <Documents></Documents>
      <Blogs></Blogs>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    backgroundColor: Colors.background[2],
  },
});
