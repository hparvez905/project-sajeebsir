import React from "react";

const Part1 = () => {
  return (
    <div className="bg-gray-100  ">
      {/* // -- last part of footer-- */}
      <section
        className="h-76 lg:px-60 py-20  "
        style={{ backgroundColor: "#292929" }}
      >
        <div className="lg:flex justify-between">
          <div className="lg:flex">
            <div className=" p-2">
              <h1 className="text-4xl font-semibold text-gray-600">
                Logo
              </h1>
            </div>
            
          </div>
          <div className=" p-2 hidden lg:block">
            <a
              href="#"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="mt-4">
          <button className=" border-gray-500 border-2  p-2 text-gray-600">
            <a
              href="#"
              className="hover:text-orange-600 hover:font-bold text-gray-600 font-medium mx-2 p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookies Setting
            </a>
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-xs font-semibold">
            © 2023 All rights reserved.(Sajeeb Sir)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Part1;
