/**
 * @format
 */

import React, { useLayoutEffect } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Clipboard from "@react-native-community/clipboard";
import Toast from "react-native-simple-toast";

import { useResolved } from "./hooks/useResolved";

import { Flag } from "./component/Flag";

const style = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
  },
  icon: {
    padding: 30,
    alignItems: "center",
  },
  detail: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  label: {
    flex: 1,
    fontWeight: "bold",
  },
  remove: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#EE675C",
  },
  removeText: {
    fontSize: 18,
    color: "white",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

function copy(detail) {
  try {
    Clipboard.setString(detail);
    Toast.show("Copied to clipboard");
  } catch {
    Toast.show("Failed to copy to clipboard");
  }
}

const details = [
  ["Input number", "input", true],
  ["Resolved number", "id", true],
  ["Formatted number", "formatted", true],
  ["Country", "country", false],
  ["Submitted", "date", false],
];

function renderDetail([label, key, isCopyable], index, array) {
  const detail = this[key];
  const detailText = (<Text>{detail}</Text>);
  const wrappedText = isCopyable
    ? (<Pressable onPress={() => copy(detail)}>{detailText}</Pressable>)
    : detailText;
  const detailStyle = index + 1 === array.length
    ? [style.detail, style.borderBottom]
    : style.detail;

  return (
    <View key={index} style={detailStyle}>
      <Text style={style.label}>{label}</Text>
      {wrappedText}
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
      headerRight: () => (<Remove onPress={() => {
        remove(id);
        navigation.navigate("Home");
      }} />),
    });
  }, [navigation, id]);

  if (item == null) {
    return null;
  }

  return (
    <View style={style.wrapper}>
      <View style={style.icon}>
        <Flag code={item.countryCode} size={64} type="shiny" />
      </View>
      {details.map(renderDetail, item)}
    </View>
  );
};
