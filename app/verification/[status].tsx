import { VerificationStatusMessage } from "@/assets/data/message";
import PageLayout from "@/components/verification/PageLayout";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { IVerificationStatusMessage } from "@/interfaces/message";
import { routerPush } from "@/router";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Status = () => {
  const { status } = useLocalSearchParams<{ status: string }>();

  const { title, text, next } = VerificationStatusMessage.find(
    (e) => e.key === (status ? status : "success")
  ) as IVerificationStatusMessage;

  return (
    <PageLayout>
      <View style={styles.status}>
        <View style={styles.firstTextContainer}>
          <Text style={styles.firstText}>{title}</Text>
        </View>
        <View style={styles.secondTextContainer}>
          <Text style={styles.secondText}>{text}</Text>
        </View>
        <View style={styles.continueBtn}>
          <TouchableOpacity
            style={[defaultStyles.primaryBtn, { flex: 1 }]}
            onPress={() => routerPush(next)}
          >
            <Text style={[defaultStyles.primaryBtnText]}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageLayout>
  );
};

export default Status;

const styles = StyleSheet.create({
  status: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 55,
    gap: 8,
  },
  firstTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  firstText: {
    fontFamily: "pop-sb",
    fontSize: 16,
    color: Colors.text.primary,
    textAlign: "center",
  },
  secondTextContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  secondText: {
    fontFamily: "inter-reg",
    fontSize: 12,
    color: Colors.text.primary,
    textAlign: "center",
  },
  continueBtn: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
});
