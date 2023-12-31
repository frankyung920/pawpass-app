import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Passport() {
  const backBtn = () => {
    return <BackButton />;
  };
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Passport",
          headerLeft: () => backBtn(),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "pop-b",
    fontSize: 16,
    color: Colors.text.primary,
  },
});
