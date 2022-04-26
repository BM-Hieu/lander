import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postApi from "../../api/postsApi";
import "./Post.scss";

function Post() {
  const params = useParams();
  console.log("params", params);
  const [datas, setData] = useState(null);

  useEffect(() => {
    const fetchLands = async () => {
      const params = {
        _limit: 1,
      };
      const landsList = await postApi.get(params);
      setData(landsList);
      console.log("api", landsList);
    };
    fetchLands();
  }, []);

  if (!datas) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {datas?.map((data, key) => (
        <div className="card shadow-sm mb-3 s-hover">
          <Link to={`/thue-nha-dat/${data._id}`}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://file4.batdongsan.com.vn/resize/745x510/2022/02/15/20220215122733-8673_wm.jpg"
                  className="img-fluid rounded-start"
                  alt="thumb-post"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body p-3 mb-5 h-100">
                  <h5 className="card-title text-f_title">{data.title}</h5>
                  <div>
                    <span>{data.utilities.price}Tỷ</span> *{" "}
                    <span>{data.utilities.acreage}m²</span>
                  </div>
                  <h5>
                    {data.location.address}, {data.location.district},{" "}
                    {data.location.city}
                  </h5>
                  <p className="card-text text-f_description">
                    {data.description}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">3 phút trước</small>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Post;
