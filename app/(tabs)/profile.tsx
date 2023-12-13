import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AVATAR_SIZE = 100;
const EDIT_BTN_SIZE = 30;

const profile = () => {
  const [image, setImage] = useState(
    "https://i.seadn.io/gae/TrLc8DM_fNZkyGU5XSLZ4rlYauAX7HmxjSXzBsstP17M6hAPZ1OIIwXI02KnPrrDskKqrqqRUY9klB5kcT9ulJIjrrN-_tfBawjbBw?auto=format&dpr=1&w=1000"
  );
  const options = [
    {
      name: "Manage account",
      iconName: "tool",
      to: "/(tabs)",
    },

    {
      name: "Manage preferences",
      iconName: "sliders",
      to: "/(tabs)",
    },

    {
      name: "App support",
      iconName: "help-circle",
      to: "/(tabs)",
    },

    {
      name: "Log out",
      iconName: "log-out",
      to: "/(tabs)",
    },

    {
      name: "Deactivate account",
      iconName: "frown",
      to: "/(tabs)",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: image }} style={styles.avatar} />
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit" size={24} color={Colors.background[1]} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.name}>Julia Kemp</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => {
          const { name, iconName, to } = option;
          return (
            <TouchableOpacity key={index} style={styles.option}>
              <Feather
                style={styles.icon}
                name={iconName}
                size={20}
                color="black"
              />
              <Text style={styles.optionText}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    borderStyle: "dashed",
    borderWidth: 5,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 75,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 64,
  },
  editButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 18,
    padding: 9,
    backgroundColor: Colors.brand.tertiary,
  },
  name: {
    fontFamily: "pop-b",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text.primary,
  },
  optionsContainer: {
    alignSelf: "stretch",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  option: {
    backgroundColor: Colors.background[1],
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 36,
    paddingVertical: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingRight: 24,
  },
  optionText: {
    fontFamily: "pop-b",
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text.primary,
  },
});
