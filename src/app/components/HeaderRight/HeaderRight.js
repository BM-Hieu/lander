import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderRight.scss";

function HeaderRight() {
  const [isLogin, setIsLogin] = useState(false);
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log("change to local storage!");
      setIsLogin(true);
    });
    console.log(localStorage.getItem("token"));
    if (window.localStorage.getItem("token") && isLogin) {
      // setIsLogin(true);
      console.log(JSON.parse(localStorage.getItem("user")));
      setIsUser(JSON.parse(localStorage.getItem("user")));
      console.log("ok");
    }
  }, [isLogin]);

  const logOut = () => {
    console.log("aaaa");
    window.localStorage.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      {isUser ? (
        <div>
          <ul
            className="user_right__header"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
          >
            <li className="user_right__header-name fw-bold">{isUser.name}</li>
            <li className="user_right__header-role badge bg-danger">
              <i className="fa-solid fa-crown"></i> {isUser.role}
            </li>
          </ul>
          <ul
            className="dropdown-menu s-dropdown"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link className="dropdown-item" to="/manager/posts">
                <i className="fa-solid fa-list-check"></i> Quản lí bài viết
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/members">
                <i className="fa-solid fa-people-roof"></i> Quản lí thành viên
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/create-post">
                <i className="fa-solid fa-file-circle-plus"></i> Tạo bài viết
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/manager/add-member">
                <i className="fa-solid fa-user-plus"></i> Thêm thành viên
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                href="/thue-nha-dat"
                className="dropdown-item"
                onClick={logOut}
              >
                <i className="fa-solid fa-right-from-bracket"></i> Đăng xuất
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
