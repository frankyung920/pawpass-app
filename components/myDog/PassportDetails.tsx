import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PassportDetails = () => {
  const [touchableMargin, setTouchableMargin] = useState(0);

  const handleLayout = (event: any) => {
    const height = event.nativeEvent.layout.height;
    setTouchableMargin(-height / 2);
  };
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.bottomView}>
        <View
          style={[
            styles.dataColumn,
            styles.dataColumnHeader,
            styles.dataColumnBottomLine,
          ]}
        >
          <Text style={styles.field}>NAME:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>SPEC:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>DATE OF BIRTH:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={[styles.dataColumn, styles.dataColumnBottomLine]}>
          <Text style={styles.field}>BREED:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>WEIGHT:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={[styles.dataColumn, styles.dataColumnBottomLine]}>
          <Text style={styles.field}>HEIGHT:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>HANDLER:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>ADDRESS:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>ASSISTANCE DOG:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>CRATE SIZE:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.field}>PLACE OF ISSUE:</Text>
          <Text style={styles.value}>{"MAXWELL"}</Text>
        </View>
        <View style={[styles.dataColumn, styles.dataColumnFooter]}>
          <Text style={styles.field}>{""}</Text>
          <Text style={styles.value}>{""}</Text>
        </View>
      </View>

      <TouchableOpacity
        onLayout={handleLayout}
        style={[styles.micronChipContainer, { marginBottom: touchableMargin }]}
      >
        <View style={styles.qrIcon}>
          <MaterialIcons
            name="qr-code"
            size={28}
            color={Colors.background[1]}
          />
        </View>
        <View style={styles.micronChip}>
          <Text style={styles.micronChipText}>MICROCHIP NUMBER</Text>
          <Text style={styles.micronChipText}>123-123-123-123-123</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PassportDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    width: "100%",
  },
  bottomView: {
    width: "100%",
  },
  micronChipContainer: {
    borderRadius: 12,
    minHeight: 48,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary,
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    flexDirection: "row",
  },
  field: {
    fontFamily: "inter-sb",
    color: Colors.text.secondary,
    fontSize: 14,
    lineHeight: 16,
  },
  value: {
    fontFamily: "inter-sb",
    color: Colors.text.primary,
    fontSize: 14,
    lineHeight: 16,
  },
  qrIcon: {
    paddingRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  micronChip: {
    alignItems: "center",
    justifyContent: "center",
  },
  micronChipText: {
    fontFamily: "inter-sb",
    color: Colors.contrast.primary,
  },
  dataColumn: {
    minHeight: 34,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: Colors.background[1],
  },
  dataColumnHeader: {
    paddingTop: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  dataColumnFooter: {
    paddingBottom: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dataColumnBottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.outline.primary,
  },
});
