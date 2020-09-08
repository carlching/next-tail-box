import React from "react";
import Head from "next/head";

const forgotPassword = () => {
  return (
    <div>
      <div className=" flex justify-center mt-56">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Forgot Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please input email address.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Request email
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
