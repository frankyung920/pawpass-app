import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modal } from "./modals/Modal";

interface Props {
  updateDate: any;
  cancel: any;
  date: Date;
  minDate: Date;
}

const DatePicker = ({ updateDate, date, cancel, minDate }: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const { type } = event;
    if (type === "dismissed") {
      cancel();
      return;
    }
    isAndroid() && updateDate(selectedDate);
    setSelectedDate(selectedDate);
  };

  const isAndroid = (): boolean => {
    return Platform.OS === "android";
  };

  const onConfirm = () => {};

  return isAndroid() ? (
    <DateTimePicker
      value={date}
      mode={"date"}
      onChange={onChange}
      minimumDate={new Date()}
      display="default"
    />
  ) : (
    <Modal isVisible={true} style={{ background: Colors.background[1] }}>
      <View
        style={[
          defaultStyles.modalContainer,
          {
            paddingBottom: 24,
          },
        ]}
      >
        <DateTimePicker
          value={date}
          mode={"date"}
          onChange={onChange}
          minimumDate={minDate}
          display="spinner"
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[defaultStyles.noBorderBtn, styles.noBorderBtn]}
            onPress={() => {
              cancel();
            }}
          >
            <Text style={defaultStyles.noBorderBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[defaultStyles.noBorderBtn, styles.noBorderBtn]}
            onPress={() => {
              updateDate(selectedDate);
            }}
          >
            <Text style={defaultStyles.noBorderBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  noBorderBtn: {
    backgroundColor: Colors.background[2],
    height: 30,
    marginVertical: 5,
    paddingHorizontal: 20,
  },
});
