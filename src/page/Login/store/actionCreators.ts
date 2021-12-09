import { Dispatch } from "redux"
import { LoginStateType } from "../type"
import { fetchLogin } from "../api"
import { LOGIN_INFO, LOGIN_OUT } from "./index"

const loginAction = (payload: LoginStateType) => ({
  type: LOGIN_INFO,
  payload
})

export const login = (account: string, password: string) => async (dispatch: Dispatch) => {
  try{
    const res = await fetchLogin(account, password)
    console.log(res.data, 'res')
    if(res.success){
      dispatch(loginAction(res.data))
    }
  } catch {
    dispatch(loginAction(false as unknown as LoginStateType))
  }
}

export const loginOut = () => ({
  type: LOGIN_OUT,
  payload: {
    isLogin: false
  }
})

