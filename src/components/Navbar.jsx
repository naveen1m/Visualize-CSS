import React, { Fragment, useContext, useState } from "react";
import { Hamburger } from "../utils/Burger";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
import SidebarContext from "../context/sidebarcontext";

function Navbar() {
  const {sidebar, setSidebar} = useContext(SidebarContext); 
  const handleClick = ()=>{
    setSidebar(!sidebar);
  }
  return (
    <Fragment>
      <nav className="relative sticky flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Left elements */}
          <div className="flex">
            {/* Brand */}
            <a
              className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                className="mr-2"
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style={{ height: 20 }}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
            <div className="inline-block " onClick={handleClick}>
            {sidebar?<AiOutlineMenuUnfold size={25}/>:<AiOutlineMenuFold size={25}/>}
            </div>
          </div>

          {/* Center elements */}
          {/* Right elements */}

          <ul
            className="list-style-none ml-auto flex flex-row pl-0 md:pl-4"
            data-te-navbar-nav-ref
          >
            <li className="flex items-center ">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                // className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-primary-600    motion-reduce:transition-none "
              >
                Get Started
              </button>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-primary-600   motion-reduce:transition-none "
              >
                About
              </button>
            </li>

            
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
