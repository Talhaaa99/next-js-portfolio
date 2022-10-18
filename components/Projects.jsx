import React from "react";
import ProjectItem from "./ProjectItem";
import routerImg from "../public/assets/router.png";
import cryptoImg from "../public/assets/Cryptomarket.png";
import spotifyImg from "../public/assets/SpotifyClone.png";
import hackerImg from "../public/assets/HackerNews.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="w-[480px] md:max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="p-4 text-gray-700">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 justify-center align-center gap-8">
          <ProjectItem
            title="Router Explorer"
            backgroundImg={routerImg}
            projectUrl="https://router-explorer.vercel.app/"
            tech="A reimagined explorer page for Router Protocol during the UNFOLD
            2022 48 hour Hackathon."
            stack=" Stack: Nextjs, Tailwind CSS"
            gitUrl="https://github.com/Talhaaa99/router-explorer"
          />
          <ProjectItem
            title="Spotify Clone"
            backgroundImg={spotifyImg}
            projectUrl="https://spotify-clone-git-main-talhaaa99.vercel.app/"
            tech="
            Functional Spotify clone. Fetch, play and search for user’s songs on Spotify and play/like selected songs."
            stack="Stack: Nextjs, Tailwind CSS, Spotify Web API, Recoil, NextAuth"
            gitUrl="https://github.com/Talhaaa99/spotify-clone"
          />
          <ProjectItem
            title="Crypto Marketplace"
            backgroundImg={cryptoImg}
            projectUrl="https://cryptomarket-47313.web.app/"
            tech="Analyse and view crypto charts, prices, and trending coins. Create an account and save your favorite coins to a wishlist. Features Light/Dark mode"
            stack="Stack: React, Tailwind CSS, Coin Gecko API, Firebase"
            gitUrl="https://github.com/Talhaaa99/cryptomarket"
          />
          <ProjectItem
            title="Hacker News Search"
            backgroundImg={hackerImg}
            projectUrl="https://hybr1d-assignment.vercel.app/"
            tech="Hacker News Search, using recursive code to display children comments"
            stack={"Stack: React, Tailwind CSS, SearchAPI"}
            gitUrl="https://github.com/Talhaaa99/hybr1d-assignment"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
