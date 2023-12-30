/* eslint-disable react/jsx-pascal-case */
import "./App.css";

import Home from "./Home";
import Personal_Loan from "./Personal_Loan";
import About_us from "./About_us";
import Enquiry from "./Enquiry";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-loan" element={<Personal_Loan />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </div>
  );
}

export default App;
