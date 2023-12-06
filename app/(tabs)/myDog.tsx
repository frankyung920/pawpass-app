import DogProfiles from "@/components/myDog/DogProfiles";
import EmptyMyDog from "@/components/myDog/EmptyMyDog";
import Passport from "@/components/myDog/Passport";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const MyDog = () => {
  const [items, setItems] = useState<IPetProfile[]>([
    {
      name: "Happy",
      uri: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    },
    {
      name: "Bobby",
      uri: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_2226.jpg",
    },
    {
      name: "Dodo",
      uri: "https://images.dog.ceo/breeds/poodle-toy/n02113624_2905.jpg",
    },
    {
      name: "Matt",
      uri: "https://images.dog.ceo/breeds/shiba/shiba-18.jpg",
    },
  ]);

  return (
    <View style={styles.container}>
      {items.length !== 0 ? (
        <View style={styles.scrollView}>
          <DogProfiles pets={items} />
          <View style={styles.content}>
            <Passport
              image={"https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg"}
            ></Passport>
          </View>
        </View>
      ) : (
        <EmptyMyDog />
      )}
    </View>
  );
};

export default MyDog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background[2],
    flex: 1,
    paddingVertical: 12,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background[2],
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
