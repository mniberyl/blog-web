import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../stores/user";
import "./Header.scss";

// import Responsive from "../common/responsive/Responsive";
// import Button from './Button';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

const Header = ({ user, onLogout }) => {
  return (
    <>
      <div className="responsive">
        <div className="header__wrapper">
          <Link to="/">Beryl Blog</Link>
          {user ? (
            <div className="header__right">
              <div className="header__right--name">{user.username}</div>
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="header__right">
              <Link to="login">로그인</Link>
            </div>
          )}
        </div>
      </div>
      <div className="header__spacer"></div>
    </>
  );
};

export default HeaderContainer;
