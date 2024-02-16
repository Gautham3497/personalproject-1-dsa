/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PersonalLoan from "./pages/PersonalLoan";
import AboutUs from "./pages/AboutUs";
import Enquiry_Form from "./pages/Enquiry_Form";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Calculator from "./pages/Calculator";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BusinessLoan from "./pages/BusinessLoan";
import CreditCard from "./pages/CreditCard";
import HomeLoan from "./pages/HomeLoan";
import PreOwnedCarLoan from "./pages/PreOwnedCarLoan";
import MortgageLoan from "./pages/MortgageLoan";
import SubProductPage from "./pages/SubProductPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/enquiry-form" element={<Enquiry_Form />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/home-loan" element={<HomeLoan />} />
        <Route path="/mortgage-loan" element={<MortgageLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/car-loan" element={<PreOwnedCarLoan />} />
        <Route path="/sub-product-page" element={<SubProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
