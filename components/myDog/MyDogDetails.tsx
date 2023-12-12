import { Sections } from "@/assets/data/sections";
import Colors from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyDogDetails = () => {
  return (
    <View style={styles.container}>
      {Sections.map((s, i) => {
        const { icon, title, desc } = s;
        return (
          <TouchableOpacity key={i} style={styles.sectionContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name={icon}
                size={32}
                style={{ alignSelf: "stretch" }}
                color={Colors.icons.tertiary}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.desc}>{desc}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyDogDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    width: "100%",
    flex: 1,
    gap: 8,
  },
  sectionContainer: {
    borderRadius: 12,
    backgroundColor: Colors.background[1],
    minHeight: 72,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    fontFamily: "pop-sb",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.text.primary,
  },
  desc: {
    fontFamily: "inter-reg",
    color: Colors.text.secondary,
    fontSize: 12,
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    gap: 4,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    alignSelf: "stretch",
  },
});
