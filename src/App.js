import { Header } from "./app/views/Header";
import { Routes, Route } from "react-router-dom";
import { Login } from "./app/views/Login";
import { NewFeed } from "./app/views/NewFeed";
import { NotFound } from "./app/views/NotFound";
import { Posting } from "./app/views/Posting";
import "./App.css";

function App() {
  // const view = <h1>Trang chủ đang trong quá trình hoàn thành</h1>;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/manager" element={<Posting />} />
        <Route path="/thue-nha-dat" element={<NewFeed />} />
        <Route path="/mua-nha-dat" element={<NewFeed />} />
        <Route path="/thue-phong-tro" element={<NewFeed />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
