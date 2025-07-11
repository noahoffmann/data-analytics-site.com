import React from "react";
import "../style.css";
import "../tailwind.css";

const DropdownMenu = () => {
  return (
    <div class="w-full w-screen flex flex-col flex items-center">
      <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
        Download
      </button>

      <span class="border border-transparent" />

      <div class="relative">
        <button class="relative z-10 block p-2 transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          <svg
            class="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
        <div class="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            small{" "}
            <span class="text-gray-600 dark:text-gray-400">(640x426)</span>
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            medium{" "}
            <span class="text-gray-600 dark:text-gray-400">(1920x1280)</span>
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            large{" "}
            <span class="text-gray-600 dark:text-gray-400">(2400x1600)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DropdownMenu;
