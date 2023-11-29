import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { routerPush } from "@/router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const travel = () => {
  // const [items, setItems] = useState([
  //   {
  //     id: "1",
  //     title: "Paris Adventure",
  //     date: "27. 09. 2023 - 05. 10. 2023",
  //     numOfDoc: 1,
  //   },
  //   {
  //     id: "2",
  //     title: "Germany Adventure",
  //     date: "11. 10. 2023 - 25. 10. 2023",
  //     numOfDoc: 4,
  //   },
  // ]);
  const [items, setItems] = useState([]);

  const renderCard = (item: any, index: number) => {
    const { id, title, date, numOfDoc } = item;
    return (
      <View
        key={index}
        style={[
          defaultStyles.cardContainer,
          { flexDirection: "column", marginBottom: 12 },
        ]}
      >
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.details}>{date}</Text>
          </View>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderBottomColor: "#000",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Text style={styles.details}>Doc. needed: {numOfDoc}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {items.length !== 0 ? (
        <ScrollView style={styles.scrollView}>
          {items.map((item, index) => {
            return renderCard(item, index);
          })}
        </ScrollView>
      ) : (
        <View style={styles.empty}>
          <Image
            source={require("@/assets/images/travel/empty.png")}
            resizeMode="contain"
            style={styles.backgroundImage}
          ></Image>
          <Text style={styles.emptyText}>Adventure awaits</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => routerPush("/travels/planNewTrip")}
      >
        <Ionicons name="add-sharp" size={36} color={Colors.contrast.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default travel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background[2],
    flex: 1,
    paddingVertical: 12,
  },
  empty: {
    flex: 1,
    backgroundColor: Colors.background[2],
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "30%",
    height: "30%",
  },
  backgroundImage: {
    backgroundColor: Colors.background[2],
    justifyContent: "center", // This will ensure the image is centered in the view
    alignSelf: "center",
    width: "100%",
    height: "50%",
  },
  emptyText: {
    fontFamily: "pop-reg",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.text.secondary,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background[2],
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: Colors.brand.primary,
    borderRadius: 28,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 24,
    color: "white",
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: "pop-b",
    lineHeight: 24,
    color: Colors.text.primary,
  },
  details: {
    fontFamily: "inter-reg",
    fontSize: 12,
    color: Colors.text.secondary,
  },
});
