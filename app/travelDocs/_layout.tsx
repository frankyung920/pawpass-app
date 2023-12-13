import BackButton from "@/components/BackButton";
import Colors from "@/constants/Colors";
import { Stack, useRouter } from "expo-router";
import { StyleSheet } from "react-native";

export default function Passport() {
  const router = useRouter();
  const backBtn = () => {
    return <BackButton />;
  };
  return <Stack></Stack>;
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "pop-b",
    fontSize: 16,
    color: Colors.text.primary,
  },
});
