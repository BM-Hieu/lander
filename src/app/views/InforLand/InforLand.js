import React, { useState } from "react";
import { getDescrip } from "../data";
import ReviewImages from "../../components/ReviewImages/ReviewImage";
import "./InforLand.scss";

function InforLand() {
  const mota = getDescrip();

  return (
    <div className="container">
      <div className="row pt-5">
        <ReviewImages />
        <div className="authors_inforland-elm"></div>

        <div className="infor_del-description">
          <div className="infor__title">
            <h4>
              XEM NHÀ 24/7, CHUYÊN CHO THUÊ CĂN HỘ 1-2-3PN HADO CENTROSA MIỄN
              PHÍ QUẢN LÝ. CHỈ CẦN GỌI TRƯỚC 30P
            </h4>
            <p className="infor__location">
              Dự án Masteri Thảo Điền, Đường Xa Lộ Hà Nội, Phường Thảo Điền,
              Quận 2, Hồ Chí Minh
            </p>
          </div>
          <div className="infor-utilities">
            <div className="infor_author">
              <div className="profile_celler">
                <div className="profile_celler-avatar">
                  <span className="profile_celler-avatar__default">C</span>
                </div>
                <div className="profile_celler-author">
                  <span className="profile_celler-author__title">
                    Người đăng bài:
                  </span>
                  <span className="profile_celler-author__name">
                    Thiều Quang Mạnh Cường
                  </span>
                </div>
                <div className="profile_celler-info">
                  <div>
                    <i className="fa-solid fa-phone"></i>
                    <span
                      id="telephone"
                      className="profile_celler-info__hotline"
                    >
                      0905156164
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="profile_celler-info__mail">
                      manhcuongland@gmail.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="infor-lander">
                <div className="utilities-item">
                  <span className="title">Mức giá</span>
                  <span className="value">15tr/tháng</span>
                </div>
                <div className="utilities-item">
                  <span className="title">Mức giá</span>
                  <span className="value">15tr/tháng</span>
                </div>
                <div className="utilities-item">
                  <span className="title">Mức giá</span>
                  <span className="value">15tr/tháng</span>
                </div>
                <div className="utilities-item">
                  <span className="title">Mức giá</span>
                  <span className="value">15tr/tháng</span>
                </div>
              </div>
            </div>
          </div>

          <div className="infor-descreption">
            <h4>Thông tin mô tả</h4>

            <p className="content-descreption" key={mota.id}>
              {mota}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforLand;
