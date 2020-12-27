/**
 * @format
 */

import React from "react";
import Flags from "react-native-flags";

export const Flag = ({ code, size = 16, type = "flat" }) => (
  <Flags code={code} size={size} type={type} />
);
