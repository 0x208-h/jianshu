import { StateTypes, ActionType } from "../type";
import { CHANGE_HOME_DARA, HOME_MORE_LIST, TOGGLE_SCROLL_TOP } from "./const";

const defaultState: StateTypes = {
  topicList: [],
  articleList: [],
  showScroll: false
};

const reducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_HOME_DARA: return {
      ...state,
      ...action.payload
    }
    case HOME_MORE_LIST: return {
      topicList: state.topicList,
      articleList: state.articleList.concat(action.payload)
    }
    case TOGGLE_SCROLL_TOP: return {
      ...state,
      showScroll: action.payload
    }
    default:
      return state;
  }
};

export default reducer;
