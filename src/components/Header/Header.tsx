import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header__container">
      <ul className="header__list">
        <li>
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "header__link--active" : "header__link a-button"
            }
            to="."
          >
            Currencies list
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "header__link--active" : "header__link a-button"
            }
            to="followed"
          >
            Followed currencies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
