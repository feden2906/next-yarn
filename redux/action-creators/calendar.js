import { DATA, MOD, RES } from "../action-types";

export const mod = () => ({ type: MOD });
export const data = (payload) => ({ type: DATA, payload });
export const res = () => ({ type: RES });
