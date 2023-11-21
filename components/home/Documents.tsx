import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Documents = () => {
  const [documents, setDocuments] = useState([]);
  return (
    <View style={defaultStyles.cardContainer}>
      <Text style={defaultStyles.cardTitle}>Documents</Text>
      {documents.length !== 0 ? (
        <Text style={styles.emptyMessage}>No Pending Document</Text>
      ) : (
        <>
          <View style={styles.documentContainer}>
            <View style={styles.left}>
              <View style={styles.documentIcon}>
                <AntDesign
                  name="filetext1"
                  size={24}
                  color={Colors.brand.primary}
                />
              </View>
              <View style={styles.documentContent}>
                <Text style={styles.documentName}>Health Certificate</Text>
                <Text style={styles.documentDate}>21/07/2023 - 10:30 AM</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.right}>
              <MaterialCommunityIcons name="dots-horizontal" size={24} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Documents;

const styles = StyleSheet.create({
  emptyMessage: {
    fontFamily: "inter-sb",
    lineHeight: 16,
    fontSize: 12,
    color: Colors.text.secondary,
  },
  documentContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: Colors.contrast.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  documentContent: {
    paddingHorizontal: 12,
  },
  documentName: {
    color: Colors.brand.secondary,
    fontFamily: "pop-reg",
    fontSize: 14,
    lineHeight: 20,
  },
  documentDate: {
    color: Colors.text.secondary,
    fontSize: 12,
    fontFamily: "inter-reg",
  },
  left: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
  },
  right: {
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});
