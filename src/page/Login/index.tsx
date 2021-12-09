import React, { FC, useRef, MutableRefObject, memo } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { LoginStateType } from "./type";
import { login } from "./store";
import "./index.css";
interface LoginProps extends LoginStateType {
  handleLogin: (
    account: MutableRefObject<HTMLInputElement>,
    password: MutableRefObject<HTMLInputElement>
  ) => void;
}
const Login: FC<LoginProps> = ({ isLogin, handleLogin }) => {
  const accountRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  if (!isLogin) {
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <input
            type="text"
            placeholder="账号"
            name=""
            id=""
            ref={accountRef}
            className="login-input"
          />
          <input
            type="password"
            placeholder="密码"
            name=""
            id=""
            ref={passwordRef}
            className="login-input"
          />
          <div
            className="login-btn"
            onClick={() =>
              handleLogin(
                accountRef as MutableRefObject<HTMLInputElement>,
                passwordRef as MutableRefObject<HTMLInputElement>
              )
            }
          >
            登陆
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
};
const mapStateToProps = (state: { login: LoginStateType }) => ({
  isLogin: state.login.isLogin,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<LoginStateType, void, AnyAction>
) => ({
  handleLogin(
    account: MutableRefObject<HTMLInputElement>,
    password: MutableRefObject<HTMLInputElement>
  ) {
    dispatch(login(account.current.value, password.current.value));
    console.log(account.current.value, password.current.value);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login));
