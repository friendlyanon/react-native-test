/**
 * @format
 */

import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  formatted: {
    color: "black",
  },
  date: {
    color: "gray",
  },
});

export const ListItem = ({ item, navigation }) => (
  <Pressable
    style={style.wrapper}
    onPress={() => navigation.navigate("Details", { id: item.id })}
  >
    <Text style={style.formatted}>{item.formatted}</Text>
    <Text style={style.date}>{item.date}</Text>
  </Pressable>
);
