import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";

export const defaultValue = atom("London");
export const SearchValue = atomWithDefault((get) => get(defaultValue));
