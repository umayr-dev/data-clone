import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AboutePage from "../pages/haqimizda";
import Asosiy from "../pages/asosiy";
import Kurslar from "../pages/kurslar";
import Visists from "../pages/visists";
import Yutuqlar from "../pages/yutuqlar";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="/bizhaqimizda" element={<AboutePage />} />
        <Route path="/kurslar" element={<Kurslar />} />
        <Route path="/tashriflar" element={<Visists />} />
        <Route path="/yutuqlar" element={<Yutuqlar />} />
        
      </Routes>
    </main>
  );
}

export default Main;
