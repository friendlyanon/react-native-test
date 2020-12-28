/**
 * @format
 */

import React, { useState } from "react";
import { TextInput } from "react-native";

const regex = /\D/g;
const format = (text) => text.replace(regex, "");

export const NumberInput = ({ value = "", onChangeText, ...props }) => {
  const [number, setNumber] = useState(value);
  const callback = (text) => {
    const formatted = format(text);
    setNumber(formatted);
    onChangeText?.(formatted);
  };

  return (
    <TextInput
      value={format(number)}
      onChangeText={callback}
      {...props}
    />
  );
};
