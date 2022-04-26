import { React } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <ul className="row-page">
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="thue-nha-dat">
            <span>Thuê nhà đất</span>
          </NavLink>
        </label>
      </li>
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="mua-nha-dat">
            <span>Mua nhà đất</span>
          </NavLink>
        </label>
      </li>
      <li>
        <label htmlFor="nav-mobile-input">
          <NavLink to="thue-phong-tro">
            <span>Thuê phòng trọ</span>
          </NavLink>
        </label>
      </li>
    </ul>
  );
}

export default HeaderNav;
