import { DATA, MOD, RES } from "../action-types";

const initialState = {
  dateNow: new Date(),
  modal: false,
  selectDate: new Date()
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOD: {
      return { ...state, dateNow: new Date(), modal: true }
    }

    case DATA: {
      return { ...state, selectDate: Date.parse(payload) }
    }

    case RES: {
      return { ...state, modal: false }
    }

    default: {
      return state
    }
  }
}
