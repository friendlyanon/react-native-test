/**
 * @format
 */

import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const style = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Loading = () => (
  <View style={style.loading}>
    <ActivityIndicator size="large" color="blue" />
  </View>
);
