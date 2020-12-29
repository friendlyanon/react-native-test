/**
 * @format
 */

import React, { useState } from "react";
import { TextField } from "@ubaids/react-native-material-textfield";

const regex = /\D/g;
const format = (text) => text.replace(regex, "");

export const NumberInput = ({ value = "", onChangeText, ...props }) => {
  const [number, setNumber] = useState(value);
  const callback = (text) => {
    setNumber(text);
    onChangeText?.(text);
  };

  return (
    <TextField
      formatText={format}
      value={number}
      onChangeText={callback}
      {...props}
    />
  );
};
