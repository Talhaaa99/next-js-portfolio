import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  gitUrl,
  stack,
}) => {
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-xl hover:shadow-xl hover:scale-105 ease-in-out duration-300">
      <div className="space-y-4">
        <div className="space-y-2">
          <Image
            src={backgroundImg}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {title}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-400">
            {tech}
            <br></br>
            {stack}
          </p>
        </div>
        <div className="flex space-x-3">
          <Link href={projectUrl}>
            <a target="_blank" rel="noreferrer noopener">
              <Button gradientDuoTone="purpleToBlue">Live</Button>
            </a>
          </Link>
          <Link href={gitUrl}>
            <a target="_blank" rel="noreferrer noopener">
              <Button gradientDuoTone="purpleToBlue">Github Repo</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

/* "electric-purple": "#A202FF",
      denim: "#2072B2",
      skyblue: "#00ABFF",
      aqua: "#00E8FF", */
