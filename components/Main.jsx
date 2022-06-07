import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] mx-auto p-2 h-full w-full flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest py-2 text-gray-500 ">
            Let's build cool stuff together
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I'm <span className="text-blue-600">Talha</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="tracking-widest text-gray-600 max-w-[70%] mx-auto py-2">
            I'm a front-end developer specialising in building beautiful digital
            experiences. Primalrily focused on building responsive front-end
            applications, while learning blockchain/web3 technologies
          </p>
          <div>
            <div className="flex items-center justify-between w-[330px] mx-auto py-4">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-200  cursor-pointer ">
                <FaLinkedinIn />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-200  cursor-pointer ">
                <FaGithub />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-200  cursor-pointer ">
                <AiOutlineMail />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-200  cursor-pointer ">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
