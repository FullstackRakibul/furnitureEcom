import { useId } from "react";
import { FaGlobe } from "react-icons/fa";
import {
  TbShoppingCart,
  TbUser,
  TbMapPin,
  TbMessage,
  TbMenu2,
  TbX,
} from "react-icons/tb";
import SearchBar from "../inputs/SearchBar";
import Link from "next/link";
import { navList, categories } from "./mock";
import { toKebabCase } from "@/utils/stringModifiers";
import cardsImg from "@/public/assets/room/cards.webp";
import Image from "next/image";
import { linkMenuItems } from "@/utils/linkMenuItems";
const BaseHeader = () => {
  const id = useId();
  const searchBarKey = `search-${id}`;
  return (
    <nav
      className="relative  mx-auto w-full px-4 sm:items-center sm:justify-between 
          sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex py-5 gap-5">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <TbMenu2 className="hs-collapse-open:hidden w-4 h-4" />
              <TbX className="hs-collapse-open:block hidden w-4 h-4" />
            </button>
          </div>
          <Link
            className="flex-none px-4 text-xl font-semibold dark:text-white"
            href="/"
            aria-label="Brand"
          >
            Brand
          </Link>
        </div>
        <div className="w-full hidden lg:block">
          <SearchBar key={searchBarKey} />
        </div>
        <div className="ml-auto flex items-center justify-end  gap-x-5 min-w-max">
          <a
            className="inline-flex justify-center items-center gap-2 font-medium text-slate-600 hover:text-slate-500 text-sm dark:text-slate-400 dark:hover:text-slate-300"
            href="#"
          >
            <FaGlobe />
            English (US)
          </a>
          <a
            className="text-2xl inline-flex items-center font-semibold"
            href="#"
          >
            <TbMessage />
          </a>
          <a
            className="text-2xl inline-flex items-center font-semibold"
            href="#"
          >
            <TbMapPin />
          </a>
          <a
            className="text-2xl inline-flex items-center font-semibold"
            href="#"
          >
            <TbUser />
          </a>
          <a className="inline-flex items-center font-semibold" href="#">
            <span className="text-3xl">
              <TbShoppingCart />
            </span>
            <span className="w-6 h-6 flex items-center justify-center text-white rounded-full bg-black">
              0
            </span>
          </a>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <SearchBar key={searchBarKey} />
      </div>
      <MegaMenu />
    </nav>
  );
};
const MegaMenu = () => {
  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
    >
      <div
        className="flex flex-col gap-y-4 gap-x-0 mt-5 
        sm:flex-row sm:items-center justify-center  sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7"
      >
        {categories.map((category, index) => {
          const href = linkMenuItems([category.label]);
          return (
            <div
              key={category.label}
              className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4"
            >
              <Link
                href={href}
                className="flex items-center w-full text-gray-800 hover:text-gray-500 font-medium dark:text-gray-200 dark:hover:text-gray-400"
              >
                {category.label}
                <svg
                  className="ml-2 w-2.5 h-2.5 text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </Link>

              <div
                className="hs-dropdown-menu
                   transition-[opacity,margin]
                    duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100
                     opacity-0  hidden z-10 bg-white sm:shadow-md rounded-lg p-5 pb-10 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"
              >
                <div className="flex gap-5">
                  <div className="flex gap-5">
                    {category.subCategories.map((subLabel, index, subArr) => {
                      return (
                        <div key={subLabel} className="flex flex-col gap-3">
                          <p
                            className="font-bold text-md py-2 px-3 
                          text-gray-800  dark:text-gray-400  dark:hover:text-gray-300"
                          >
                            {subLabel}
                          </p>
                          <ul className="flex flex-col gap-3 px-5">
                            {subArr.map((productType, index) => {
                              const productHref = linkMenuItems([
                                category.label,
                                subLabel,
                                productType,
                              ]);

                              return (
                                <li key={productType} className="text-sm">
                                  <Link href={productHref}>{productType}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-60">
                    <Image
                      className="w-full h-auto object-contain"
                      src={cardsImg}
                      alt="this is a demo image"
                    />
                    <p className="text-xl py-2">Save 50% off</p>
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BaseHeader;
