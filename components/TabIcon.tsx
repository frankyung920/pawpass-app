import Colors from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  color: string;
  name: string;
  focused: boolean;
}
const TabIcon = ({ color, name, focused }: Props) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "home":
        return <FontAwesome5 name="home" size={24} color={color} />;
      case "travel":
        return <FontAwesome5 name="plane-departure" size={24} color={color} />;
      case "id":
        return <Image source={require("@/assets/images/id.png")} />;
      case "myDog":
        return <FontAwesome5 name="dog" size={24} color={color} />;
      case "profile":
        return <FontAwesome5 name="user-alt" size={24} color={color} />;
      default:
        return <Image source={require("@/assets/images/id.png")} />;
    }
  };

  return (
    <View style={[focused && styles.iconActive]}>
      <TouchableOpacity>{getIcon(name)}</TouchableOpacity>
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  iconActive: {
    width: 52,
    height: 52,
    borderRadius: 60,
    backgroundColor: Colors.contrast.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
});
