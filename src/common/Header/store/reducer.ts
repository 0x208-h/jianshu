import { AnyAction } from "redux";
import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  HEADER_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  PAGE_CHANGE,
} from "./index";
import { StateTypes } from "../type";

const defaultState: StateTypes = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
};

const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_BLUR:
      return {
        ...state,
        focused: false,
      };
    case SEARCH_FOCUS:
      return {
        ...state,
        focused: true,
      };
    case HEADER_LIST:
      return {
        ...state,
        list: action.payload,
        totalPage: action.totalPage,
      };
    case MOUSE_ENTER:
      return {
        ...state,
        mouseIn: true,
      };
    case MOUSE_LEAVE:
      return {
        ...state,
        mouseIn: false,
      };
    case PAGE_CHANGE:
      return {
        ...state,
        page: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
