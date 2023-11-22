import Colors from "@/constants/Colors";
import React, { useRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";

interface MicroChipNumberInputProps {
  length: number;
  onCodeFilled: (code: string) => void;
}

const MicroChipNumberInput: React.FC<MicroChipNumberInputProps> = ({
  length,
  onCodeFilled,
}) => {
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));
  const inputs = useRef<TextInput[]>([]);

  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (code.length === length) {
      if (newCode.every((item) => item)) {
        onCodeFilled(newCode.join(""));
      }
      return;
    }

    if (isNaN(Number(text))) {
      return;
    }

    // Move to next field if text is entered
    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
    // Check if all fields are filled
    if (newCode.every((item) => item)) {
      onCodeFilled(newCode.join(""));
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    // Check for backspace key press
    // if (e.nativeEvent.key === "Backspace" && index !== 0 && !code[index]) {
    if (e.nativeEvent.key === "Backspace" && index !== 0) {
      if (code[index]) {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
      if (index !== 0) {
        inputs.current[index - 1].focus();
      }
    } else if (!isNaN(Number(e.nativeEvent.key))) {
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const renderInputs = () => {
    const inputElements = [];
    for (let i = 0; i < length; i++) {
      inputElements.push(
        <TextInput
          key={`input-${i}`}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => handleInput(text, i)}
          onKeyPress={(e) => handleKeyPress(e, i)}
          ref={(ref: TextInput) => (inputs.current[i] = ref)}
        />
      );
      // keys.push(`input-${i}`);

      if (i == 2 || i == 8) {
        inputElements.push(
          <Text key={`dash-${i}`} style={styles.dash}>
            -
          </Text>
        );
      }

      if ((i + 1) % 6 === 0 && i !== 0) {
        inputElements.push(
          <View key={`break-${i}`} style={styles.breakLine} />
        );
      }
    }
    return inputElements;
  };

  return <View style={styles.container}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  input: {
    borderRadius: 6,
    backgroundColor: Colors.outline.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7,
    textAlign: "center",
    width: 29,
    color: Colors.text.primary,
    height: 40,
    fontSize: 18,
    lineHeight: 24,
  },
  dash: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "inter-reg",
    textAlign: "center",
  },
  breakLine: {
    width: "100%",
    height: 0,
  },
});

export default MicroChipNumberInput;
