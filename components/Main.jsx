import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGoogle,
  AiFillPhone,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-[720px] lg:h-screen text-center">
      <div className="z-[-40] absolute rotate-[360deg] -right-[100px] -top-[80px] ">
        <Image src="/assets/SuperToroid-1.png" width={364} height={322} />
      </div>
      <div className="z-[-40] absolute rotate-[340deg] -bottom-10 left-[60px] ">
        <Image src="/assets/SuperToroid-2.png" width={230} height={230} />
      </div>
      <div className="z-[-40] absolute -left-[540px] -bottom-[90px]">
        <Image src="/assets/Line.png" width={1500} height={742} />
      </div>
      <div className="max-w-[1240px] mx-auto p-2 h-full w-full flex justify-center items-center z-[30]">
        <div>
          <p className="uppercase tracking-widest py-2 text-gray-500 ">
            Let&apos;s build cool stuff together
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tl from-cyan-400 to-purple-600">
              Talha
            </span>
            ,
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="tracking-widest text-gray-600 max-w-[70%] mx-auto py-2">
            I&apos;m an automobile engineer turned self taught dev. I love
            building beautiful digital experiences. I primarily focus on
            building responsive front-end applications, while learning
            blockchain/web3 technologies.
          </p>
          <div>
            <div className="grid grid-cols-2 items-center justify-between gap-4 w-[500px] mx-auto py-4">
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
  );
};
export default Main;
