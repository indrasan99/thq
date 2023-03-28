import React, { useState, useEffect } from "react";
import Sidebar from './components/Sidebar';
import FilterableQuran from "./components/FilterableQuran";
import Home from "./pages/Home";
import Surah from "./pages/Surah";
import Atribusi from "./pages/Atribusi";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { ALL_CHAPTERS } from "./utils/constants";
import "./App.css";

function App() {
  const [surahs, setState] = useState([]);

  useEffect(() => {
    axios.get(ALL_CHAPTERS)
      .then(response => {
        setState(response.data.chapters);
      }, []);
  });

  if (!surahs) return null;

  return (
    <div className="w-full">
      <div className="ml-24">
        <div className="px-6 py-12">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/baca-alquran' element={<FilterableQuran surahs={surahs} />} />
            <Route path='/baca-alquran/surah/:nomor' element={<Surah />} />
            <Route path='/atribusi' element={<Atribusi />} />
          </Routes>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default App;