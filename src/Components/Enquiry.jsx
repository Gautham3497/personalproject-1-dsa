import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Enquiry = () => {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto  p-3  md:flex">
        <div className="md:w-1/2 "></div>
        <div className=" flex flex-col rounded-xl border border-black bg-purple-200  p-5  md:w-1/2">
          <div className="mb-3 flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              className=" w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder=" Full Name"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="num" className="font-semibold">
              Mobile Number
            </label>
            <input
              type="tel"
              name="number"
              id="num"
              className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="10 Digit Number"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="mail" className="font-semibold">
              Email Id
            </label>
            <input
              type="email"
              name="mail"
              id="mail"
              className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="city" className="font-semibold">
              City
            </label>
            <input
              type="text"
              name=""
              id="city"
              className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="City Name"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="pin" className="font-semibold">
              Pin Code
            </label>
            <input
              type="text"
              name=""
              id="pin"
              className="w-1/2 rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder=" Pin Code"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="emp type" className="font-semibold">
              Employment Type
            </label>
            <select
              name=""
              id="emp type"
              className="rounded border p-2 focus:outline-none focus:ring focus:ring-purple-500"
            >
              <option value="Select Employment Type" selected>
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
              name="address"
              id="address"
              cols="20"
              rows="5"
              className="w-8/12 rounded  p-3 focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Contact Address"
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Enquiry;
