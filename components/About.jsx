import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="z-40 absolute -bottom-[970px] left-[200px] ">
        <Image src="/assets/Pill.png" width={200} height={200} quality={100} />
      </div>
      <div className="z-40 absolute -bottom-[250px] -right-[80px] ">
        <Image src="/assets/Pill.png" width={220} height={220} quality={100} />
      </div>
      <div className="z-40 absolute -bottom-[310px] right-[590px] ">
        <Image src="/assets/Pill.png" width={100} height={100} quality={100} />
      </div>
      <div className="z-40 absolute -bottom-[780px] right-[250px] ">
        <Image src="/assets/Pill.png" width={130} height={130} quality={100} />
      </div>
      <div className="z-[-40] absolute -bottom-[1400px]">
        <Image src="/assets/Line.png" width={1600} height={742} />
      </div>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 justify-center gap-8">
        <div>
          <h2 className="py-2 text-gray-700">Who am I?</h2>
          <p className="py-2 pb-6 tracking-wide text-gray-700 text-lg">
            Self-taught front-end developer proficient with HTML, CSS,
            Javascript and Reactjs. Highly deft at building independant and
            collaborative projects with a focus on client-side development with
            clean, easy to use UI.
          </p>
          <Button className="" gradientDuoTone="purpleToBlue">
            <Link href="/#projects">Check out ✨ my work ✨</Link>
          </Button>
        </div>
        <div className="w-auto h-auto m-auto shadow-xl shadow-grey-300 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/Subject2.png"
            alt="/"
            height={500}
            width={350}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
