import React from "react";
import Sidebar from './components/Sidebar';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BacaAlQuran from "./pages/BacaAlQuran";
import Surah from "./pages/Surah";
import axios from "axios";
import { ALQURAN_URL } from "./utils/constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surahs: []
    }
  }

  componentDidMount() {
    axios.get(ALQURAN_URL)
      .then(response => {
        const surahs = response.data.data.surahs;
        // const surahs = response;
        this.setState({ surahs });
      }, []);
  }

  render() {
    if (!this.state.surahs) return null;

    return (
      <div className="w-full">
        <div className="ml-24">
          <div className="px-6 py-12">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/baca-alquran' element={<BacaAlQuran surahs={this.state.surahs} />} />
              <Route path='/baca-alquran/surah/:nomor' element={<Surah />} />
            </Routes>
          </div>
        </div>

        <Sidebar />
      </div>
    );
  }
}

export default App;