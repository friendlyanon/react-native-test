/**
 * @format
 */

import React, { useLayoutEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

import { useResolved } from "./hooks/useResolved";

import { Flag } from "./component/Flag";

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  icon: {},
  detail: {},
  remove: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#EE675C",
  },
  removeText: {
    fontSize: 18,
    color: "white",
  },
});

const details = [
  ["Input number", "input"],
  ["Resolved number", "id"],
  ["Formatted number", "formatted"],
  ["Country", "country"],
  ["Submitted", "date"],
];

function renderDetail([label, key], index) {
  return (
    <View key={index} style={style.detail}>
      <Text>{label}</Text>
      <Text>{this[key]}</Text>
    </View>
  );
}

const Remove = ({ onPress }) => (
  <Pressable
    style={style.remove}
    onPress={onPress}
  >
    <Text style={style.removeText}>Remove</Text>
  </Pressable>
);

export const Details = ({ navigation, route }) => {
  const { id } = route.params;
  const { resolved, remove } = useResolved();
  const item = resolved.find((o) => o.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (<Remove onPress={() => remove(id)} />),
    });
  }, [navigation]);

  return (
    <View style={style.wrapper}>
      <View style={style.icon}>
        <Flag code={item.countryCode} size={64} type="shiny" />
      </View>
      {details.map(renderDetail, item)}
    </View>
  );
};
