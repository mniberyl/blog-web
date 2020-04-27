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
      <div className="header">
        <div className="header__wrapper responsive">
          <div className="header__left">
            <Link to="/">Beryl Blog</Link>
          </div>
          {user ? (
            <div className="header__right">
              <div className="header__right header__right-name">
                {user.username}
              </div>
              <div
                className="header__right header__right--logout"
                onClick={onLogout}
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="header__right">
              <div className="header__right header__right--login">
                <Link to="/login">Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="headerspacer"></div>
    </>
  );
};

export default HeaderContainer;
