import { React } from "react";
import "./HeaderNav.scss";

function HeaderNav() {
  return (
    <ul className="row-page">
      <li>
        <a href="/noi-bat">
          <label for="nav-mobile-input">
            <span>Nổi bật</span>
          </label>
        </a>
      </li>
      <li>
        <a href="/nha-dat-cho-thue">
          <label for="nav-mobile-input">
            <span>Nhà đất cho thuê</span>
          </label>
        </a>
      </li>
      <li>
        <a href="nha-dat-ban">
          <label for="nav-mobile-input">
            <span>Nhà đất bán</span>
          </label>
        </a>
      </li>
      <li>
        <a href="/phong-tro-cho-thue">
          <label for="nav-mobile-input">
            <span>Phòng trọ cho thuê</span>
          </label>
        </a>
      </li>
    </ul>
  );
}

export default HeaderNav;
