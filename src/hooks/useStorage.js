/**
 * @format
 */

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const save = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

const load = async (key, setValue, setLoaded) => {
  const value = await AsyncStorage.getItem(key);
  if (value) {
    setValue(JSON.parse(value));
  }
  setLoaded(true);
};

export const useStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    load(key, setValue, setLoaded);
  }, [key]);

  useEffect(() => {
    if (value) {
      save(key, JSON.stringify(value));
    }
  }, [key, value]);

  return { value, setValue, isLoaded };
};
