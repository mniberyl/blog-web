import React from "react";
import { Link } from "react-router-dom";
// import Responsive from "../common/responsive/Responsive";
// import Button from './Button';

const Header = ({ user, onLogout }) => {
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <Link to="/">Beryl Blog</Link>
          {user ? (
            <div className="header__right">
              <div class="header__right--name">아이디</div>
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="header__right">
              <button to="/login">로그인</button>
            </div>
          )}
        </div>
      </div>
      <div className="header__spacer"></div>
    </>

    // <>
    //   <HeaderBlock>
    //     <Wrapper>

    //       {user ? (
    //         <div className="right">
    //           <UserInfo>{user.username}</UserInfo>
    //           <Button onClick={onLogout}>로그아웃</Button>
    //         </div>
    //       ) : (
    //         <div className="right">
    //           <Button to="/login">로그인</Button>
    //         </div>
    //       )}
    //     </Wrapper>
    //   </HeaderBlock>
    //   <Spacer />
    // </>
  );
};

export default Header;
