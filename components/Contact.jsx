import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillPhone, AiOutlineGoogle, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-[500px] md:w-full overflow-hidden">
      <div className="z-[-40] absolute rotate-[360deg] left-[40px] -bottom-[3350px] ">
        <Image src="/assets/SuperToroid-1.png" width={300} height={270} />
      </div>
      <div className=" px-2 py-16 w-full items-center">
        <h2 className="p-2 px-4 text-gray-700">Contact me</h2>
        <div className="w-full h-full shadow-sm shadow-gray-400 rounded-xl p-4">
          <p className="px-1">
            I&apos;m available for full-time positions. Let&apos;s talk.
          </p>
          <div className="grid grid-cols-2 items-center justify-between gap-4 w-full mx-auto py-4">
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
  );
};

export default Contact;
