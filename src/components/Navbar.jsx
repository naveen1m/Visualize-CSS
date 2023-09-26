import React, { Fragment, useContext, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import SidebarContext from "../context/sidebarcontext";
import { Menu } from '@mantine/core';
import Sidebar from "./sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [ sidebar, setSidebar ] = useContext(SidebarContext);
  const handleClick = () => {
    setSidebar(!sidebar);
  }
  const location = useLocation();
  return (
    <Fragment>
      <nav className="relative h-11 flex w-full flex-row items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Left elements */}
          <div className="flex">
            {/* Brand */}
            <a
              className="mx-2 my-5 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="/"
            >
              <img
                className="mr-2 bg-black rounded-full overflow-hidden object-cover w-full h-8"
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                // style={{ height: 50 }}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
            {location.pathname!="/" ? sidebar ? 
              <div className=" p-1 text-black font-extrabold flex flex-col items-center justify-center  hover:bg-blue-200 rounded cursor-pointer  " onClick={handleClick}>
                <AiOutlineMenuUnfold size={25} /> 
              </div>
              : 
              <div className=" p-1 text-black font-extrabold flex flex-col items-center justify-center  hover:bg-blue-200 rounded cursor-pointer  " onClick={handleClick}>
                <AiOutlineMenuFold size={25} />
            </div> : ""}
          </div>

          {/* Center elements */}
          {/* Right elements */}

          <ul
            className="list-style-none ml-auto z-50 flex flex-row pl-0 md:pl-4"
            data-te-navbar-nav-ref
          >
            <li className="flex items-center  ">
              {location.pathname!="/" ? "" :
                <Menu trigger="hover" openDelay={100} closeDelay={400} offset={5} withArrow arrowPosition="center" arrowRadius={0} arrowSize={10} shadow="md" loop={true}

                >
                  <Menu.Target>
                    <Link to='/getstarted'>
                      <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="mr-3 min-w-fit   rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-primary-600    motion-reduce:transition-none hover:z-50 relative "

                      >
                        Get Started &#9660;
                      </button>
                    </Link>
                  </Menu.Target>

                  <Menu.Dropdown className="z-50" >

                    <Sidebar />


                  </Menu.Dropdown>
                </Menu>

              }
              <Link to='/about'>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white hover:bg-primary-600   motion-reduce:transition-none "

                >
                  About
                </button>
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
