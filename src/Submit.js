/**
 * @format
 */

import React from "react";
import { Button, View } from "react-native";

export const Submit = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
);
