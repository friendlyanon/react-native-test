/**
 * @format
 */

import React from "react";

import { NumberInput } from "./NumberInput";

export const SubmitInput = (props) => (
  <NumberInput
    autoCorrect={false}
    autoFocus={true}
    keyboardType="phone-pad"
    placeholder="Enter a phone number"
    returnKeyType="send"
    {...props}
  />
);
