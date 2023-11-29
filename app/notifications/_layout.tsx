import Colors from "@/constants/Colors";
import { routerPush } from "@/router";
import { AntDesign } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Notifications() {
  const backBtn = () => {
    return (
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => routerPush("/(tabs)/home")}
      >
        <AntDesign
          style={{ padding: 10 }}
          name="close"
          size={20}
          color={Colors.primary}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Notifications",
          headerTitleStyle: styles.headerText,
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
