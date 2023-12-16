import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAdd, setWalletAdd] = useState("");

  return (
    <div className="h-screen flex items-center justify-center md:flex-row-reverse md:justify-center md:gap-x-8">
      <div className="flex flex-col items-center justify-center bg-brown-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-900 p-8 mb-20 md:mb-0">
        <h1 className="text-5xl text-center font-semibold mb-4 md:text-light_purple">
          USER SIGNUP
        </h1>

        <form className="flex flex-col z-20 gap-8 md:mt-10">
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="name" className="label-fixed">
              Name
            </label>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="email"
              className="input"
              placeholder="Enter your Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="email" className="label-fixed">
              Email
            </label>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              name="walletAdd"
              className="input"
              placeholder="Enter your Wallet Address"
              value={walletAdd}
              onChange={(e) => setWalletAdd(e.target.value)}
            ></input>
            <label htmlFor="walletAdd" className="label-fixed">
              Wallet Address
            </label>
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label htmlFor="password" className="label-fixed">
              Password
            </label>
          </div>
          <div className="mx-auto text-lg">
            <button
              className="px-5 py-2 rounded-xl border-2 border-black bg-salte-200 text-black font-semibold hover:shadow-lg transition ease-in-out delay-[200] hover:shadow-black mb-2"
              type="submit"
            >
              SignUp
            </button>
          </div>
          <span className="-mt-7 mx-auto text-lg text-gray-900">
            Don't have an Account?{" "}
            {/* <Link className="text-light_purple underline" to={"/signup"}> */}
              Sign Up
            {/* </Link> */}
          </span>
        </form>
      </div>
    </div>
  );
}
