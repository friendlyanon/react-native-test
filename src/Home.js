/**
 * @format
 */

import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { ListItem } from "./component/ListItem";

const style = StyleSheet.create({
  list: {
    flexDirection: "column",
  },
});

export const Home = ({ navigation }) => (
  <View style={style.list}>
    <Button title="Submit" onPress={() => navigation.navigate("Submit")} />
  </View>
);
