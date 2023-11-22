import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { routerPush } from "@/router";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  children: React.ReactNode;
  title?: string;
  content?: string;
  next?: any;
  viewCustomStyle?: any;
  customStyle?: any;
}

const PageLayout = ({
  children,
  title,
  content,
  next,
  viewCustomStyle,
  customStyle,
}: Props) => {
  return (
    <View
      style={
        viewCustomStyle
          ? [
              defaultStyles.container,
              { backgroundColor: Colors.background[1] },
              viewCustomStyle,
            ]
          : [defaultStyles.container, { backgroundColor: Colors.background[1] }]
      }
    >
      <SafeAreaView
        style={customStyle ? [styles.container, customStyle] : styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => routerPush("/(tabs)/home")}
          >
            <AntDesign name="close" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipForNow}>
            <Text
              style={styles.skipForNowText}
              onPress={() => routerPush("/(tabs)/home")}
            >
              Skip for now
            </Text>
            <AntDesign
              name="arrowright"
              size={14}
              color={Colors.brand.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        {children}

        {next && (
          <View style={styles.continueBtn}>
            <TouchableOpacity style={[defaultStyles.primaryBtn]} onPress={next}>
              <Text style={[defaultStyles.primaryBtnText]}>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default PageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background[1],
    flexDirection: "column",
    paddingHorizontal: 24,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  closeButton: {
    width: 52,
    height: 52,
    borderRadius: 60,
    backgroundColor: Colors.contrast.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  skipForNow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  skipForNowText: {
    fontFamily: "inter-sb",
    fontSize: 14,
    paddingHorizontal: 8,
    textDecorationLine: "underline",
    color: Colors.brand.primary,
  },
  title: {
    color: Colors.text.primary,
    fontFamily: "pop-b",
    paddingHorizontal: 8,
    lineHeight: 28,
    fontSize: 24,
  },
  content: {
    color: Colors.text.secondary,
    fontFamily: "pop-reg",
    fontSize: 14,
    paddingHorizontal: 8,
  },
  continueBtn: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 24,
  },
});
