import React, { useRef, MutableRefObject } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from  'react-redux'
// import { onBlur, onFocus, selectFocused } from '../../toolkit/headerSlice'
import { connect } from "react-redux";
// import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, bindActionCreators } from "redux";
import { StateTypes } from "./type";
import { LoginStateType } from "../../page/Login/type";
import {
  handleBlur,
  handleFocus,
  getList,
  handleMouseEnter,
  handleMouseLeave,
  handlePageChange,
} from "./store";
import { loginOut } from "../../page/Login/store";
import "./index.css";

interface HeaderProps extends StateTypes, LoginStateType {
  handleFocus: (list: string[]) => void;
  handleBlur?: () => void;
  loginOut: () => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  handlePageChange: (
    page: number,
    totalPage: number,
    spin: MutableRefObject<HTMLElement>
  ) => void;
}
const Header = (props: HeaderProps) => {
  // const [foused, setFoused] = useState<boolean>(false)
  // const disptch = useDispatch()

  // const focused = useSelector(selectFocused)

  const spinRef = useRef<HTMLElement | null>(null);
  const {
    focused,
    mouseIn,
    list,
    isLogin,
    page = 1,
    totalPage = 0,
    loginOut,
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
    handlePageChange,
  } = props;
  const pageList: any[] = [];

  if (list.length) {
    for (let i = (page - 1) * 5; i < page * 5; i++) {
      list[i] &&
        pageList.push(
          <a className="header-search-info-item" href="/" key={list[i]}>
            {list[i]}
          </a>
        );
    }
  }

  const getListArea = () => {
    if (focused || mouseIn) {
      return (
        <div
          className="header-search-info"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="header-search-info-title">
            热门搜索
            <span
              className="header-search-info-switch"
              onClick={() =>
                handlePageChange(
                  page,
                  totalPage,
                  spinRef as MutableRefObject<HTMLElement>
                )
              }
            >
              <i className="iconfont icon-spin" ref={spinRef}></i>
              换一批
            </span>
          </div>
          <div className="header-search-info-item-wrapper">{pageList}</div>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="header-wrapper">
      <Link to="/">
        <div className="header-logo" />
      </Link>
      <div className="header-nav">
        <div>
          <span className="header-home-page">首页</span>
          <span className="heder-download">下载App</span>
          <div className="header-search-wrapper">
            <input
              type="text"
              className={
                focused || mouseIn
                  ? "header-search input-foused"
                  : "header-search input-blur"
              }
              placeholder="搜索"
              // onFocus={() => disptch(onFocus())}
              // onBlur={() => disptch(onBlur())}
              onFocus={() => handleFocus(list)}
              onBlur={handleBlur}
            />
            {getListArea()}
          </div>
        </div>
        <div className="header-right">
          <span className="header-aa">Aa</span>
          {isLogin ? (
            <span
              className="header-login"
              onClick={loginOut}
              style={{ cursor: "pointer" }}
            >
              退出
            </span>
          ) : (
            <Link to="/login">
              <span className="header-login">登陆</span>
            </Link>
          )}
        </div>
      </div>
      <div className="header-right-btns">
        <Link to="/write">
          <button className="header-btn write">写文章</button>
        </Link>
        <button className="header-btn reg">注册</button>
      </div>
    </div>
  );
};

type stateProps = {
  header: StateTypes;
  login: LoginStateType;
};

const mapStateToProps = (state: stateProps) => ({
  focused: state.header.focused,
  list: state.header.list,
  page: state.header.page,
  mouseIn: state.header.mouseIn,
  totalPage: state.header.totalPage,
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateTypes, void, AnyAction>
) => {
  return {
    handleFocus(list: string[]) {
      list.length === 0 && dispatch(getList());
      dispatch(handleFocus());
    },
    handleBlur() {
      dispatch(handleBlur());
    },
    handleMouseEnter() {
      dispatch(handleMouseEnter());
    },
    handleMouseLeave() {
      dispatch(handleMouseLeave());
    },
    handlePageChange(
      page: number,
      totalPage: number,
      spin: MutableRefObject<HTMLElement>
    ) {
      let originAngle: number =
        parseInt(
          spin.current?.style.transform.replace(/[^0-9]/gi, " ") || "",
          10
        ) || 0;
      spin.current.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(handlePageChange(page + 1));
      } else {
        dispatch(handlePageChange(1));
      }
    },
    loginOut() {
      dispatch(loginOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
