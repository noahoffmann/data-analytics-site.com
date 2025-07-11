import React from "react";
import "../style.css";
import "../tailwind.css";

const Form = () => {
  return (
    <div class="shadow-lg sm:flex" style={{width: '90%', margin:'20px'}}>
      <div
        class="sm:w-2/5 w-full bg-gray-400 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('http://tailwindtemplates.io/wp-content/uploads/2019/01/bloom-blossom-delicate-699919-e1547757403457.jpeg')"
        }}
      >
        <div class="p-8">
          <h1>
            SIGN<span class="text-indigo-400">UP</span>
          </h1>
          <p class="leading-tight mt-2 text-sm text-white">
            Create an account to join our awesome community
          </p>
        </div>
      </div>
      <div class="sm:w-3/5 w-full bg-white">
        <div class="p-8">
          <form>
            <label for="username" class="text-xs text-gray-500">
              Username
            </label>
            <input
              id="username"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1"
              type="text"
              placeholder=""
            />
            <label id="passowrd" class="text-xs text-gray-500">
              Password
            </label>
            <input
              id="password"
              class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-grey-700 pb-1"
              type="password"
              placeholder=""
            />
            <input
              class="shadow-lg pt-3 pb-3 w-full text-white bg-indigo-500 hover:bg-indigo-400 rounded-full cursor-pointer "
              type="submit"
              value="Create account"
            />
          </form>
          <div class="text-center mt-4">
            <p class="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                class="no-underline text-indigo-500 font-bold hover:text-indigo-400"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
