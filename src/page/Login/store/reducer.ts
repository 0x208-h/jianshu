import { ActionType, LoginStateType } from '../type'
import { LOGIN_INFO, LOGIN_OUT } from '.'
const defaultState: LoginStateType= {
  isLogin: false
}
const reducer = (state = defaultState, action: ActionType) => {
  console.log(action, 'action')
  switch(action.type) {
    case LOGIN_INFO: return {
      ...state,
      ...action.payload
    }
    case LOGIN_OUT: return {
      ...state,
      ...action.payload
    }
    default: 
    return state
  }
}

export default reducer