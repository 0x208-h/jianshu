
// import { ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";
import { StoreStateType } from '../type';
import { Dispatch } from "redux";
import { fetchDetailInfo } from "../api";
import { GET_DETAIL_INFO } from './index'
const getDetailInfoData = (payload: StoreStateType) => ({
  type: GET_DETAIL_INFO,
  payload
})

export const getDetailInfo = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res = await fetchDetailInfo(id);
    if (res.success) dispatch(getDetailInfoData(res.data));
  } catch {
    dispatch(getDetailInfoData({} as StoreStateType));
  }
};