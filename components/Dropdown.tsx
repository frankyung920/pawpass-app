import Colors from "@/constants/Colors";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { Text } from "react-native";

interface Props {
  placeholder: string;
  items: any[];
  setItems: any;
  value: any;
  setValue: any;
  open: boolean;
  setOpen: any;
  zIndex: number;
  zIndexInverse: number;
}

const Dropdown = ({
  placeholder,
  items,
  setItems,
  value,
  setValue,
  open,
  setOpen,
  zIndex,
  zIndexInverse,
}: Props) => {
  DropDownPicker.setListMode("FLATLIST");
  return (
    <DropDownPicker
      stickyHeader={true}
      closeAfterSelecting={true}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      closeOnBackPressed={true}
      translation={{
        PLACEHOLDER: placeholder,
      }}
      placeholderStyle={{
        fontFamily: "inter-reg",
        fontSize: 16,
      }}
      style={{
        height: 64,
        borderWidth: 1,
        borderColor: Colors.outline.tertiary,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#fff",
        gap: 16,
      }}
      dropDownContainerStyle={{
        borderRadius: 8,
        borderWidth: 1,
        borderTopColor: Colors.outline.tertiary,
        borderColor: Colors.background[1],
        backgroundColor: Colors.background[1],
        shadowColor: Colors.text.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 5,
      }}
      ListEmptyComponent={() => <Text>Options not found</Text>}
    />
  );
};

export default Dropdown;
