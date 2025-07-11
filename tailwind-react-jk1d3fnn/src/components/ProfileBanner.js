import React from "react";
import "../style.css";
import "../tailwind.css";

const ProfileBanner = () => {
  return (
    <div class="p-8">
      <div class="shadow-xl rounded-lg">
        <div
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
            mixBlendMode: "multiply"
          }}
          class="h-64 bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center"
        >
          <p class="text-white font-bold text-4xl">Profile</p>
        </div>
        <div class="bg-white rounded-b-lg px-8">
          <div class="relative">
            <div
              style={{
                width: "calc(100vw - 76px)",
                height: "150px",
                marginTop: "-150px",
                background: "linear-gradient(180deg, transparent, blue, blue)",
                marginLeft: "-32px",
                padding: 0,
                position: "absolute",
                mixBlendMode: "multiply screen"
              }}
            />
            <svg
              class="fill-current text-white m-2 right-0 w-12 h-12 rounded-full mr-4 shadow-lg absolute -mt-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              style={{ fill: "red" }}
            >
              <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z" />
            </svg>
            {/* <svg
                class="fill-current text-white m-2 right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{fill:'red'}}
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg> */}

            {/* <img
              class="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8"
              src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg"
              alt="Avatar of Jonathan Reinink"
            /> */}
          </div>
          <div class="pt-8 pb-8">
            <h1 class="text-2xl font-bold text-gray-700">Link</h1>
            <p class="text-sm text-gray-600">From hyrule</p>

            <p class="mt-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
              sem varius, fringilla sapien at, sollicitudin risus.
            </p>

            <div class="flex justify-around mt-8">
              <i class="material-icons">chat</i>
              <i class="material-icons">duo</i>
              <i class="material-icons">location</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
