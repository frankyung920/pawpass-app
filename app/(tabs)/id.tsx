import PetInformation from "@/components/id/PetInformation";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";

interface Response {
  name: string;
  qrCode: string;
  profilePic: string;
  results: any[];
}

const Id = () => {
  const [names, setNames] = useState(["Dog's Name", "Dog's Name 2"]);
  const [qrCodes, setQrCodes] = useState([
    "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    "https://images.dog.ceo/breeds/lhasa/n02098413_17759.jpg",
  ]);
  const [profilePics, setProfilePics] = useState([
    "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    "https://images.dog.ceo/breeds/lhasa/n02098413_17759.jpg",
  ]);
  const [microchips, setMicrochips] = useState([
    "123-456-123-456-789",
    "123-456-123-456-789",
  ]);

  const [results, setResults] = useState([
    [
      {
        success: false,
        text: "Rabies Vaccination: need booster",
      },
      {
        success: true,
        text: "Tapeworm treatment: done",
      },
      {
        success: true,
        text: "Microchip: verified",
      },
    ],
    [
      {
        success: false,
        text: "Rabies Vaccination: need booster",
      },
      {
        success: true,
        text: "Tapeworm treatment: done",
      },
      {
        success: true,
        text: "Microchip: verified",
      },
    ],
  ]);
  return (
    <LinearGradient
      colors={["#289490", "#3D4C70"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <PagerView style={styles.viewPager} initialPage={0}>
        {names.map((name, index) => {
          return (
            <PetInformation
              key={index}
              index={index}
              name={name}
              qrCode={qrCodes[index]}
              profilePic={profilePics[index]}
              microchip={microchips[index]}
              results={results[index]}
              total={qrCodes.length}
            ></PetInformation>
          );
        })}
      </PagerView>
    </LinearGradient>
  );
};

export default Id;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
