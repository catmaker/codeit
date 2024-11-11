"use client";

import { useState } from "react";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import Logo from "../components/logo";
import NavItems from "../components/navbar-section/nav-items";

const NavbarSection = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-x-10">
            <Logo />
            <div className="hidden lg:flex lg:items-center">
              <NavItems className="items-center gap-x-10" />
            </div>
          </div>
          <div className="flex items-center">
            {/* 데스크탑 버튼 */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80">
                Login
              </button>
              <button className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80">
                Sign up
              </button>
            </div>

            {/* 모바일 메뉴 */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton className="p-2 rounded-md text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </PopoverButton>
                  <Transition
                    as={Fragment}
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <PopoverBackdrop className="fixed top-16 inset-x-0 bottom-0 bg-black/30 z-40 lg:hidden" />
                  </Transition>

                  <Transition
                    as={Fragment}
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <PopoverPanel className="absolute left-0 right-0 top-16 z-50 bg-white shadow-lg origin-top transform">
                      <div className="p-4">
                        <NavItems className="flex-col items-start space-y-4" />
                        <div className="flex flex-col space-y-2 pt-4">
                          <button className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80">
                            Login
                          </button>
                          <button className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80">
                            Sign up
                          </button>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarSection;
