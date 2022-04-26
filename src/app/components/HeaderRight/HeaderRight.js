import { React } from "react";
import { Link } from "react-router-dom";
import checkTokenAuth from "../../middleware/auth";
import "./HeaderRight.scss";

function HeaderRight() {
  return (
    <>
      {checkTokenAuth ? (
        <div>
          <ul
            className="user_right__header"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
          >
            <li className="user_right__header-name fw-bold">
              Thiều Quang Mạnh Cường
            </li>
            <li className="user_right__header-role badge bg-danger">
              <i class="fa-solid fa-crown"></i> Admin
            </li>
          </ul>
          <ul
            class="dropdown-menu s-dropdown"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link class="dropdown-item" to="/manager/posts">
                <i class="fa-solid fa-list-check"></i> Quản lí bài viết
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/manager/members">
                <i class="fa-solid fa-people-roof"></i> Quản lí thành viên
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/manager/create-post">
                <i class="fa-solid fa-file-circle-plus"></i> Tạo bài viết
              </Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/manager/add-member">
                <i class="fa-solid fa-user-plus"></i> Thêm thành viên
              </Link>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="/#">
                <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="/contact" type="button" className="btn btn-success m-4">
          Liên hệ đăng bài
        </Link>
      )}
    </>
  );
}

export default HeaderRight;
