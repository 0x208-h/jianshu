import { SEARCH_BLUR, SEARCH_FOCUS } from './index'
import { stateTypes, actionTypes } from '../type'

const defaultState: stateTypes = {
  focused: false
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
    default: return state
  }
}

export default  reducer