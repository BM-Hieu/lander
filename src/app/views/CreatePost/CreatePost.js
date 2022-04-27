import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import dataCity from "./local.json";
import "./CreatePost.scss";

function CreatePost() {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);
  const [checkDistricts, setCheckDistricts] = useState([]);
  const [checkWards, setCheckWards] = useState([]);

  const optionSelectorArea = (e) => {
    setSell(e === "sell");
    setRent(e === "rent");
  };

  const optionSell = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
  ];
  const optionRent = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
    { value: "homestay", title: "Phòng trọ" },
  ];

  console.log("city", dataCity);
  console.log("quan", checkDistricts);
  console.log("phuong", checkWards);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="container">
      <div className="row pt-3">
        <h1 className="text-center">Đăng bài</h1>
        <form>
          <div className="row">
            <div className="col-6">
              <span className="title-input ">Bạn muốn: </span>
              <input
                type="radio"
                onChange={(e) => optionSelectorArea("sell")}
                className="btn-check r-sell"
                name="options"
                defaultValue={sell}
                id="option1"
                autoComplete="off"
              />
              <label className="btn btn-custom_l form-control-lg" for="option1">
                Bán
              </label>
              <input
                type="radio"
                onChange={(e) => optionSelectorArea("rent")}
                className="btn-check r-rent"
                name="options"
                defaultValue={rent}
                id="option2"
                autoComplete="off"
              />
              <label className="btn btn-custom_r form-control-lg" for="option2">
                Cho thuê
              </label>
            </div>
            <div className="col-6">
              <select
                Disable={!sell && !rent ? true : false}
                className="form-select"
                aria-label="select example"
              >
                <option>Chọn bất động sản</option>
                {sell
                  ? optionSell.map((data) => (
                      <option value={data.value}>{data.title}</option>
                    ))
                  : null}
                {rent
                  ? optionRent.map((data) => (
                      <option value={data.value}>{data.title}</option>
                    ))
                  : null}
              </select>
            </div>
            <div className="mt-3">
              <label for="exampleInput" className="form-label">
                Tiêu đề bài viết:
              </label>
              <input
                id="exampleInput"
                className="form-control form-control-lg"
                type="text"
                placeholder="Tiêu đề của bạn"
                aria-label=".form-control-lg example"
              ></input>
            </div>
            <div className="mt-3">
              <label for="exampleInput" className="form-label">
                Địa chỉ:
              </label>
              <input
                id="exampleInput"
                className="form-control"
                type="text"
                placeholder="(ví trí khu đất, nhà, phòng trọ...)"
                aria-label=".form-control-lg example"
              ></input>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <label for="exampleInput" className="form-label">
                  Thành phố/Tỉnh:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  aria-label="select example"
                  onChange={(e) => {
                    const districtsOfLand = dataCity.find(
                      (data) => data.code === e.target.value
                    );
                    setCheckDistricts(districtsOfLand.districts);
                  }}
                >
                  <option>Chọn bất động sản</option>
                  {dataCity.map((city) => (
                    <option value={city.code}>{city.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <label for="exampleInput" className="form-label">
                  Quận/Huyện:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  aria-label="select example"
                  onChange={(e) => {
                    const wardsOfLand = checkDistricts.find(
                      (data) => data.name === e.target.value
                    );
                    setCheckWards(wardsOfLand.wards);
                  }}
                >
                  <option>Quận/Huyện</option>
                  {checkDistricts?.map((dist) => (
                    <option value={dist?.name}>{dist.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-4">
                <label for="exampleInput" className="form-label">
                  Phường/Xã:
                </label>
                <select
                  Disable={!sell && !rent ? true : false}
                  className="form-select"
                  aria-label="select example"
                >
                  <option>Phường/Xã</option>
                  {checkWards.map((ward) => (
                    <option value={ward.name}>{ward.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2">
                <label for="inputPassword" className="col-sm-5 col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-2">
                <label for="inputPassword" className="col-sm-4 col-form-label">
                  Giá cả:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <select className="input-group-text">
                    <option value="1">Triệu</option>
                    <option value="2">Tỷ</option>
                  </select>
                </div>
              </div>
              <div className="col-2">
                <label for="inputPassword" className="col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-2">
                <label for="inputPassword" className="col-sm-5 col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-2">
                <label for="inputPassword" className="col-sm-5 col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
              <div className="col-2">
                <label for="inputPassword" className="col-sm-5 col-form-label">
                  Diện tích
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <span className="input-group-text">m²</span>
                </div>
              </div>
            </div>

            <label for="exampleInput" className="col-sm-1 col-form-label">
              Mô tả
            </label>
            <div className="input-group pt-3">
              <textarea
                for="exampleInput"
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="pt-3">
              <label for="formFileLg" className="form-label">
                Chọn ảnh
              </label>
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-primary btn-lg ">
              Đăng bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
