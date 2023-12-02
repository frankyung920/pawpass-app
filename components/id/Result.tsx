import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  text: string;
  success: boolean;
}

const Result = ({ success, text }: Props) => {
  return (
    <View
      style={[
        styles.resultContainer,
        success ? styles.successContainer : styles.warningContainer,
      ]}
    >
      <View style={styles.resultContentContainer}>
        <AntDesign
          name={success ? "check" : "warning"}
          size={24}
          color={Colors.contrast.primary}
        />
        <Text style={styles.resultText}>Rabies Vaccination: need booster</Text>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  resultContainer: {
    width: "84%",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 24,
    borderWidth: 1,
    marginTop: 12,
  },
  successContainer: {
    borderColor: Colors.success.default,
    backgroundColor: "rgba(2, 159, 84, 0.2)",
  },
  warningContainer: {
    borderColor: Colors.warning.default,
    backgroundColor: "rgba(243, 196, 30, 0.2)", // React Native supports rgba values
  },
  resultContentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    paddingLeft: 8,
    fontSize: 14,
    fontFamily: "pop-reg",
    lineHeight: 20,
    color: Colors.contrast.primary,
    paddingVertical: 12,
  },
});
