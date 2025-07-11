import React from "react";
import "../style.css";
import "../tailwind.css";

const Alerts = () => {
  return (
    <>
      <div class="flex w-full max-w-sm mx-auto m-3 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-green-500">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-green-500 dark:text-green-400">
              Success
            </span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
              Your account was registered!
            </p>
          </div>
        </div>
      </div>

      <div class="flex w-full max-w-sm m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-blue-500">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-blue-500 dark:text-blue-400">
              Info
            </span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
              This channel archived by the owner!
            </p>
          </div>
        </div>
      </div>

      <div class="flex w-full max-w-sm m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-yellow-400">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
          </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold text-yellow-400 dark:text-yellow-300">
              Warning
            </span>
            <p class="text-sm text-gray-600 dark:text-gray-200">
              Your image size is too large!
            </p>
          </div>
        </div>
      </div>

      <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="w-2 bg-gray-800 dark:bg-gray-900" />

        <div class="flex items-center px-2 py-3">
          <img
            class="object-cover w-10 h-10 rounded-full"
            alt="User avatar"
            src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
          />

          <div class="mx-3">
            <p class="text-gray-600 dark:text-gray-200">
              Sara has replied on the{" "}
              <a class="text-blue-500 dark:text-blue-300 hover:text-blue-400 hover:underline">
                uploaded image
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div class="w-screen h-screen flex flex-col">
        <section class="flex flex-col md:flex-row items-center justify-center">
          <div class="max-w-sm m-6 md:self-start">
            <p class="text-sm font-light">Normal</p>
            <hr class="my-2" />
            <div class="flex items-center justify-between shadow-md border-2 border-red-500 mb-2">
              <div class="flex self-stretch bg-red-500 mr-2">
                <svg
                  class="fill-current self-center text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" />
                </svg>
              </div>
              <p class="flex-grow self-center py-1 text-sm xl:text-xs text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                suscipit.
              </p>
              <a
                href="#"
                class="text-sm self-center text-gray-700 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-red-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-green-500 mb-2">
              <div class="flex self-stretch bg-green-500 mr-2">
                <svg
                  class="fill-current self-center text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg>
              </div>
              <p class="flex-grow self-center py-1 text-sm xl:text-xs text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                suscipit.
              </p>
              <a
                href="#"
                class="text-sm self-center text-gray-700 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-green-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-blue-500 mb-2">
              <div class="flex self-stretch bg-blue-500 mr-2">
                <svg
                  class="fill-current self-center text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                </svg>
              </div>
              <p class="flex-grow self-center py-1 text-sm xl:text-xs text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                suscipit.
              </p>
              <a
                href="#"
                class="text-sm self-center text-gray-700 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-blue-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-yellow-500 mb-2">
              <div class="flex self-stretch bg-yellow-500 mr-2">
                <svg
                  class="fill-current self-center text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                </svg>
              </div>
              <p class="flex-grow self-center py-1 text-sm xl:text-xs text-gray-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                suscipit.
              </p>
              <a
                href="#"
                class="text-sm self-center text-gray-700 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-yellow-500" />
            </div>
          </div>
          <div class="max-w-sm m-6">
            <p class="text-sm font-light">With title & long description</p>
            <hr class="my-2" />
            <div class="flex items-center justify-between shadow-md border-2 border-red-500 mb-2">
              <div class="flex self-stretch bg-red-500 mr-2">
                <svg
                  class="fill-current self-start mt-4 text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" />
                </svg>
              </div>
              <div class="flex flex-col flex-grow self-center py-3">
                <h4>Title Message</h4>
                <hr class="my-2 border-gray-500" />
                <p class="text-xs text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat amet impedit suscipit velit fugiat, tenetur id
                  praesentium, corrupti odit, ab iusto libero alias et
                  dignissimos tempore voluptas! Nam, deserunt laboriosam?
                </p>
              </div>
              <a
                href="#"
                class="text-sm self-start text-gray-700 mt-3 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-red-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-green-500 mb-2">
              <div class="flex self-stretch bg-green-500 mr-2">
                <svg
                  class="fill-current self-start mt-4 text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg>
              </div>
              <div class="flex flex-col flex-grow self-center py-3">
                <h4>Title Message</h4>
                <hr class="my-2 border-gray-500" />
                <p class="text-xs text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat amet impedit suscipit velit fugiat, tenetur id
                  praesentium, corrupti odit, ab iusto libero alias et
                  dignissimos tempore voluptas! Nam, deserunt laboriosam?
                </p>
              </div>
              <a
                href="#"
                class="text-sm self-start text-gray-700 mt-3 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-green-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-blue-500 mb-2">
              <div class="flex self-stretch bg-blue-500 mr-2">
                <svg
                  class="fill-current self-start mt-4 text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" />
                </svg>
              </div>
              <div class="flex flex-col flex-grow self-center py-3">
                <h4>Title Message</h4>
                <hr class="my-2 border-gray-500" />
                <p class="text-xs text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat amet impedit suscipit velit fugiat, tenetur id
                  praesentium, corrupti odit, ab iusto libero alias et
                  dignissimos tempore voluptas! Nam, deserunt laboriosam?
                </p>
              </div>
              <a
                href="#"
                class="text-sm self-start text-gray-700 mt-3 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-blue-500" />
            </div>
            <div class="flex items-center justify-between shadow-md border-2 border-yellow-500 mb-2">
              <div class="flex self-stretch bg-yellow-500 mr-2">
                <svg
                  class="fill-current self-start mt-4 text-white w-4 md:w-6 lg:w-4 h-4 md:h-6 lg:h-4 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                </svg>
              </div>
              <div class="flex flex-col flex-grow self-center py-3">
                <h4>Title Message</h4>
                <hr class="my-2 border-gray-500" />
                <p class="text-xs text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat amet impedit suscipit velit fugiat, tenetur id
                  praesentium, corrupti odit, ab iusto libero alias et
                  dignissimos tempore voluptas! Nam, deserunt laboriosam?
                </p>
              </div>
              <a
                href="#"
                class="text-sm self-start text-gray-700 mt-3 mx-2 md:text-xs xl:text-md"
              >
                x
              </a>
              <div class="w-1 self-stretch bg-yellow-500" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Alerts;
