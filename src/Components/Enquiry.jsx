import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Enquiry = () => {
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

  return (
    <div>
      <Navbar />
      <section className="container mx-auto  p-3  md:flex">
        <div className="md:w-1/2 "></div>
        <div className=" flex flex-col rounded-xl border border-black bg-purple-200  p-5  md:w-1/2">
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="mb-3 flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className=" w-1/2 rounded border p-2 uppercase focus:outline-none focus:ring focus:ring-purple-500"
                placeholder=" Full Name"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="num" className="font-semibold">
                Mobile Number
              </label>
              <input
                type="tel"
                name="user_number"
                id="num"
                className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="10 Digit Number"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="mail" className="font-semibold">
                Email Id
              </label>
              <input
                type="email"
                name="user_email"
                id="mail"
                className="w-1/2 rounded border p-2 lowercase focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="city" className="font-semibold">
                City
              </label>
              <input
                type="text"
                name="user_cityname"
                id="city"
                className="w-1/2 rounded border p-2 uppercase focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="City Name"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="pin" className="font-semibold">
                Pin Code
              </label>
              <input
                type="text"
                name="user_pincode"
                id="pin"
                className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
                placeholder=" Pin Code"
                required
              />
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="emp type" className="font-semibold">
                Employment Type
              </label>
              <select
                name="user_emType"
                id="emp type"
                className="rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              >
                <option value="Select Employment Type" selected required>
                  Select Employment Type
                </option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employee">Self-Employed</option>
              </select>
            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="address" className="font-semibold">
                Your Address :
              </label>
              <textarea
                name="user_address"
                id="address"
                cols="20"
                rows="5"
                className="w-8/12 rounded  p-3 uppercase focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Contact Address"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" rounded-md border bg-purple-700 p-2 font-semibold text-white hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-500"
              >
                Request to Contact
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Enquiry;
