/**
 * @format
 */

import "react-native-gesture-handler";
import { AppRegistry, LogBox } from "react-native";
import { App } from "./App";
import { name as appName } from "./app.json";

LogBox.ignoreLogs([
  // bogus warning about a require cycle
  "Require cycle: node_modules\\react-native\\Libraries\\Network\\fetch.js",
]);

AppRegistry.registerComponent(appName, () => App);
