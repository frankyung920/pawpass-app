import PageLayout from "@/components/verification/PageLayout";
import { routerPush } from "@/router";
import React from "react";
import { StyleSheet, Text } from "react-native";

const ScanOwnerId = () => {
  const nextPage = () => {
    routerPush("/verification/identitySuccess");
  };
  return (
    <PageLayout
      title={"Scan Owner’s ID"}
      content={
        "This ensures authenticity, prevents fraud and complies with regulatory requirements."
      }
      next={nextPage}
    >
      <Text>TODO: ID verification integrations</Text>
    </PageLayout>
  );
};

export default ScanOwnerId;

const styles = StyleSheet.create({});
