import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="50"
        />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-gray-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-gray-200 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navLogo.png"
                alt=""
                width="87"
                height="35"
              />
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
                Let's build something cool together!
              </p>
            </div>
            <div className="py-6 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="text-sm py-4">Home</li>
                </Link>
                <Link href="/">
                  <li className="text-sm py-4">About</li>
                </Link>
                <Link href="/">
                  <li className="text-sm py-4">Skills</li>
                </Link>
                <Link href="/">
                  <li className="text-sm py-4">Projects</li>
                </Link>
                <Link href="/">
                  <li className="text-sm py-4">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-purple-700 text-lg pb-4 ml-2">
                  Connect with me
                </p>
                <div className="flex items-center justify-between w-full sm:w-[80%] my-4">
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 ease-in duration-200 hover:scale-105 cursor-pointer ">
                    <FaLinkedinIn />
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 ease-in duration-200 hover:scale-105 cursor-pointer ">
                    <FaGithub />
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 ease-in duration-200 hover:scale-105 cursor-pointer ">
                    <AiOutlineMail />
                  </div>
                  <div className=" rounded-full shadow-lg shadow-gray-400 p-3 ease-in duration-200 hover:scale-105 cursor-pointer ">
                    <BsFillPersonLinesFill />
                  </div>
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
