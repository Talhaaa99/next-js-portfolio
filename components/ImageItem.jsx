import Image from "next/image";

const ImageItem = ({ skillImg, skillText }) => {
  return (
    <div className="p-2 shadow-xl rounded-xl hover:scale-102 ease-in duration-300">
      <div className="flex gap-5 items-center  text-black ">
        <div className="">
          <Image
            className="justify-center"
            objectFit="cover"
            src={skillImg}
            width={48}
            height={48}
            alt="/"
          />
        </div>
        <h3 className="hidden md:block text-lg">{skillText}</h3>
      </div>
    </div>
  );
};
export default ImageItem;
