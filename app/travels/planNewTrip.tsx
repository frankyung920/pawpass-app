import DatePicker from "@/components/DatePicker";
import Dropdown from "@/components/Dropdown";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { routerPush } from "@/router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import moment from "moment";

const PlanNewTrip = () => {
  const [fromOpen, setFromOpen] = useState(false);
  const [from, setFrom] = useState(null);
  const [toOpen, setToOpen] = useState(false);
  const [to, setTo] = useState(null);
  const [countryList, setCountryList] = useState([
    {
      label: "United Kingdom",
      value: "UK",
    },
    {
      label: "Hong Kong",
      value: "HK",
    },
  ]);

  const [startDate, setStartDate] = useState(new Date());
  const [startDateStr, setStartDateStr] = useState("Pick a date");
  const [startDateOpen, setStartDateOpen] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [endDateStr, setEndDateStr] = useState("Pick a date");
  const [endDateOpen, setEndDateOpen] = useState(false);

  const [petOpen, setPetOpen] = useState(false);
  const [pet, setPet] = useState(null);
  const [pets, setPets] = useState([]);

  const updateStartDate = (date: Date) => {
    const dateStr = moment(date).format("DD/MM/YYYY");
    setStartDateOpen(false);
    setStartDate(date);
    setStartDateStr(dateStr);
    setMinDate(date);
  };

  const updateEndDate = (date: Date) => {
    const dateStr = moment(date).format("DD/MM/YYYY");
    setEndDateOpen(false);
    setEndDate(date);
    setEndDateStr(dateStr);
  };

  return (
    <View
      style={[
        defaultStyles.container,
        { backgroundColor: Colors.background[1] },
      ]}
    >
      <SafeAreaView style={[styles.container]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => routerPush("/(tabs)/home")}
          >
            <AntDesign name="close" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <View style={styles.headerTitleView}>
            <Text style={styles.headerTitle}>Plan a new trip</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Build an itinerary and we will map out your to-do list
        </Text>

        <TextInput
          style={defaultStyles.inputField}
          placeholder={"Trip name"}
        ></TextInput>
        <Dropdown
          zIndex={3000}
          zIndexInverse={1000}
          placeholder={"From?"}
          items={countryList}
          setItems={setCountryList}
          open={fromOpen}
          setOpen={setFromOpen}
          value={from}
          setValue={setFrom}
        ></Dropdown>

        <Dropdown
          zIndex={2000}
          zIndexInverse={2000}
          placeholder={"Where to?"}
          items={countryList}
          setItems={setCountryList}
          open={toOpen}
          setOpen={setToOpen}
          value={to}
          setValue={setTo}
        ></Dropdown>
        <View style={styles.travelDates}>
          <TouchableOpacity
            style={styles.startDate}
            onPress={() => setStartDateOpen(true)}
          >
            <View style={styles.startDateText}>
              <Text style={styles.travelDateTitle}>Start Date</Text>
              <Text style={styles.pickADateText}>{startDateStr}</Text>
            </View>
            <View style={styles.calendar}>
              <FontAwesome5 name="calendar-alt" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>
          <TouchableOpacity
            style={styles.endDate}
            onPress={() => setEndDateOpen(true)}
          >
            <View style={styles.endDateText}>
              <Text style={styles.travelDateTitle}>End Date</Text>
              <Text style={styles.pickADateText}>{endDateStr}</Text>
            </View>
            <View style={styles.calendar}>
              <FontAwesome5 name="calendar-alt" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Dropdown
          zIndex={1000}
          zIndexInverse={3000}
          placeholder={"Choose pet"}
          items={pets}
          setItems={setPets}
          open={petOpen}
          setOpen={setPetOpen}
          value={pet}
          setValue={setPet}
        ></Dropdown>

        <View style={styles.continueBtn}>
          <TouchableOpacity
            style={[defaultStyles.primaryBtn]}
            onPress={() => console.log(123)}
          >
            <Text style={[defaultStyles.primaryBtnText]}>Start planning</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {startDateOpen && (
        <DatePicker
          cancel={() => setStartDateOpen(false)}
          date={startDate}
          minDate={startDate}
          updateDate={(date: Date) => updateStartDate(date)}
        />
      )}
      {endDateOpen && (
        <DatePicker
          cancel={() => setEndDateOpen(false)}
          date={endDate}
          minDate={minDate}
          updateDate={(date: Date) => updateEndDate(date)}
        />
      )}
    </View>
  );
};

export default PlanNewTrip;

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
  headerTitleView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 52,
  },
  headerTitle: {
    fontFamily: "pop-b",
    fontSize: 16,
  },
  subtitle: {
    color: Colors.text.primary,
    fontFamily: "pop-sb",
    fontSize: 14,
  },
  travelDates: {
    height: 64,
    borderWidth: 1,
    borderColor: Colors.outline.tertiary,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  startDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "48%",
  },
  startDateText: {
    justifyContent: "space-between",
  },
  endDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "48%",
  },
  endDateText: {
    justifyContent: "space-between",
  },
  travelDateTitle: {
    fontFamily: "inter-b",
    fontSize: 12,
    color: Colors.text.primary,
    lineHeight: 16,
  },
  pickADateText: {
    fontFamily: "inter-reg",
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  calendar: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  separator: {
    height: "100%",
    width: 1,
    marginHorizontal: 5,
    backgroundColor: Colors.outline.tertiary,
  },

  continueBtn: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 24,
  },
});
