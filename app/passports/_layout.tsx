import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Passport() {
  const router = useRouter();
  const backBtn = () => {
    return (
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}
      >
        <Ionicons
          name="chevron-back"
          style={{ padding: 10 }}
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
    );
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
