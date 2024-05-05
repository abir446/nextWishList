import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import Wish from "@/components/Wish";
import Link from "next/link";

const Addwish = () => {
  return (
    <div className="max-w-6xl h-screen bg-blue-50 hover:bg-blue-100 transition-all duration-300  rounded-xl flex flex-col items-center justify-start mx-auto pt-10 p-4">
      <form className="flex w-full max-w-xl flex-col gap-4 items-center justify-center">
        <div className="w-full flex flex-col gap-1">
          <label
            className="text-lg font-semibold text-[#1014e7]"
            htmlFor="wish"
          >
            What do you wish for:
          </label>
          <input
            className="w-full h-10 rounded-lg p-2 px-4"
            placeholder="Become a full-stack developer"
            type="text"
            name="wish"
            id="wish"
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label
            className="text-lg font-semibold text-[#1014e7]"
            htmlFor="wish"
          >
            Describe your wish:
          </label>
          <input
            className="w-full h-24  rounded-lg p-2 px-4"
            placeholder="By practing everyday, and being consistent..."
            type="text"
            name="wish"
            id="wish"
          />
        </div>

        <button className="p-2 w-full text-center flex items-center justify-center gap-2 bg-blue-600 rounded-lg text-lg text-white font-semibold hover:bg-blue-800 transition-colors duration-200">
          Add to Wishes
          <CiCirclePlus className="text-2xl " />
        </button>
      </form>
    </div>
  );
};

export default Addwish;
