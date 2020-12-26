/**
 * @format
 */

import { useContext } from "react";
import { ResolvedContext } from "../contexts/ResolvedContext";

export const useResolved = () => useContext(ResolvedContext);
