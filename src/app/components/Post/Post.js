import React from "react";
import "./Post.scss";

function Post() {
  const datas = [
    {
      title:
        "CHỌ THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
    {
      title:
        "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
    {
      title:
        "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
    {
      title:
        "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
    {
      title:
        "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
    {
      title:
        "CHO THUÊ VĂN PHÒNG ĐỦ NỘI THẤT TÒA 29T1 HOÀNG ĐẠO THÚY, CẦU GIẤY, DT 10-20-30-50-100-200-500M2",
      price: "Giá thỏa thuận",
      area: 70,
      location: "Hoàng Mai, Hà Nội",
      description:
        "Bán căn shophouse ngoại giao The Manor Central Park. Tổng giá 27,5 tỷ giá hợp đồng 2x tỷ. Căn thuộc block 16TM1 hướng đẹp, trước nhà là công viên nội khu. Bao giá rẻ nhất thị trường. Căn ngoại giao nhưng vẫn được hưởng chiết khấu và chính sách bình thường của chủ đầu tư. Đầu tư mua là thắng. Liên hệ em Hà biết mã căn số tiền hợp đồng thực tế SĐT: ",
    },
  ];

  return (
    <>
      {datas.map((data) => (
        <div class="card mb-3 mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://file4.batdongsan.com.vn/resize/745x510/2022/02/15/20220215122733-8673_wm.jpg"
                className="img-fluid rounded-start"
                alt="thumb-post"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-f_title">{data.title}</h5>
                <div>
                  <span>{data.price}</span> * <span>{data.area}m²</span>
                </div>
                <h5>{data.location}</h5>
                <p className="card-text text-f_description">
                  {data.description}
                </p>
                <p className="card-text">
                  <small className="text-muted">3 phút trước</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
