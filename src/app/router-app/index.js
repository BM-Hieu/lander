import { Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { NewFeed } from "../views/NewFeed";
import { NotFound } from "../views/NotFound";
import { CreatePost } from "../views/CreatePost";
import { InforLand } from "../views/InforLand";
import { Contact } from "../views/Contact";
import { ManagerMember } from "../views/MangerMember";
import { ManagerPost } from "../views/ManagerPost";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/thue-nha-dat" element={<NewFeed />} />
      <Route path="/thue-nha-dat/:id" element={<InforLand />} />
      <Route path="/mua-nha-dat" element={<NewFeed />} />
      <Route path="/thue-phong-tro" element={<NewFeed />} />
      <Route path="/contact" element={<Contact />} />

      {/* auth routes */}
      <Route path="/manager/posts" element={<ManagerPost/>} />
      <Route path="/manager/members" element={<ManagerMember/>} />
      <Route path="/manager/create-post" element={<CreatePost />} />
      <Route
        path="/manager/add-member"
        element={<Login setShowRegister={true} />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
