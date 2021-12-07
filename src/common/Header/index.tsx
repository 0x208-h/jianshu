import React, { useRef, MutableRefObject } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from  'react-redux'
// import { onBlur, onFocus, selectFocused } from '../../toolkit/headerSlice'
import { connect } from "react-redux";
// import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, bindActionCreators } from "redux";
import { StateTypes } from "./type";
import {
  handleBlur,
  handleFocus,
  getList,
  handleMouseEnter,
  handleMouseLeave,
  handlePageChange,
} from "./store";
import "./index.css";

interface HeaderProps extends StateTypes {
  handleFocus: (list: string[]) => void;
  handleBlur?: () => void;
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
    page = 1,
    totalPage = 0,
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
          <span className="header-login">登陆</span>
        </div>
      </div>
      <div className="header-right-btns">
        <button className="header-btn reg">注册</button>
        <button className="header-btn write">写文章</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { header: StateTypes }) => ({
  focused: state.header.focused,
  list: state.header.list,
  page: state.header.page,
  mouseIn: state.header.mouseIn,
  totalPage: state.header.totalPage,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
