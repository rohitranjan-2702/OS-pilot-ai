import React from "react";
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-[#030303] to-[#363636]">
        <div className="relative overflow-hidden border-b border-white/5">
          <div className="relative w-full mx-auto max-w-7xl">
            <div
              className="relative flex flex-col w-full p-5 mx-auto lg:px-20 md:flex-row md:items-center md:justify-between md:px-6"
              x-data="{ open: false }"
            >
              <div className="flex flex-row items-center justify-between text-sm text-white lg:justify-start">
                <a href="/">
                  <div>OS-PIILOT</div>
                </a>
                <button className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:text-black hover:text-black md:hidden">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      className="inline-flex"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      className="hidden"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0">
                <a
                  href="#_"
                  className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto"
                >
                  Pricing
                </a>
                <a
                  href="#_"
                  className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
                >
                  Docs
                </a>
                <a
                  href="#_"
                  className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
                >
                  Dashboard
                </a>
                <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
                  {/* <button className="block px-4 py-2 mt-2 text-sm text-white hover:text-white/50 focus:outline-none focus:shadow-outline md:mt-0" fdprocessedid="a18uk">
                    <svg className="icon icon-tabler icon-tabler-brand-github" fill="none" stroke="currentColor" viewBox="0 0 24 24" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </button> */}
                  <button
                    type="button"
                    className="flex inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] shadow-white"
                  >
                    {/* <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> */}
                    Login with GitHub
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
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
            {/* <img alt="" className="relative object-cover w-full rounded lg:rounded-2xl" src="https://zeabur.com/images/screenshot.png" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
