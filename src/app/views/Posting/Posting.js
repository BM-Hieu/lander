import { React } from "react";
import "./Posting.scss";

function Posting() {
  // const optionsSell = [
  //   { title: "Nhà", value: "house" },
  //   { title: "Đất", value: "land" },
  // ];

  // const optionsRent = [
  //   { title: "Nhà", value: "house" },
  //   { title: "Đất", value: "land" },
  //   { title: "Nhà trọ", value: "homestay" },
  // ];

  // const optionSelectorArea = (data) => {
  //   if (data === "rent") {
  //     return optionsRent;
  //   } else if (data === "sell") {
  //     return optionsSell;
  //   }
  // };

  return (
    <section className="vh-100">
      <div className="container">
        <div className="row pt-3">
          <h1 className="text-center">Đăng bài</h1>
          <form>
            <span>Bạn muốn: </span>
            <div className="mb-3">
              <input
                type="radio"
                // onChange={(e) => {
                //   optionSelectorArea(e);
                // }}
                className="btn-check r-sell"
                name="options"
                defaultValue="sell"
                id="option1"
                autoComplete="off"
              />
              <label className="btn btn-custom_l" for="option1">
                Bán
              </label>

              <input
                type="radio"
                // onChange={(e) => {
                //   optionSelectorArea(e);
                // }}
                className="btn-check r-rent"
                name="options"
                defaultValue="rent"
                id="option2"
                autoComplete="off"
              />
              <label className="btn btn-custom_r" for="option2">
                Cho thuê
              </label>
              <div id="emailHelp" className="form-text"></div>
              <select
                className="form-select"
                aria-label="Disabled select example"
                disabled
              >
                <option>Open this select menu</option>
                {/* {optionSelectorArea().map((option) => (
                  <option value={option.value}>{option.title}</option>
                ))} */}
              </select>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Đăng bài
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Posting;
