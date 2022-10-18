import Image from "next/image";
import React from "react";
import ImageItem from "./ImageItem";

const Skills = () => {
  return (
    <div id="skills" className="w-[480px] md:w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="p-4 text-gray-700 pb-6">Languages I speak:</h2>

        <div className="gap-3 md:gap-5 grid grid-cols-3 pl-2 items-center justify-center text-black ">
          <ImageItem skillImg={"/assets/skills/html.png"} skillText={"HTML"} />
          <ImageItem skillImg={"/assets/skills/css.png"} skillText={"CSS"} />
          <ImageItem
            skillImg={"/assets/skills/javascript.png"}
            skillText={"Javascript"}
          />
          <ImageItem
            skillImg={"/assets/skills/react.png"}
            skillText={"React"}
          />
          <ImageItem
            skillImg={"/assets/skills/tailwind.png"}
            skillText={"Tailwind"}
          />
          <ImageItem
            skillImg={"/assets/skills/github1.png"}
            skillText={"Github"}
          />
          <ImageItem
            skillImg={"/assets/skills/Solidity.png"}
            skillText={"Solidity"}
          />
          <ImageItem
            skillImg={"/assets/skills/Hardhat.png"}
            skillText={"Hardhat"}
          />
          <ImageItem
            skillImg={"/assets/skills/nextjs_icon.png"}
            skillText={"Nextjs"}
          />
        </div>
        {/*    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-2 shadow-xl rounded-xl hover:scale-102 ease-in duration-300 bg-slate-500">
            <div className="flex flex-row gap-6 items-center text-black bg-blue-400">
              <div className="">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="48px"
                  height="48px"
                  alt="/"
                />
              </div>
              <h3 className="text-xl">HTML</h3>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/Solidity.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/Hardhat.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Hardhat</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs_icon.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
