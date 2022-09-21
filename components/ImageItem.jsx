import Image from "next/image";

const ImageItem = ({ skillImg, skillText }) => {
  return (
    <div className="p-2 shadow-xl rounded-xl hover:scale-102 ease-in duration-300">
      <div className="flex flex-row gap-5 items-center text-black ">
        <div className="">
          <Image src={skillImg} width="48px" height="48px" alt="/" />
        </div>
        <h3 className="text-lg">{skillText}</h3>
      </div>
    </div>
  );
};
export default ImageItem;
