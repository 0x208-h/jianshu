import React, { FC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginStateType } from '../Login/type'

const Write: FC<LoginStateType> = (props) => {
  const { isLogin } = props
  if(isLogin) {
    return (
      <div>写文章</div>
    )
  } else {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }
  
}
const mapStateToProps = (state: { login: LoginStateType }) => ({
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Write)