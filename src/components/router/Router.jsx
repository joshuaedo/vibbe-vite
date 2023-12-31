import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home.jsx";
// import { Slug } from "../../pages/projects/Slug.jsx";
import { NotFound } from "../not-found/NotFound.jsx";

export const Router = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    {/* <Route path={"/projects/:slug"} element={<Slug />} />  */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
