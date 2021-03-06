/**
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { displayName as title } from "./app.json";

import { Home } from "./src/Home";
import { Submit } from "./src/Submit";
import { Details } from "./src/Details";

import { ResolvedProvider } from "./src/contexts/ResolvedContext";

const Stack = createStackNavigator();

const homeOptions = { title };

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
    <Stack.Screen name="Submit" component={Submit} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export const App = () => (
  <NavigationContainer>
    <ResolvedProvider>
      <AppStack />
    </ResolvedProvider>
  </NavigationContainer>
);
