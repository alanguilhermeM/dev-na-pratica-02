import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/utils/basePath";

const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, SetShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        SetShadow(true);
      } else {
        SetShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={
        shadow
          ? "fixed w-full shadow-xl h-14 z-[100] bg-transparent hover:bg-[#1A1B1E]"
          : "fixed w-full h-14 z-[100] bg-transparent hover:bg-[#1A1B1E]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 text-white">
        <Image src={`${basePath}/logo-trybe.png`} alt="Logo" width={100} height={5} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/history">
              <li className="ml-10 text-sm uppercase hover:border-b">
                History
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w[60%] md:w[45%] h-screen bg-gray-800 p-10 ease-in duration-500"
              : "fixed left-[100%] sm:left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between w-full items-center">
            <Image src={`${basePath}/logo-trybe.png`} alt="Logo" width="80" height="35" />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 underline underline-offset-2 text-white">
              a escola de tecnologia onde você aprende de verdade
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="text-sm uppercase hover:border-b py-4 text-white">Home</li>
              </Link>

              <Link href="/history">
                <li className="text-sm uppercase hover:border-b py-4 text-white">
                  History
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
