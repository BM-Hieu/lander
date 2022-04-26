import { Header } from "./app/views/Header";
import RouterApp from "./app/router-app";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css

export default function App() {
  // const view = <h1>Trang chủ đang trong quá trình hoàn thành</h1>;
  return (
    <div className="App">
      <Header />
      <RouterApp />
    </div>
  );
}
