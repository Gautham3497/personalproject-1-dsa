import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import person from "../Assets/Person.jpg";

const About_us = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className="bg-cyan-300">
          <p className="  container mx-auto  text-center text-4xl leading-loose tracking-wide ">
            For almost 2 years now, we’ve been provinding the Best Financial
            Solutions to our Clients.
          </p>
        </div>

        <section className="py-10 md:pb-20 md:pt-10">
          <div className="container mx-auto">
            <h1 className="mb-5 text-center text-3xl font-semibold">
              Our Team
            </h1>
            <div className="grid gap-8 px-5 md:px-0 lg:grid-cols-4">
              <div className="overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <img src={person} alt="Person1" className="mb-3" />
                <h2 className="text-center font-semibold">AAAAAAA</h2>
                <h2 className="mb-5 text-center font-semibold">
                  Founder | Principal Consultant
                </h2>
              </div>
              <div className="overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <img src={person} alt="Person2" className="mb-3" />
                <h2 className="text-center font-semibold">AAAAAAA</h2>
                <h2 className="mb-5 text-center font-semibold">
                  Founder | Principal Consultant
                </h2>
              </div>
              <div className="overflow-hidden rounded-lg border bg-slate-200 shadow-xl">
                <img src={person} alt="Person3" className="mb-3" />
                <h2 className="text-center font-semibold">AAAAAAA</h2>
                <h2 className="mb-5 text-center font-semibold">
                  Founder | Principal Consultant
                </h2>
              </div>
              <div className="">
                <div className="relative  overflow-hidden rounded-t-lg">
                  <input
                    type="checkbox"
                    id="collapse-menu"
                    className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
                  />
                  <div className="flex h-12 w-full items-center bg-gray-500 p-3 text-white">
                    <h1 className="font-semibold">Our Company Mission</h1>
                  </div>
                  <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className=" h-0 overflow-hidden bg-gray-300 transition duration-500  ease-in-out peer-checked:h-full ">
                    <div className="p-3">
                      <p className="indent-10 first-letter:font-bold first-letter:text-slate-900">
                        We have a mission to help everyone with best of our
                        services. To do this, we established a culture that
                        support our team members, so they can provide
                        exceptional services to all our customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden  border-t">
                  <input
                    type="checkbox"
                    id="collapse-menu"
                    className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
                  />
                  <div className="flex h-12 w-full items-center bg-gray-500 p-3">
                    <h1 className="font-semibold text-white">Our Promise</h1>
                  </div>
                  <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className=" h-0 overflow-hidden bg-gray-300 transition duration-500  ease-in-out peer-checked:h-full ">
                    <div className="p-3">
                      <p className="indent-10">
                        We promise more choices that are good for you and your
                        wallet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-b-lg border-t">
                  <input
                    type="checkbox"
                    id="collapse-menu"
                    className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
                  />
                  <div className="flex h-12 w-full items-center bg-gray-500 p-3">
                    <h1 className="font-semibold text-white">Our Service</h1>
                  </div>
                  <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className=" h-0 overflow-hidden  bg-gray-300 transition duration-500  ease-in-out peer-checked:h-full ">
                    <div className="p-3 ">
                      <p className="indent-10">
                        Our goal is to provide financial consultancy to our
                        clients while providing them with the lowest interest
                        rates and closing costs possible. Furthermore, we pledge
                        to help borrowers overcome roadblocks that can arise
                        while securing a loan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default About_us;

/* <section className=" flex flex-col justify-center  bg-gray-600 p-5">
          <div className="relative w-[230px] overflow-hidden rounded-t-lg">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
            />
            <div className="flex h-12 w-full items-center bg-blue-400 p-3">
              <h1>What is Collapse Menu ?</h1>
            </div>
            <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className=" h-0 overflow-hidden bg-white transition duration-500  ease-in-out peer-checked:h-full ">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  adipisci impedit modi. Sequi modi ex necessitatibus impedit
                  repudiandae accusamus dolore sed minima et aspernatur aliquam
                  expedita nemo maiores aut iste non officiis molestias,
                  voluptate iusto, unde est? Eveniet, omnis qui.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[230px] overflow-hidden ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
            />
            <div className="flex h-12 w-full items-center bg-blue-400 p-3">
              <h1>What is Collapse Menu ?</h1>
            </div>
            <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className=" h-0 overflow-hidden bg-white transition duration-500  ease-in-out peer-checked:h-full ">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  adipisci impedit modi. Sequi modi ex necessitatibus impedit
                  repudiandae accusamus dolore sed minima et aspernatur aliquam
                  expedita nemo maiores aut iste non officiis molestias,
                  voluptate iusto, unde est? Eveniet, omnis qui.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[230px] overflow-hidden">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
            />
            <div className="flex h-12 w-full items-center bg-blue-400 p-3">
              <h1>What is Collapse Menu ?</h1>
            </div>
            <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className=" h-0 overflow-hidden bg-white transition duration-500  ease-in-out peer-checked:h-full ">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  adipisci impedit modi. Sequi modi ex necessitatibus impedit
                  repudiandae accusamus dolore sed minima et aspernatur aliquam
                  expedita nemo maiores aut iste non officiis molestias,
                  voluptate iusto, unde est? Eveniet, omnis qui.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[230px] overflow-hidden rounded-b-lg">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer appearance-none"
            />
            <div className="flex h-12 w-full items-center bg-blue-400 p-3">
              <h1>What is Collapse Menu ?</h1>
            </div>
            <div className="absolute right-4 top-3 rotate-0 transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className=" h-0 overflow-hidden bg-white transition duration-500  ease-in-out peer-checked:h-full ">
              <div className="p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  adipisci impedit modi. Sequi modi ex necessitatibus impedit
                  repudiandae accusamus dolore sed minima et aspernatur aliquam
                  expedita nemo maiores aut iste non officiis molestias,
                  voluptate iusto, unde est? Eveniet, omnis qui.
                </p>
              </div>
            </div>
          </div>
        </section> */
