import Colors from "@/constants/Colors";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PETS = [
  {
    name: "Daltonic",
    uri: "https://avatars.githubusercontent.com/u/29388627?v=4",
  },
  {
    name: "Bobby",
    uri: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Success",
    uri: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Matt",
    uri: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Lukas",
    uri: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Sabrinah",
    uri: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Sabrinah",
    uri: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Sabrinah",
    uri: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Daltonic",
    uri: "https://avatars.githubusercontent.com/u/29388627?v=4",
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
        <TouchableOpacity style={styles.addNewPetContainer}>
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
