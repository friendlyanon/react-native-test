/**
 * @format
 */

import React from "react";
import { Button, StyleSheet, View } from "react-native";

export const Details = ({ navigation, route }) => {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
