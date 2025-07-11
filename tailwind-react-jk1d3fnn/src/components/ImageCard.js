import React from "react";
import "../style.css";
import "../tailwind.css";

const ImageCard = () => {
  return (
    <div
      class="p-8"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/303024/pexels-photo-303024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
      }}
    >
      <div class="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
        <div
          class="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover: opacity-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/303024/pexels-photo-303024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
          }}
        />
        <p class="font-bold text-lg text-white absolute z-20 pointer-events-none">
          Video Graphics
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
