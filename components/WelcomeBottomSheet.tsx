import BottomSheet from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useMemo, useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { defaultStyles } from "../constants/Styles";
import LoginWithSocial from "./LoginWithSocial";
import Separator from "./Separator";

const WelcomeBottomSheet = () => {
  const goToLogin = () => {
    router.replace("/login");
  };
  const goToSignUp = () => {
    router.replace("/signUp");
  };
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["45%", "45%"], []);
  return (
    <BottomSheet
      index={0}
      ref={bottomSheetRef}
      enablePanDownToClose={false}
      snapPoints={snapPoints}
      style={styles.sheetContainer}
    >
      <TouchableOpacity
        style={[defaultStyles.primaryBtn, { height: 50 }]}
        onPress={() => {
          goToSignUp();
        }}
      >
        <Text style={defaultStyles.primaryBtnText}>Try for free</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={defaultStyles.greyBtn}
        onPress={() => {
          goToLogin();
        }}
      >
        <Text style={defaultStyles.greyBtnText}>Login to Pawpass</Text>
      </TouchableOpacity>
      <Separator text="or login with"></Separator>
      <LoginWithSocial
        login={() => {
          goToLogin();
        }}
      ></LoginWithSocial>
    </BottomSheet>
  );
};

export default WelcomeBottomSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 10,
  },
});
