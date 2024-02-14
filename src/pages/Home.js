/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import stock from "../assets/Stock-Img.jpg";
import loan from "../assets/Loan-Img.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLandmark,
  faPeopleLine,
  faFileSignature,
  faLaptopFile,
  faComments,
  faPaste,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
// import Enquiry_Form from "./Enquiry_Form";

const Home = () => {
  return (
    <>
      <main className=" font-serif">
        <Navbar />
        <section className="bg-gradient-to-l from-[#EF2670] via-rose-400   to-pink-300 px-5 py-8 lg:px-0 lg:py-16">
          <div className="container mx-auto flex  p-3">
            <div className="hidden max-w-full object-cover lg:block ">
              <img className="h-full" src={stock} alt="Bank-Stock" />
            </div>
            <div className="w-full rounded-lg bg-green-200 p-10 lg:rounded-none lg:p-16">
              <h1 className="text-3xl">At a Glance</h1>
              <p className="pt-5 indent-16  text-lg">
                SPF has been formed to primarily addressed the Personal finance
                needs of self employed , Low and Middle Income families
                primarily from semi urban and rural areas.Despites the vibrant
                growth of the personal finance sector especially over the past
                few years.
              </p>
            </div>
          </div>
        </section>

        <section className=" bg-slate-300 px-5 py-8 lg:px-0 lg:py-12 ">
          <div className=" container mx-auto ">
            <h1 className="mb-5 text-4xl font-extrabold lg:mb-10">
              OUR PRODUCTS
            </h1>
            <div className="flex flex-col gap-5 md:flex-row lg:justify-between lg:gap-10 ">
              <div className="group flex-1 rounded-lg border  bg-white p-5 shadow-lg hover:bg-slate-500  hover:text-white lg:p-10 ">
                <FontAwesomeIcon
                  icon={faHouse}
                  className="mb-5 h-8 w-8 text-green-500"
                />
                <h1 className="mb-3 font-bold">Home Loan</h1>
                <p>SPF offers loans for</p>
                <ul className="mb-4 list-disc px-9 marker:text-lg  marker:text-green-300">
                  <li className="">Home Construction</li>
                  <li>Home Purchase</li>
                  <li>Home Renovation</li>
                  <li>Home Extension</li>
                </ul>
                <a className="text-gray-400 underline group-hover:text-green-300">
                  Read more
                </a>
              </div>
              <div className="group flex-1 rounded-lg border  bg-white p-5 shadow-lg hover:bg-slate-500  hover:text-white lg:p-10">
                <FontAwesomeIcon
                  icon={faLandmark}
                  className="mb-5 h-8 w-8 text-green-500"
                />
                <h1 className="mb-3 font-bold">Loan against Property (LAP)</h1>

                <ul className="mb-24 list-disc px-9 marker:text-lg marker:text-green-300">
                  <li className="">LAP for Construction</li>
                  <li>LAP Purchase</li>
                </ul>
                <a className="text-gray-400 underline group-hover:text-green-300">
                  Read more
                </a>
              </div>
              <div className="group flex-1 rounded-lg border  bg-white p-5 shadow-lg hover:bg-slate-500  hover:text-white lg:p-10">
                <FontAwesomeIcon
                  icon={faPeopleLine}
                  className="mb-5 h-8 w-8 text-green-500"
                />
                <h1 className="mb-3 font-bold">Insurance</h1>
                <p className="mb-20">
                  SPF is currently offering products pertinent to housing
                  finance viz credit sheild insurance & property insurance
                </p>

                <a
                  href="#"
                  className="text-gray-400 underline group-hover:text-green-300"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border border-black bg-slate-300">
          <div className="container mx-auto flex  justify-between">
            <div className="">
              <h1>EMI Calculator</h1>
            </div>
            <div className="">
              <h1>
                Request for free <br />
                call back
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-slate-300 px-6 py-10 lg:px-0 lg:py-20">
          <div className="container mx-auto ">
            <h1 className="mb-10 text-center text-2xl font-extrabold">
              HOW IT WORKS
            </h1>
            <div className="flex flex-col gap-3 rounded-xl border  bg-white p-14 shadow-xl lg:flex-row">
              {/* --------------Outer Div----------- */}
              <div className="flex-1 border p-5 text-center lg:border-none">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faFileSignature}
                    className="h-10 w-10 rounded-full bg-green-300 p-5 "
                  />
                </div>
                <h2 className="mt-2 font-bold uppercase">Compare Online</h2>
                <p className="mt-2 text-center text-sm">
                  Comparison of loan offers from all major Banks and NBFC's{" "}
                </p>
              </div>
              <div className="flex-1 border p-5 text-center lg:border-none">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faLaptopFile}
                    className="h-10 w-10 rounded-full  bg-green-300 p-5 "
                  />
                </div>
                <h2 className="mt-2 font-bold uppercase">Apply Online</h2>
                <p className="mt-2 text-center text-sm">
                  Choose suitable Loans offers using our smart search features
                  and apply
                </p>
              </div>
              <div className="flex-1 border p-5 text-center lg:border-none">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="h-10 w-10 rounded-full   bg-green-300 p-5 "
                  />
                </div>
                <h2 className="mt-2 font-bold uppercase">Get Advice</h2>
                <p className="mt-2 text-center text-sm">
                  Advisory service from SPF to find best suitable loan offers
                  suggest to you
                </p>
              </div>
              <div className="flex-1 border p-5 text-center lg:border-none">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faPaste}
                    className="h-10 w-10 rounded-full   bg-green-300 p-5 "
                  />
                </div>
                <h2 className="mt-2 font-bold uppercase">Paperwork Help </h2>
                <p className="mt-2 text-center text-sm">
                  Documentation Assistance and application loan
                </p>
              </div>
              <div className="flex-1 border p-5 text-center lg:border-none">
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    className="h-10 w-10 rounded-full bg-green-300 p-5 "
                  />
                </div>
                <h2 className="mt-2 font-bold uppercase">Loan Disbursal </h2>
                <p className="mt-2 text-center text-sm">
                  Signing of loan agreement and coordinating fund transfer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-16">
          <div className="container mx-auto">
            <h2 className="text-center text-xl font-bold">WHY US</h2>
            <div className="flex flex-col p-5 lg:flex-row">
              <div className="object-cover sm:hidden lg:block">
                <img
                  className=" h-full max-w-full"
                  src={loan}
                  alt="Loan Image"
                />
              </div>
              <div className="w-full bg-green-200 p-5  text-justify  ">
                <p className="indent-10 ">
                  At Real Value, we have kept in pace with our ever-increasing
                  growth. Our growth is mainly fueled by our deep understanding
                  of client needs and banking products, along with our unbiased
                  effort to bring a win-win deal both for the client as well as
                  the bank. Clients always appreciate our best-in-class service
                  and professional interactions, along with the use of latest
                  technology to keep clients updated on the progress of their
                  transaction.While the numbers tell their own story, we take
                  pride in having achieved these by serving the varied needs of
                  thousands of customers spread over diverse geographies. This
                  experience stands us in good stead whenever our customers have
                  specific needs in terms of guidance, processes, possibilities,
                  and of course, loans.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
