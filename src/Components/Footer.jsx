import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className=" bg-slate-700 ">
        <div className="container mx-auto px-2 py-4 lg:py-8  ">
          <div className="flex flex-wrap justify-center gap-8 border-b pl-5 sm:pl-0  lg:justify-between lg:gap-10   ">
            <div className=" basis-56 lg:flex-1 lg:basis-36">
              <h1 className="text-lg text-gray-200 ">Tools for you</h1>
              <ul className="text-gray-400">
                <li className="py-3 ">
                  <a className=" hover:text-gray-300" href="#">
                    Calculator
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    FAQs
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Blogs
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Carrers
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-56 lg:flex-1  lg:basis-36">
              <h1 className="text-lg text-gray-200">Regulatory</h1>
              <ul className="text-gray-400">
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    eNACH Cancellation
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    SMA & NPA
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    eNACH Registration
                  </a>
                </li>
                <li className="sm:py-3 md:py-0">
                  <a className=" hover:text-gray-300" href="#">
                    Emergency Credit Line Scheme (ECLGS)
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-56 lg:flex-1  lg:basis-36">
              <h1 className="text-lg text-gray-200">Our Story</h1>
              <ul className="text-gray-400">
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    About Us
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Our Values
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Our Teams
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business We Serve
                  </a>
                </li>
              </ul>
            </div>
            <div className=" basis-56 lg:flex-1  lg:basis-36">
              <h1 className="text-lg text-gray-200">Loans For You</h1>
              <ul className="text-gray-400">
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business Loans
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Working Capital Loans
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    MSME Loans
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Commercial Property Loans
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-56 lg:flex-1  lg:basis-36">
              <h1 className="text-lg text-gray-200">Locate Us</h1>
              <ul className="text-gray-400">
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business Loan in Chennai
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business Loan in Coimbatore
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business Loan in Trichy
                  </a>
                </li>
                <li className="py-3">
                  <a className=" hover:text-gray-300" href="#">
                    Business Loan in Madurai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className=" py-5 text-sm text-gray-400">
              Beware of spam emails/calls/sms by fraudsters in the name of SP
              Finnacle Private Limited offering loans at concessional rate or at
              very low rate. SPF Sanctions loans only through its registered
              branches/offices .We request you to avoid responding to such
              emails/calls/sms. Kindly visit our website www.spf.in to learn
              more about our products, services and terms, before sharing any of
              your details with anyone or making any payments. In case any
              query/instances, please write to us at wecare@spf.in
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 text-gray-400">
        <div className="container mx-auto p-2 md:p-3 ">
          <p className="border-b p-5 text-center text-sm md:text-lg">
            Group Websites : | www.spfinnacle.com |
          </p>
          <div className="flex items-center justify-between border-b p-2 text-sm md:text-lg">
            <p>Follow us on :</p>
            <div>
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faTwitter}
              />
            </div>
          </div>
          <p className="p-5 text-center text-sm md:text-lg">
            &copy;2023 SPF | All rights reserved | Disclaimer & Privacy Policy
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
