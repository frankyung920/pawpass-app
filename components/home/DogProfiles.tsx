import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PETS = [
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
] as IPetProfile[];

const DogProfiles = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        style={styles.profileViewContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {PETS.map((pet, index) => (
          <TouchableOpacity key={index} style={styles.profileContainer}>
            <Image source={{ uri: pet.uri }} style={styles.profilePic} />
            <Text style={styles.name}>
              {pet.name.length > 12
                ? pet.name.slice(0, 11).toLowerCase() + "..."
                : pet.name.slice(0, 11).toLowerCase()}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.addNewPetContainer}
          onPress={() => routerPush("/verification")}
        >
          <Image
            source={require("@/assets/images/add-new-profile.png")}
            style={styles.addNewPet}
          />
          <Text style={styles.name}>Add new pet</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DogProfiles;

const styles = StyleSheet.create({
  profileViewContainer: {
    paddingTop: 20,
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addNewPetContainer: {
    alignItems: "center",
    marginLeft: 3,
    marginRight: 3,
  },
  addNewPet: {
    width: 80,
    height: 64,
    resizeMode: "cover",
    marginLeft: 3,
  },
  profilePic: {
    width: 64,
    height: 64,
    resizeMode: "contain",
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.brand.primary,
  },
  name: {
    fontSize: 12,
    fontFamily: "inter-sb",
    lineHeight: 16,
    color: Colors.brand.primary,
  },
});
