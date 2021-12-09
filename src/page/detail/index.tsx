import React, { FC, useEffect, memo } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { useParams, useSearchParams } from "react-router-dom";
import { AnyAction } from "redux";
import { StoreStateType } from "./type";
import { getDetailInfo } from "./store";
import "./index.css";

interface DetailProps extends StoreStateType {
  getDetailInfo: (id: number) => void;
}

const Detail: FC<DetailProps> = (props) => {

  const params = useParams();
  const { title, content, getDetailInfo } = props;
  useEffect(() => {
    if (params.id) getDetailInfo(Number(params.id));
  }, []);
  return (
    <div className="detail-wrapper">
      <div className="detail-header">{title}</div>
      <div
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

const mapStateToProps = (state: { detail: StoreStateType }) => ({
  title: state.detail.title,
  content: state.detail.content,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StoreStateType, void, AnyAction>
) => ({
  getDetailInfo(id: number) {
    dispatch(getDetailInfo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Detail));
