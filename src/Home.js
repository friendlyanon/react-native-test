/**
 * @format
 */

import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import { useResolved } from "./hooks/useResolved";

import { ListItem } from "./component/ListItem";
import { Loading } from "./component/Loading";
import { Placeholder } from "./component/Placeholder";

const style = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "column",
  },
});

const makeRenderer = (navigation) =>
  ({ item }) => (<ListItem item={item} navigation={navigation} />);

export const Home = ({ navigation }) => {
  const { resolved, isLoaded } = useResolved();

  if (!isLoaded) {
    return (<Loading />);
  }

  const list = resolved.length === 0
    ? (<Placeholder />)
    : (<FlatList data={resolved} renderItem={makeRenderer(navigation)} />);

  return (
    <View style={style.list}>
      <Button title="Submit" onPress={() => navigation.navigate("Submit")} />
      {list}
    </View>
  );
};
