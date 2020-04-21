import React from "react";
import "./AuthForm.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * 회원가입, 로그인 레이아웃 컴포넌트.
 */

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const authTitle = textMap[type];
  return (
    <div className="authblock">
      <div className="authblock__box">
        <div className="authblock__logo">
          <Link to="/">Beryl Blog</Link>
        </div>
        <div className="authform">
          <form onSubmit={onSubmit}>
            <div className="authform__form">
              <input
                authcomplete="username"
                name="username"
                placeholder="ID"
                onChange={onChange}
                // value={form.username}
              />
              <input
                authcomplete="new-password"
                name="password"
                type="password"
                placeholder="PASSWORD"
                onChange={onChange}
                // value={form.password}
              />
              {type === "register" && (
                <input
                  authcomplete="new-password"
                  name="passwordConfirm"
                  type="password"
                  placeholder="PASSWORD CONFIRM"
                  onChange={onChange}
                  // value={form.passwordConfirm}
                />
              )}
            </div>
            <div className="authform__btn">
              <button>{authTitle}</button>
            </div>
          </form>
          {error && <div className="authform__error">{error}</div>}
          <div className="authform__footer">
            {type === "login" ? (
              <Link to="/register">회원가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

textMap.PropTypes = {
  login: PropTypes.string,
  register: PropTypes.string,
};

export default AuthForm;
