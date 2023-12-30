/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("mobileMenu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <>
      <nav className="sticky top-0 z-50 border-b-2 bg-slate-300">
        <div className="container mx-auto items-center p-3 lg:flex lg:rounded-t-xl ">
          <div className="flex">
            <Link to="/">Comapany Logo</Link>

            <button
              onClick={toggleMenu}
              className="ml-auto rounded-md hover:bg-green-300 lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6 "
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/*<-------------Nav-List--------------------->  */}
          <div
            id="mobileMenu"
            className="ml-auto mt-5 hidden lg:mt-0 lg:block "
          >
            <ul className="rounded-lg lg:flex lg:flex-1 lg:rounded ">
              {/* <---Group the parent element> */}
              <li className=" transistion group relative  rounded px-4 py-2 hover:bg-slate-400  ">
                <a className="group-hover:text-slate-50" href="#">
                  Loans For You
                </a>
                {/* <---Hover Group the children element--------> */}
                <ul className="left-0 top-9 w-full rounded text-left group-hover:block lg:absolute lg:hidden lg:w-max lg:bg-slate-400">
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <Link to="/personal-loan">Personal Loans</Link>
                  </li>
                  <li className="px-4  py-1 hover:bg-slate-300">
                    <a href="#">Business Loans</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">MSME Loans</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">Commercial Property Loans</a>
                  </li>
                </ul>
              </li>
              <li className="rounded px-4 py-2 hover:bg-slate-500 ">
                <a className="hover:text-white" href="#">
                  Business We Serve
                </a>
              </li>
              <li className="group relative rounded px-4 py-2 hover:bg-slate-400 ">
                <a className="group-hover:text-slate-50" href="#">
                  Our Story
                </a>
                <ul className="left-0 top-9 rounded text-left group-hover:block lg:absolute lg:hidden lg:w-40 lg:bg-slate-400">
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">Our values</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">Our Teams</a>
                  </li>
                </ul>
              </li>
              <li className="rounded px-4 py-2 hover:bg-slate-500  ">
                <a className="hover:text-white" href="#">
                  Locate Us
                </a>
              </li>
              <li className="group relative rounded px-4 py-2 hover:bg-slate-400   ">
                <a className="group-hover:text-slate-50" href="#">
                  Explore
                </a>
                <ul className="left-0 top-9 rounded text-left group-hover:block lg:absolute lg:hidden lg:w-40 lg:bg-slate-400">
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">Calculator</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="px-4 py-1 hover:bg-slate-300" s>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </li>
              <li className="rounded px-4 py-2 hover:bg-slate-500 ">
                <a className="hover:text-white" href="#">
                  Carrers
                </a>
              </li>
              <li className="ml-2 inline-block rounded border border-black bg-green-100 px-4 py-2 hover:bg-green-400 hover:text-white   ">
                <Link to="/Enquiry">Enquiry</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// eslint-disable-next-line no-lone-blocks
{
  /* <---------------Mobile Menu--------------> */
}
{
  /* <div id="mobileMenu" className="bg-slate-400 ">
          <ul className=" lg:hidden flex flex-col  ">
            <li className="px-4 py-3 relative group">
              <a className="  " href="#">
                Loans For You
              </a>
              <ul className="absolute group-hover:">
                <li>
                  <a href="#">Personal Loans</a>
                </li>
                <li>
                  <a href="#">Business Loans</a>
                </li>
                <li>
                  <a href="#">MSME Loans</a>
                </li>
                <li>
                  <a href="#">Commercial Property Loans</a>
                </li>
              </ul>
            </li>
            <li className="px-4 py-3">
              <a href="#">Business We Serve</a>
            </li>
            <li className="px-4 py-3">
              <a href="#">Our Story</a>
              <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our values</a>
                    </li>
                    <li>
                      <a href="#">Our Teams</a>
                    </li>
                  </ul>
            </li>
            <li className="px-4 py-3">
              <a href="#">Locate Us</a>
            </li>
            <li className="px-4 py-3">
              <a href="#">Explore</a>
              <ul>
                    <li>
                      <a href="#">Calculator</a>
                    </li>
                    <li>
                      <a href="#">Blogs</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
            </li>
            <li className="px-4 py-3">
              <a href="#">Carrers</a>
            </li>
          </ul>
        </div> */
}
