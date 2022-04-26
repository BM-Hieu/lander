import { React, useState } from "react";
import "./CreatePost.scss";
import dataCity from "./local.json";

function CreatePost() {
  // const [checkCity, setCheckCity] = useState();
  // const [checkDistricts, setCheckDistricts] = useState('');
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);

  const optionSelectorArea = (e) => {
    setSell(e === "sell");
    setRent(e === "rent");
  };

  const optionSelectorDistricts = (e) => {
    // const quan = dataCity.find(dataCity.code === e)
    // console.log(quan);
  }

  const optionSell = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
  ];
  const optionRent = [
    { value: "house", title: "Nhà" },
    { value: "land", title: "Đất" },
    { value: "homestay", title: "Phòng trọ" },
  ];


  return (
    <section className="vh-100">
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
                <label
                  className="btn btn-custom_l form-control-lg"
                  for="option1"
                >
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
                <label
                  className="btn btn-custom_r form-control-lg"
                  for="option2"
                >
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
                    onChange={(e) => optionSelectorDistricts(e.target.value)}
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
                  >
                    <option>Quận/Huyện</option>
                    {dataCity.map((city) => (
                      <option value="1">{city.name}</option>
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
                    <option>Chọn bất động sản</option>
                    <option value="1">a</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-2">
                  <label
                    for="inputPassword"
                    className="col-sm-5 col-form-label"
                  >
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
                  <label
                    for="inputPassword"
                    className="col-sm-4 col-form-label"
                  >
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
                  <label
                    for="inputPassword"
                    className="col-sm-5 col-form-label"
                  >
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
                  <label
                    for="inputPassword"
                    className="col-sm-5 col-form-label"
                  >
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
                  <label
                    for="inputPassword"
                    className="col-sm-5 col-form-label"
                  >
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
    </section>
  );
}

export default CreatePost;
