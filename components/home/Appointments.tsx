import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  // TODO: check image exists
  return (
    <View style={defaultStyles.cardContainer}>
      <Text style={defaultStyles.cardTitle}>Appointments</Text>
      {appointments.length !== 0 ? (
        <Text style={styles.emptyMessage}>No upcoming appointment</Text>
      ) : (
        <>
          <View style={styles.appointmentContainer}>
            <View style={{ gap: 5 }}>
              <Text style={styles.appointmentStatus}>
                Waiting for confirmation
              </Text>
              <View style={styles.appointmentDate}>
                <EvilIcons name="clock" size={20} color="black" />
                <Text>Wed Jul 24 · 8:00 - 8:30 AM </Text>
              </View>
            </View>
            <View style={styles.appointmentSeparator}></View>

            <View
              style={{
                flexDirection: "row",
                gap: 4,
              }}
            >
              <Image
                style={styles.appointmentClinicImage}
                source={require("@/assets/images/id.png")}
              />
              <View style={{ gap: 4 }}>
                <Text style={styles.appointmentClinic}>
                  Bell Brown & Bentley Veterinary Surgeons
                </Text>
                <Text style={styles.appointmentContact}>
                  192 London Rd · 0116 254 3255
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  emptyMessage: {
    fontFamily: "inter-sb",
    lineHeight: 16,
    fontSize: 12,
    color: Colors.text.secondary,
  },
  appointmentContainer: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.warning.default,
    paddingLeft: 12,
    gap: 7.5,
  },
  appointmentStatus: {
    fontFamily: "inter-sb",
    fontSize: 12,
    lineHeight: 16,
    color: Colors.text.secondary,
  },
  appointmentDate: {
    fontFamily: "inter-reg",
    fontSize: 12,
    color: Colors.text.primary,
    flexDirection: "row",
    alignContent: "flex-end",
  },
  appointmentSeparator: {
    flex: 1,
    borderBottomColor: Colors.outline.tertiary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appointmentClinicImage: {
    marginTop: 4,
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  appointmentClinic: {
    fontFamily: "inter-sb",
    fontSize: 12,
    lineHeight: 16,
    color: Colors.text.primary,
  },
  appointmentContact: {
    fontFamily: "inter-reg",
    fontSize: 12,
    lineHeight: 16,
    color: Colors.text.secondary,
  },
});
