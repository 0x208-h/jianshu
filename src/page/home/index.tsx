import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Write from "./components/Write";
import { StateTypes } from "./type";
import { homeData, toggleTopShow } from "./store";
import pic from "../../static/logo.png";
import "./index.css";

interface HomeProps {
  showScroll: boolean
  changeHomeData: () => void;
  changeScrollTopShow: () => void;
}

const Home: FC<HomeProps> = ({ showScroll, changeHomeData, changeScrollTopShow }) => {
  useEffect(() => {
    changeHomeData();
    bindEvents();
    return () => window.removeEventListener('scroll', changeScrollTopShow, false)
  }, []);

  const bindEvents = () => {
    window.addEventListener('scroll', changeScrollTopShow, false)
  }

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <div className="home-banner">
          <img src={pic} alt="" />
        </div>
        <Topic />
        <List />
      </div>
      <div className="home-right">
        <Recommend />
        <Write />
      </div>
      {showScroll ? (
        <div className="home-back-top" onClick={handleScrollTop}>
          回到顶部
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state: { home: StateTypes }) => ({
  showScroll: state.home.showScroll,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateTypes, void, AnyAction>
) => ({
  changeHomeData() {
    dispatch(homeData());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 400) {
      dispatch(toggleTopShow(true))
    } else {
      dispatch(toggleTopShow(false))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
