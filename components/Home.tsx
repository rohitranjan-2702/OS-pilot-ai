"use client";
import React from "react";
import { LoginButton } from "./login-button";
import Navbar from "./Navbar";
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-[#030303] to-[#363636]">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <div className="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Welcome To Open Source
                <span className="md:block">World</span>
              </p>
              <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                open-source projects on platforms like GitHub, GitLab, or
                Bitbucket, and contribute to them. Resources like Open Source
                Guides, First Timers Only, and Hacktoberfest can guide beginners
                in making meaningful contributions.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
              <a
                href="#_"
                className="items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
            <img
              alt=""
              className="relative object-cover w-full rounded lg:rounded-2xl"
              src="https://zeabur.com/images/screenshot.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
