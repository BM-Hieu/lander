import React from "react";
import Post from "../../components/Post/Post";
import "./NewFeed.scss";

function NewFeed() {
  // const datas = [
  //   {
  //     title:
  //       "CHỌ THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  //   {
  //     title:
  //       "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  //   {
  //     title:
  //       "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  //   {
  //     title:
  //       "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  //   {
  //     title:
  //       "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  //   {
  //     title:
  //       "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
  //     price: "Giá thỏa thuận",
  //     area: 70,
  //     location: "Hoàng Mai, Hà Nội",
  //     description:
  //       "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
  //   },
  // ];

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row nf-row_custom">
          <div className="nf-search">
            <div className="row">
              {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <p>sdadadasaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <p>sasdasssssssssssssssssssssssssssss</p>
              </div> */}
            </div>
          </div>
          <div className="nf-title">
            <div className="nf-title_left">
              <span>
                <i className="fa-solid fa-house"></i> Mua nhà đất
              </span>
            </div>
            <div className="nf-title_right">
              <button className="btn custom-btn">
                <i class="fa-solid fa-arrows-rotate"></i> Làm mới
              </button>
            </div>
          </div>
          <div className="nf-post">
            <Post />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewFeed;
