import React from "react";
import "../Components/Header.css";
// import logo from "../Assets/Logo 1.png";

const Header = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    // <-----------------Header------------------------->
    // <header>
    //   <div className="bg-slate-300 ">
    //     <div className="lg:container mx-auto ">
    //       <div className=" hidden lg:flex p-4 justify-center ">
    //         <p className="flex justify-center gap-3 ">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             class="w-6 h-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    //             />
    //           </svg>
    //           <a href="#" className="font-semibold text-animation">
    //             +91 0000000000-For New Loans
    //           </a>
    //         </p>
    //         <button className="ml-auto font-semibold text-stone-700  hover:text-stone-500">
    //           Blogs
    //         </button>
    //       </div>
    //     </div>
    //     {/* <div className=" bg-sky-600 text-white font-semibold ">
    //       <div className="lg:container mx-auto ">
    //         <div className="flex justify-center p-4 lg:p-5 ">
    //           <----------#Brand Logo Section------------------------->
    //           <div className="">
    //             <a href="#">
    //               <img className="rounded-lg block " src={logo} alt="" />
    //             </a>
    //           </div>
    //           <-----------------Unordered List Items--------------------
    //           <div className="ml-auto my-auto">
    //             <button
    //               onClick={toggleMenu}
    //               className=" lg:hidden hover:text-black hover:bg-slate-300 rounded-sm"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 class="w-6 h-6"
    //               >
    //                 <path
    //                   fill-rule="evenodd"
    //                   d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
    //                   clip-rule="evenodd"
    //                 />
    //               </svg>
    //             </button>
    //             <div>
    //               <ul className=" hidden lg:flex  ">
    //                 <li className=" px-4 py-2   ">
    //                   <a className="flex " href="#">
    //                     Home Loan Products
    //                     <span>
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="none"
    //                         viewBox="0 0 24 24"
    //                         stroke-width="1.5"
    //                         stroke="currentColor"
    //                         class="w-6 h-6 ml-1"
    //                       >
    //                         <path
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                         />
    //                       </svg>
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li className=" px-4 py-2 flex">
    //                   <a className=" flex" href="#">
    //                     CheckList&Calculators
    //                     <span>
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="none"
    //                         viewBox="0 0 24 24"
    //                         stroke-width="1.5"
    //                         stroke="currentColor"
    //                         class="w-6 h-6 ml-1"
    //                       >
    //                         <path
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                         />
    //                       </svg>
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li className=" px-4 py-2 flex">
    //                   <a className=" flex" href="#">
    //                     Banking Products
    //                     <span>
    //                       <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         fill="none"
    //                         viewBox="0 0 24 24"
    //                         stroke-width="1.5"
    //                         stroke="currentColor"
    //                         class="w-6 h-6 ml-1"
    //                       >
    //                         <path
    //                           stroke-linecap="round"
    //                           stroke-linejoin="round"
    //                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                         />
    //                       </svg>
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li className=" px-4 py-2">
    //                   <a className=" " href="#">
    //                     Deposits
    //                   </a>
    //                 </li>
    //                 <li className="  ">
    //                   <button
    //                     className="px-3 py-2 bg-slate-600 rounded-md hover:bg-slate-200 hover:text-slate-900  "
    //                     type="button"
    //                   >
    //                     Login
    //                   </button>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <--------------Mobile Menu------------->
    //       <div id="menu" className=" flex flex-col items-end">
    //         <ul className="lg:hidden">
    //           <li className=" px-4 py-2   ">
    //             <a className="flex " href="#">
    //               Home Loan Products
    //               <span>
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke-width="1.5"
    //                   stroke="currentColor"
    //                   class="w-6 h-6 ml-1"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </a>
    //           </li>
    //           <li className=" px-4 py-2 flex">
    //             <a className=" flex" href="#">
    //               CheckList&Calculators
    //               <span>
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke-width="1.5"
    //                   stroke="currentColor"
    //                   class="w-6 h-6 ml-1"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </a>
    //           </li>
    //           <li className=" px-4 py-2 flex">
    //             <a className=" flex" href="#">
    //               Banking Products
    //               <span>
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   stroke-width="1.5"
    //                   stroke="currentColor"
    //                   class="w-6 h-6 ml-1"
    //                 >
    //                   <path
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </a>
    //           </li>
    //           <li className=" px-4 py-2">
    //             <a className=" " href="#">
    //               Deposits
    //             </a>
    //           </li>
    //           <li className="  px-4 py-2  ">
    //             <button
    //               className="px-3 py-2 bg-slate-600 rounded-md hover:bg-slate-200 hover:text-slate-900  "
    //               type="button"
    //             >
    //               Login
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div> */}
    //   </div>
    // </header>
  );
};

export default Header;
