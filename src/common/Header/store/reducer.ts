import { SEARCH_BLUR, SEARCH_FOCUS, HEADER_LIST } from './index'
import { stateTypes, actionTypes } from '../type'

const defaultState: stateTypes = {
  focused: false,
  list: []
}

const reducer = (state = defaultState, action: actionTypes ) => {
  switch(action.type) {
    case SEARCH_BLUR: return { 
      ...state,
      focused: false
    }
    case SEARCH_FOCUS: return {
      ...state,
      focused: true
    }
    case HEADER_LIST: return {
      ...state,
      list: action.payload
    }
    default: return state
  }
}

export default  reducer