import React from "react";
import image from "../images/header.svg";

const Header = () => {
  return (
    <div class="">
      <h2 class="font-semibold text-2xl md:text-3xl text-gray-700">
        <a href="/">Pivots.dev</a>
      </h2>

      <section class="md:flex items-center justify-center h-64">
        <div class="mx-auto items-center">
          <div class="w-full md:w-10/12">
            <div class="px-4">
              <p class="md:font-semibold mt-4 text-2xl md:text-4xl text-gray-700">
                Curated list of companies that had successful
                <span class="text-blue-500"> pivots</span>
              </p>
            </div>
          </div>
        </div>

        <img
          class="mt-10 b-auto sm:w-6/12 px-4"
          src={image}
          alt="curved roads to go to mountain"
        ></img>
      </section>
    </div>
  );
};

export default Header;
