import MicroChipNumberInput from "@/components/verification/MicroChipNumberInput";
import PageLayout from "@/components/verification/PageLayout";
import { routerPush } from "@/router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const MicroChip = () => {
  const [microChipNumber, setMicroNumber] = useState("");

  const nextPage = () => {
    routerPush("/verification/microChipSuccess");
  };
  return (
    <PageLayout
      title={"Enter Microchip Number"}
      content={
        "The standard microchip number is 15 digits long, often located under a barcode on official documentation supplied by your vet or breeder. Input microchip number to confirm the identity of your dog."
      }
      next={nextPage}
    >
      <View style={{ flex: 1 }}>
        <MicroChipNumberInput
          length={15}
          onCodeFilled={(code) => setMicroNumber(code)}
        ></MicroChipNumberInput>
      </View>
    </PageLayout>
  );
};

export default MicroChip;

const styles = StyleSheet.create({});
