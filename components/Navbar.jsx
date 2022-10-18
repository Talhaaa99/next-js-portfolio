import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineGoogle,
  AiFillPhone,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20  shadow-xl z-[100] bg-slate-100"
          : "fixed w-full h-20 bg-transparent z-[100] "
      }
    >
      <div className="flex justify-end items-center h-full w-full px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-md font-semibold hover:hover:text-[#00ABFF]">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-md font-semibold hover:hover:text-[#00ABFF]">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-md tracking-wide font-semibold hover:hover:text-[#00ABFF]">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-md tracking-wide font-semibold hover:hover:text-[#00ABFF]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-md tracking-wide font-semibold hover:text-[#00ABFF]">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden absolute pl-2 cursor-pointer left-2"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-full w-[75%] sm:w-[60%] md:w-[45%] bg-gray-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-full w-[75%] sm:w-[60%] md:w-[45%] bg-gray-200 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400
                  p-3
                  cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4 ">
              <p className="py-4 w-[85%] md:w-[100%]">
                Let&apos;s build something cool together!
              </p>
            </div>
            <div className="py-6 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={handleNav} className="text-sm py-4">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={handleNav} className="text-sm py-4">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={handleNav} className="text-sm py-4">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={handleNav} className="text-sm py-4">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={handleNav} className="text-sm py-4">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="grid grid-cols items-center justify-between gap-4 w-[500px] mx-auto py-10">
                <Link href="https://www.linkedin.com/in/talha-toufeeq-8207551b4/">
                  <a target="_blank" rel="noreferrer noopener">
                    <div className="flex justify-between items-center rounded-xl shadow-md shadow-gray-300 p-3 hover:scale-105 ease-in duration-200  cursor-pointer bg-[#004b7c] ">
                      <FaLinkedinIn className="text-white" />
                      <p className="text-sm text-white">Talha Toufeeq</p>
                    </div>
                  </a>
                </Link>
                <Link href="https://github.com/Talhaaa99">
                  <a target="_blank" rel="noreferrer noopener">
                    <div className="flex justify-between items-center rounded-xl shadow-md shadow-gray-300 p-3 hover:scale-105 ease-in duration-200  cursor-pointer bg-gray-700 ">
                      <FaGithub className="text-white" />
                      <p className="text-sm text-white">Talhaaa99</p>
                    </div>
                  </a>
                </Link>
                <div className="flex justify-between items-center rounded-xl shadow-md shadow-gray-300 p-3 hover:scale-105 ease-in duration-200  cursor- bg-white  ">
                  <AiOutlineGoogle />
                  <p className="text-sm">talha.toufeeq99@gmail.com</p>
                </div>
                <div className=" rounded-xl shadow-md flex justify-between items-center shadow-gray-300 p-3 hover:scale-105 ease-in duration-200  cursor- bg-white ">
                  <AiFillPhone className="rotate-90" />
                  <p className="text-sm">+91-8971287890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
