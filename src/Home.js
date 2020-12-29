/**
 * @format
 */

import React, { useLayoutEffect } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useResolved } from "./hooks/useResolved";

import { ListItem } from "./component/ListItem";
import { Loading } from "./component/Loading";
import { Placeholder } from "./component/Placeholder";

const style = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "column",
  },
  submit: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#2296F3",
  },
  submitText: {
    fontSize: 18,
    color: "white",
  },
});

const makeRenderer = (navigation) =>
  ({ item }) => (<ListItem item={item} navigation={navigation} />);

const Submit = ({ onPress }) => (
  <Pressable
    style={style.submit}
    onPress={onPress}
  >
    <Text style={style.submitText}>Submit</Text>
  </Pressable>
);

export const Home = ({ navigation }) => {
  const { resolved, isLoaded } = useResolved();

  useLayoutEffect(() => {
    const button = isLoaded
      ? (<Submit onPress={() => navigation.navigate("Submit")} />)
      : null;

    navigation.setOptions({ headerRight: () => button });
  }, [navigation, isLoaded]);

  if (!isLoaded) {
    return (<Loading />);
  }

  const list = resolved.length === 0
    ? (<Placeholder />)
    : (<FlatList
        data={[...resolved].reverse()}
        renderItem={makeRenderer(navigation)}
      />);

  return (
    <View style={style.list}>
      {list}
    </View>
  );
};
