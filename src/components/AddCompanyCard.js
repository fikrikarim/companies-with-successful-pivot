import React from "react";

const AddCompanyCard = () => {
  return (
    <div class="flex flex-grow rounded overflow-hidden shadow-lg w-auto lg:max-w-31-percent m-1-percent text-center items-center">
      <div class="px-6 py-4 flex-grow">
        <p class="text-gray-700 text-base leading-10">
          <p class="font-bold">Contribute to the list</p>

          <p class="text-blue-500 hover:text-blue-800">
            <a href="https://github.com/fikrikarim/pivots.dev">
              Submit an issue or a pull request
            </a>
          </p>

          <p>or</p>

          <p class="text-blue-500 hover:text-blue-800">
            <a href="https://forms.gle/fhPtizhF157uwEq56">Fill this form</a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default AddCompanyCard;
