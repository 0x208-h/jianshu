import React, { FC, memo } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getMoreList } from "../../store";
import { StateTypes, ArticleList } from "../../type";
import "./index.css";

type ListProps = {
  articleList: ArticleList[];
  getMoreList: () => void;
};
const List: FC<ListProps> = ({ articleList, getMoreList }) => {
  return (
    <div>
      {articleList.map((item, index) => (
        <Link to="/detail" key={index}>
          <div className="list-item">
            <img src={item.imgUrl} className="list-item-pic" alt="" />
            <div className="list-info">
              <div className="list-info-title">{item.title}</div>
              <div className="list-info-desc">{item.desc}</div>
            </div>
          </div>
        </Link>
      ))}
      <div className="list-load-more" onClick={getMoreList}>
        加载更多
      </div>
    </div>
  );
};

const mapStateToProps = (state: { home: StateTypes }) => ({
  articleList: state.home.articleList,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateTypes, void, AnyAction>
) => ({
  getMoreList() {
    dispatch(getMoreList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(List));
