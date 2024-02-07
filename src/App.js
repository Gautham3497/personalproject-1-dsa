/* eslint-disable react/jsx-pascal-case */
import "./App.css";

import Home from "./pages/Home";
import Personal_Loan from "./pages/Personal_Loan";
import About_us from "./pages/About_us";
import Enquiry_Form from "./pages/Enquiry_Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-loan" element={<Personal_Loan />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/enquiry-form" element={<Enquiry_Form />} />
      </Routes>
    </div>
  );
}

export default App;
