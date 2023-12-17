import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   const requestOptions = {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //   };

  //   console.log(requestOptions.body);
  //   console.log("FORMDATA : ", formData);

  //   try {
  //     const res = await fetch(
  //       "http://localhost:3001/api/v1/users/login",
  //       requestOptions
  //     );

  //     if (res.ok) {
  //       const data = await res.json();
  //       console.log("Data is uploaded", data);
  //     } else {
  //       console.error("Upload failed");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(
        "http://localhost:3001/api/v1/users/login",
        requestOptions
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Data is uploaded", data);
      } else {
        console.error("Upload failed");
      }

      console.log("Response from server:", res); // Log the entire response
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md">
        <h3 className="text-3xl font-bold text-white mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;