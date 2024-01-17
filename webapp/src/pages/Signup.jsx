import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    walletAddress: "",
    password: "",
    role: "user",
    file: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData(); // Use FormData for file upload
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("walletAddress", formData.walletAddress);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("file", formData.file); // Append file

    const requestOptions = {
      method: "POST",
      body: formDataToSend, // Send FormData object for file upload
    };

    try {
      const res = await fetch(
        "http://localhost:3001/api/v1/users/signup",
        requestOptions
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Data is uploaded", data);

        localStorage.setItem(
          "userData",
          JSON.stringify({
            name: formData.name
          })
        );

        toast.success("Successfully Signed Up");
        navigate("/");
      } else {
        toast.error("Something went wrong");
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md">
        <h3 className="text-3xl font-bold text-white mb-4">Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {" "}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>
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
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-sm font-medium text-white"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block text-sm font-medium text-white"
            >
              Upload you User Profile
            </label>
            <input
              type="file"
              id="file"
              name="file" // Change the name attribute to "file"
              onChange={handleChange}
              className="text-white mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Nilanchal
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-black mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-white"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              style={{color: "black"}}
            >
              <option value="user">NILANCHAL</option>
              <option value="artist">Artist</option>
              <option value="artist">Company</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 bg-lavender"
          >
            Sign Up
          </button>
        </form>
        {/* <p className="text-white mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline text-white">
            Log in here
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default SignUp;
