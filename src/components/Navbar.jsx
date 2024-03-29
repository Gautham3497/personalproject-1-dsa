/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import main_logo from "../assets/2.png";
import { TfiMenu } from "react-icons/tfi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { loanItems, exploreItems } from "../constants/menus.js";

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
    <nav className="sticky top-0 z-50 bg-gradient-to-l from-[#EF2670] via-rose-400 to-pink-300   *:font-montserrat *:transition-all *:duration-500 xl:border-b-[1px]">
      <div className="mx-auto  my-auto w-[94%]  items-center p-3 xl:flex  ">
        <div className="flex items-center ">
          {/* ----------Logo Section---------> */}
          <Link className="flex items-center " to="/">
            <img className="h-16 w-16" src={main_logo} alt="main-logo" />
            <span className="font-poppins text-2xl font-semibold text-white">
              Finnacle
            </span>
          </Link>
          {/*----------------- Menu Icon--------------- */}
          <button
            onClick={toggleMenu}
            className="ml-auto mr-4  hover:text-white xl:hidden "
          >
            <TfiMenu className="text-2xl" />
          </button>
        </div>

        {/*<-------------Nav-List--------------------->  */}
        <div
          id="mobileMenu"
          className="ml-auto mt-5 hidden border-t-[1px] xl:mt-0 xl:block xl:border-none"
        >
          <ul className="*:transistion-all my-auto flex h-fit flex-col items-center gap-4  space-y-2 font-medium tracking-wide *:cursor-pointer *:whitespace-nowrap   *:text-lg *:text-white  *:duration-500 xl:flex-row xl:space-y-0 xl:tracking-wider">
            <li className="mt-2  xl:mt-0">
              <Menu as="div" className="relative text-left">
                <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1  px-3 py-2  tracking-wide text-white  hover:opacity-50 xl:tracking-wider ">
                    Loans for you
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute -left-16 z-10 mt-2 w-72 origin-bottom   divide-y divide-gray-100    rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform focus:outline-none">
                    <div className="flex flex-col  py-1 ">
                      {loanItems.map((subLoanItems) => (
                        <Menu.Item
                          as={Fragment}
                          className=" rounded-md px-4 py-2"
                        >
                          {({ active }) => (
                            <Link
                              to={subLoanItems.path}
                              className={`${
                                active
                                  ? "bg-[#EF2670] text-white"
                                  : "text-[#2B75BC]"
                              }`}
                            >
                              {subLoanItems.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="gap-x-1  px-3 py-2 ">
              <Link to="/about-us" className="hover:opacity-50">
                About Us
              </Link>
            </li>
            <li className="gap-x-1  px-3 py-2 ">
              <Link to="/services" className="hover:opacity-50">
                Services
              </Link>
            </li>
            <li className="gap-x-1  px-3 py-2 ">
              <Link to="/products" className="hover:opacity-50">
                Products
              </Link>
            </li>

            <li>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1  px-3 py-2  tracking-wide text-white   hover:opacity-50 xl:tracking-wider ">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute -left-12 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none xl:left-0">
                    <div className=" flex flex-col py-1">
                      {exploreItems.map((subExploreItems) => (
                        <Menu.Item
                          as={Fragment}
                          className=" rounded-md px-4 py-2"
                        >
                          {({ active }) => (
                            <Link
                              to={subExploreItems.path}
                              className={`${
                                active
                                  ? "bg-[#EF2670] text-white"
                                  : "text-[#2B75BC]"
                              }`}
                            >
                              {subExploreItems.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>

            <li className="inline-block cursor-pointer rounded-full border  bg-[#2B75BC] px-7  py-2  hover:bg-[#EF2670]  xl:mt-0 ">
              <Link className=" text-white" to="/enquiry-form">
                Enquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
