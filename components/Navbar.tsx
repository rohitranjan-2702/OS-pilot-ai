import React from "react";
import { LoginButton } from "./login-button";

const Navbar = () => {
  return (
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
              href="repos"
              className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3 lg:ml-auto"
            >
              Open Source Repos
            </a>
            <a
              href="#_"
              className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
            >
              How to use
            </a>
            <a
              href="/chat"
              className="px-2 py-2 text-sm font-medium text-white hover:text-white/50 lg:px-6 md:px-3"
            >
              Chats
            </a>
            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              <LoginButton />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;