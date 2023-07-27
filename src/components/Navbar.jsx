import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isAuth }) => {
  const loginComponent = () => {
    const loginComponent = (
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログイン
      </Link>
    );

    return loginComponent;
  };

  const logoutComponent = () => {
    const logoutComponent = (
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        ログアウト
      </Link>
    );

    return logoutComponent;
  };

  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      {!isAuth ? loginComponent() : logoutComponent()}
    </nav>
  );
};

export default Navbar;
