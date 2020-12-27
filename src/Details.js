/**
 * @format
 */

import React from "react";
import { Button, StyleSheet, View } from "react-native";

import { useResolved } from "./hooks/useResolved";

import { Flag } from "./component/Flag";

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  icon: {},
  detail: {},
});

const details = [
  ["Input number", "input"],
  ["Resolved number", "id"],
  ["Formatted number", "formatted"],
  ["Country", "country"],
  ["Date", "date"],
];

function renderDetail([label, key]) {
  return (
    <View style={style.detail}>
      <Text>{label}</Text>
      <Text>{this[key]}</Text>
    </View>
  );
}

export const Details = ({ navigation, route }) => {
  const { id } = route.params;
  const { resolved } = useResolved();
  const item = resolved.find((o) => o.id === id);

  return (
    <View style={style.wrapper}>
      <View style={style.icon}>
        <Flag code={item.countryCode} size={64} type="shiny" />
      </View>
      {details.map(renderDetail, item)}
    </View>
  );
};
