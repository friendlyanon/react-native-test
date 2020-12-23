/**
 * @format
 */

import React from "react";
import { Button, View } from "react-native";

export const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button title="Submit" onPress={() => navigation.navigate("Submit")} />
  </View>
);
