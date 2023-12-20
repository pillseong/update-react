import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isLinkActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className='list'>
      <Link to='/' className={isLinkActive("/") ? "active" : ""}>
        홈
      </Link>
      <Link to='/Board' className={isLinkActive("/Board") ? "active" : ""}>
        게시판
      </Link>
      <Link to='/Notice' className={isLinkActive("/Notice") ? "active" : ""}>
        공지사항
      </Link>
      <Link to='/Login' className={isLinkActive("/Login") ? "active" : ""}>
        로그인
      </Link>
      <Link to='/Infor' className={isLinkActive("/Infor") ? "active" : ""}>
        내정보
      </Link>
      <Link to='/Show' className={isLinkActive("/Show") ? "active" : ""}>
        소개
      </Link>
      <Link
        to='/Homework'
        className={isLinkActive("/Homework") ? "active" : ""}
      >
        과제함
      </Link>
    </div>
  );
}
export default Header;
