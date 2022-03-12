import React from "react";
import "./Login.scss";
import LoginImg from "../../assets/img/logo/pagelogin.png";

function Header() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 m-custom">
            <img className="img-login" src={LoginImg} alt="img-login" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Đăng nhập</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Điền tài khoản"
                />
                <label className="form-label">Tài khoản</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  name="password"
                  autoComplete="on"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Điền mật khẩu"
                />
                <label className="form-label">Mật khẩu</label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <a href="#!" className="text-body">
                  Quên mật khẩu
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
