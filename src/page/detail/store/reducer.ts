import { ActionType, StoreStateType } from '../type'
import { GET_DETAIL_INFO } from './index'
const defaultState: StoreStateType = {
  title: '',
  content: ''
}

const reducer = (state = defaultState, action: ActionType) => {
  switch(action.type) {
    case GET_DETAIL_INFO: return {
      ...state,
      ...action.payload
    }
    default:
      return state
  }
}

export default reducer