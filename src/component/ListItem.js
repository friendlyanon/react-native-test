/**
 * @format
 */

import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";

import { Flag } from "./Flag";

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    padding: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  formatted: {
    flex: 1,
    fontSize: 17,
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
    <View style={style.top}>
      <Text style={style.formatted}>{item.formatted}</Text>
      <Flag code={item.countryCode} size={24} />
    </View>
    <Text style={style.date}>{item.date}</Text>
  </Pressable>
);
