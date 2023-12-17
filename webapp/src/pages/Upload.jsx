import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

const Upload = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    songName: "",
    songDesc: "",
    songFile: "", // Initialize songFile as null
  });

  const handleChange = (e) => {
    if (e.target.name === "songFile") {
      // If file input, store the file object
      setFormData({ ...formData, songFile: e.target.files[0] }); // Update songFile
    } else {
      // For other inputs, update form data as usual
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const formDataToSend = new FormData(); // Use FormData for file upload
    formDataToSend.append("songName", formData.songName);
    formDataToSend.append("songDesc", formData.songDesc);
    formDataToSend.append("songFile", formData.songFile);

    const requestOptions = {
      method: "POST",
      body: formDataToSend, // Send FormData object for file upload
    };

    try {
      const res = await fetch(
        "http://localhost:3001/api/v1/users/uploadSong",
        requestOptions
      );

      if (res.ok) {
        const data = await res.json();
        console.log("Song is uploaded", data);

        toast.success("Successfully Signed Up");
        navigate("/songs");
      } else {
        toast.error("Something went wrong");
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="w-[100%] flex flex-col mx-4 md:mx-0 md:flex-row items-center justify-center md:mt-10 md:gap-x-10">
        <img className="w-[420px]" src="./images/MUSIC.png" alt="MUSIC" />
        <div className="flex flex-col justify-center items-center bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md bg-slate-500">
          <h3 className="text-3xl font-bold text-white mb-7 md:text-5xl text-center">
            Upload Your TRACK
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {" "}
              <label
                htmlFor="songName"
                className="block text-sm font-medium text-white"
              >
                Song Name
              </label>
              <input
                type="text"
                id="songName"
                name="songName"
                value={formData.songName}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="songDesc"
                className="block text-sm font-medium text-white"
              >
                Song Description
              </label>
              <input
                type="text"
                id="songDesc"
                name="songDesc"
                value={formData.songDesc}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="songFile"
                className="block text-sm font-medium text-white"
              >
                Upload you TRACK :
              </label>
              <input
                type="file"
                id="songFile"
                name="songFile" // Change the name attribute to "file"
                onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white bg-lavender p-2 rounded-md hover:bg-blue-600"
            >
              UPLOAD YOUR TRACK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
