import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { routerPush } from "@/router";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Trips = () => {
  // TODO: check have pet or not
  const [hasPet, setHasPet] = useState(true);
  const [hasTrip, setHasTrip] = useState(false);

  const addNewTrip = () => {
    routerPush("/travels/planNewTrip");
  };
  return (
    <View style={defaultStyles.cardContainer}>
      <Text style={defaultStyles.cardTitle}>Trips</Text>
      {!hasTrip ? (
        <TouchableOpacity
          style={[
            hasPet ? defaultStyles.primaryBtn : defaultStyles.greyBtn,
            styles.addNewPetBtn,
          ]}
          onPress={addNewTrip}
        >
          <Text
            style={[
              hasPet ? defaultStyles.primaryBtnText : defaultStyles.greyBtnText,
              styles.addNewPetBtnText,
            ]}
          >
            Add New Trip
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.tripContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.tripIcon}>
              <MaterialCommunityIcons name="airplane-takeoff" size={18} />
            </View>
            <View style={styles.tripTextContent}>
              <Text style={styles.tripTitle}>France Trip</Text>
              <Text style={styles.tripDate}>Departure date: 12 Dec, 2023</Text>
            </View>
          </View>

          <View style={styles.right}>
            <FontAwesome5
              name="chevron-right"
              size={24}
              color={Colors.brand.secondary}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  tripContainer: {
    backgroundColor: Colors.inverse.link.primary,
    marginHorizontal: -24,
    marginBottom: -16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tripIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background[1],
    justifyContent: "center",
    alignItems: "center",
    color: Colors.brand.secondary,
  },
  tripTextContent: {
    paddingHorizontal: 12,
  },
  tripTitle: {
    fontFamily: "pop-sb",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.brand.secondary,
  },
  tripDate: {
    fontFamily: "inter-sb",
    fontSize: 12,
    lineHeight: 20,
    color: Colors.brand.secondary,
  },
  right: {
    justifyContent: "center",
  },
  addNewPetBtn: {
    height: 40,
    width: "50%",
  },
  addNewPetBtnText: {
    color: Colors.inverse.text.primary,
  },
});
