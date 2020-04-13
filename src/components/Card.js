import React from "react";

const Card = (props) => {
  const { company } = props;
  const { name, now, earlyDays, pivot, source } = company;

  return (
    <div class="flex-grow flex rounded overflow-hidden shadow-lg w-auto md:w-1/4 m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>

        <p class="text-gray-700 text-base pb-2">
          <span class="font-semibold">Now: </span>
          {now}
        </p>

        <p class="text-gray-700 text-base pb-2">
          <span class="font-semibold">Early days: </span>
          {earlyDays}
        </p>

        <p class="text-gray-700 text-base pb-2">
          <span class="font-semibold">Pivot: </span>
          {pivot}
        </p>

        <a class="text-blue-500 hover:text-blue-800" href={source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default Card;
