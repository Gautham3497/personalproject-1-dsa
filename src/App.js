/* eslint-disable react/jsx-pascal-case */
import "./App.css";

import Home from "./pages/Home";
import Personal_Loan from "./pages/Personal_Loan";
import About_us from "./pages/About_us";
import Enquiry_Form from "./pages/Enquiry_Form";
import { Routes, Route } from "react-router-dom";
import Business_Loans from "./pages/Business_Loans";
import MSME_Loans from "./pages/MSME_Loans";
import Commercial_Property_Loans from "./pages/Commercial_Property_Loans";
import Business_We_Serve from "./pages/Business_We_Serve";
import Our_values from "./pages/Our_values";
import Our_Teams from "./pages/Our_Teams";
import Calculator from "./pages/Calculator";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Career from "./pages/Career";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-loan" element={<Personal_Loan />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/enquiry-form" element={<Enquiry_Form />} />
        <Route path="/business-loans" element={<Business_Loans />} />
        <Route path="/msme-loans" element={<MSME_Loans />} />
        <Route
          path="/commercial-property-loans"
          element={<Commercial_Property_Loans />}
        />
        <Route path="/business-we-serve" element={<Business_We_Serve />} />
        <Route path="/our-values" element={<Our_values />} />
        <Route path="/our-teams" element={<Our_Teams />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
