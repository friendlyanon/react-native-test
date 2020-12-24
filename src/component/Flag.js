/**
 * @format
 */

import React from "react";
import Flags from "react-native-flags";

export const Flag = ({ code, size = 16 }) => (
  <Flags code={code} size={size} type="flat" />
);
