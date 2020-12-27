/**
 * @format
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "gray",
    fontSize: 15,
  },
});

const Item = ({ text }) => (<Text style={style.text}>{text}</Text>);

export const Placeholder = (props) => (
  <View style={style.box}>
    <Item text="No saved numbers." />
    <Item text="Try submitting some!" />
  </View>
);
