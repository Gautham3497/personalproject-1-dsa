import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { colors } from "../constants/colors";
import logo from "../assets/2.png";

import emailjs from "@emailjs/browser";

const Enquiry_Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlg3roy",
        "template_4eaqnun",
        form.current,
        "rdd5jVCHkgsR0vRu3",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  const para = `Let's discuss on 
  something cool together`;

  return (
    <div style={{ backgroundColor: colors.logoPink }}>
      <section className="container mx-auto  p-5   md:flex md:p-10 ">
        <div className=" text-center md:w-1/2 md:text-left ">
          <Link to="/">
            <img src={logo} className="  inline h-32 w-32" alt="logo" />
            <span className="inline text-lg text-white md:block lg:text-4xl">
              {para}
            </span>
          </Link>
        </div>
        <div className=" flex flex-col rounded-xl  bg-white  p-5  md:w-1/2">
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-lg font-semibold text-[#2B75BC] md:text-xl  "
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="mb-2 w-1/2 rounded border-b border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none  focus:ring focus:ring-[#F27D2E] lg:text-xl"
                placeholder=" Full Name"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="num"
                className="mb-1 text-lg  font-semibold text-[#2B75BC] md:text-xl"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="user_number"
                id="num"
                className="mb-2 w-1/2 rounded border-b border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none  focus:ring focus:ring-[#F27D2E] lg:text-xl"
                placeholder="10 Digit Number"
                required
                maxLength={10}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="mail"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl"
              >
                Email Id
              </label>
              <input
                type="email"
                name="user_email"
                id="mail"
                className="mb-2 w-1/2 rounded border-b border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none  focus:ring focus:ring-[#F27D2E] lg:text-xl"
                placeholder="Email Id"
                required
              />
            </div>

            <div className="mb-3 flex flex-col">
              <label
                htmlFor="pin"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl"
              >
                Pin Code
              </label>
              <input
                type="text"
                name="user_pincode"
                id="pin"
                className=" mb-2 w-1/2 rounded border-b border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none  focus:ring focus:ring-[#F27D2E] lg:text-xl"
                placeholder=" Pincode"
                maxLength={6}
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="emp type"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] md:text-xl"
              >
                Enquiry Type
              </label>
              <select
                name="loan-type"
                id="user-loan-type"
                className="mb-2 w-1/2 rounded border-b border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none  focus:ring focus:ring-[#F27D2E] lg:text-xl"
              >
                <option value=" Select Loan type" selected required>
                  Select Loan type
                </option>
                <option value="personal-loan">Personal Loan</option>
                <option value="housing-loan">Housing Loan</option>
                <option value="loan-against-property">
                  Loan against Property
                </option>
              </select>
            </div>
            <div className="mb-3 flex flex-col">
              <label
                htmlFor="address"
                className="mb-2 text-lg font-semibold  text-[#2B75BC] md:text-xl"
              >
                Your Address :
              </label>
              <textarea
                name="user_address"
                id="address"
                cols="20"
                rows="5"
                className=" mb-2 w-11/12 rounded border border-[#F27D2E] bg-transparent p-2 text-lg outline-none focus:border-none focus:ring  focus:ring-[#F27D2E] md:w-8/12 lg:text-xl"
                placeholder="Contact Address"
                required
              ></textarea>
            </div>
            <div>
              <button
                // style={{ backgroundColor: colors.logoBlue }}
                type="submit"
                className=" rounded-md border bg-[#2B75BC] p-2 text-xl font-semibold text-white
ring-1 hover:bg-[#F27D2E] hover:ring-1 hover:ring-[#F27D2E]"
              >
                Request to Contact
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquiry_Form;
