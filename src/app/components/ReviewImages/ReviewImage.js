import { React, useState } from "react";
import Slider from "react-slick";
import "./ReviewImage.scss";

function ReviewImages() {
  const dataImg = [
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100125-3fff_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100124-087d_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100125-f49f_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100124-45fe_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100125-7295_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100124-a1f5_wm.jpg",
    "https://file4.batdongsan.com.vn/2022/03/10/20220310100125-7d3e_wm.jpg",
  ];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    centerPadding: "20px",
    initialSlide: 0,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mouseDownCoords = (e) => {
    window.checkForDrag = e.clientX;
  };
  const clickOrDrag = (e) => {
    const mouseUp = e.clientX;
    if (
      mouseUp < window.checkForDrag + 5 &&
      mouseUp > window.checkForDrag - 5
    ) {
      return openGalleryImage();
    }
  };

  function openGalleryImage() {
    console.log("aaaaa");
  }

  return (
    <div className="images_inforland-elm">
      <div className="slick-img_cover">
        <Slider
          className="images_inforland-elm__cover"
          asNavFor={nav2}
          ref={(slider) => setNav1(slider)}
        >
          {dataImg.map((pict, index) => (
            <div
              key={index}
              onMouseDown={(e) => mouseDownCoords(e)}
              onMouseUp={(e) => clickOrDrag(e)}
            >
              <img
                className="img-cover"
                src={pict}
                alt="aaaaa"
                height="300px"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slick-img_slider">
        <Slider
          {...settings}
          className="images_inforland-elm__silder"
          asNavFor={nav1}
          ref={(slider) => setNav2(slider)}
        >
          {dataImg.map((pict, index) => (
            <div>
              <img
                key={index}
                className="slide-img"
                src={pict}
                alt="aaaaa"
                height="200px"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewImages;
