import React, { Fragment, useState } from "react";
import Loader from "react-loader-spinner";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Fragment>
      <div className="w-full md:max-w-3xl m-auto h-full flex items-center justify-center flex-col">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center justify-center flex-col  w-64 md:w-128">
            <img
              className="h-16  md:h-32"
              src="http://postalservice.gov.np/application/resources/site/img/logo.png"
              alt="Company Logo"
            />
            <div className="p-4 text-lg md:text-2xl text-red-900">
              हुलाक सेवा विभाग
            </div>
          </div>
          <div className="border-r-2 border-solid border-gray-400 opacity-25 w-1 h-64 mr-6 ml-8 hidden md:block "></div>

          <div className="w-full">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-red-500 text-xs italic">Invalid password</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center justify-center"
                // disabled={isSubmitting}
                type="button"
                style={{
                  backgroundColor: `${isSubmitting ? "grey" : ""}`
                }}
                onClick={e => setIsSubmitting(!isSubmitting)}
              >
                <div>{!isSubmitting ? "Sign In" : "Signing"}</div>

                {isSubmitting && (
                  <div className="ml-2">
                    <Loader type="Bars" color="#fff" height={27} width={27} />
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Mesh Softwares. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
