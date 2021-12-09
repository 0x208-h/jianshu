import React, { FC, memo } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { StateTypes, TopicListTypes } from "../../type";
import pic from "../../../../static/logo.png";
import "./index.css";
import { AnyAction } from "redux";

type TopicProps = {
  topicList: TopicListTypes[];
};

const Topic: FC<TopicProps> = ({ topicList }) => {
  console.log("topic is update");
  return (
    <div className="topic-wrapper">
      {topicList.map((item) => (
        <div className="topic-item" key={item.id}>
          <img src={pic} alt="" className="topic-pic" />
          {item.title}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: { home: StateTypes }) => ({
  topicList: state.home.topicList,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<StateTypes, void, AnyAction>
) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(memo(Topic));
