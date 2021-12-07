import { fetchHomeData, getHomeMoreList } from "./../api";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { StateTypes, ArticleList } from "../type";
import { CHANGE_HOME_DARA, HOME_MORE_LIST, TOGGLE_SCROLL_TOP } from "./index";

const getHomeData = (payload: StateTypes) => ({
  type: CHANGE_HOME_DARA,
  payload,
});

const getMoreListData = (payload: ArticleList[]) => ({
  type: HOME_MORE_LIST,
  payload
})

export const getMoreList =
  () => async (dispatch: ThunkDispatch<StateTypes, void, AnyAction>) => {
    try{
      const res = await getHomeMoreList()
      if(res.success) dispatch(getMoreListData(res.data?.articleList))
    } catch {
      dispatch(getMoreListData([]))
    }
  };
export const homeData =
  () => async (dispatch: ThunkDispatch<StateTypes, void, AnyAction>) => {
    try {
      const res = await fetchHomeData();
      if (res.success) dispatch(getHomeData(res.data));
    } catch {
      dispatch(getHomeData({} as StateTypes));
    }
  };

export const toggleTopShow = (isShow: boolean) => ({
  type: TOGGLE_SCROLL_TOP,
  payload: isShow
})
