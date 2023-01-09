import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Info from "../Pages/info";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="../pages/home.js" element={<Home />}>
          <Route path="../pages/info.js" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;