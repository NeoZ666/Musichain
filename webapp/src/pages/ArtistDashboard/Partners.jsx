import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import neo4j from "neo4j-driver";
import { NFTStorage, Blob } from "nft.storage";

const Partners = () => {
  const navigate = useNavigate();
  const [cid, setCID] = useState("");
  const [userData, setUserData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artistName: "",
    portfolio: "",
    sampleSong: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "sampleSong") {
      const file = e.target.files[0];
      setFormData({ ...formData, [e.target.name]: file });
    } else if (e.target.name === "portfolio") {
      const file = e.target.files[0];
      setFormData({ ...formData, [e.target.name]: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    navigate("/dashboard/review");

    // const uri = "neo4j+s://16cea75e.databases.neo4j.io";
    // const password = "_swaqDxanVf1hK9fLCRaAbWarE74c_03lH8PlKgnKq0";
    // const user = "neo4j";
    // const password = "12345678";
    // const uri = "bolt://localhost:7687";

    // const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    // const session = driver.session();

    // let formDataToSend;
    // formDataToSend = new FormData();
    // formDataToSend.append("name", formData.songName);
    // formDataToSend.append("songDesc", formData.songDesc);
    // formDataToSend.append("artistName", artistInput.username);
    // formDataToSend.append("songFile", formData.songFile);
    // // formDataToSend.append("songTrack", formData.songTrack);

    // console.log("FORMDATA : ", formData.songName);
    // console.log("FORMDATATOSEND : ", formDataToSend);

    // const requestOptions = {
    //   method: "POST",
    //   body: formDataToSend,
    // };

    // console.log(requestOptions);

    // try {
    //   const createArtistQuery = `
    //     CREATE (artist:Artist $artistInput)
    //   `;
    //   await session.run(createArtistQuery, { artistInput });

    //   const createSongQuery = `
    //   CREATE (song:Song {songName: $songName, songDesc: $songDesc})`;
    //   await session.run(createSongQuery, {
    //     songName: formData.songName,
    //     songDesc: formData.songDesc,
    //   });

    //   const createRelationshipQuery = `
    //     MATCH (artist:Artist {username: $artistUsername}),
    //           (song:Song {songName: $songName})
    //     CREATE (artist)-[:owns]->(song)
    //   `;
    //   await session.run(createRelationshipQuery, {
    //     artistUsername: artistInput.username,
    //     songName: formData.songName,
    //   });

    //   const res = await fetch(
    //     "http://localhost:3001/api/v1/users/uploadSong",
    //     requestOptions
    //   );

    //   console.log("RESPONSE : ", res);

    //   if (res.ok) {
    //     const data = await res.json();
    //     console.log("Song is uploaded", data);
    //     toast.success("Upload successful");
    //     navigate("/dashboard/songs");
    //   } else {
    //     toast.error("Something went wrong");
    //     console.error("Upload failed");
    //   }
    // } catch (error) {
    //   console.error("Error occurred:", error);
    // } finally {
    //   session.close();
    //   driver.close();
    //   console.log("UPLOAD CODE COMPLETED");
    // }
  }

  return (
    <div>
      <div className="w-[100%] flex flex-col mx-4 md:mx-0 md:flex-row items-center justify-center md:mt-10 md:gap-x-10">
        {/* IMAGE */}
        {/* <img className="w-[420px]" src="./images/MUSIC.png" alt="MUSIC" /> */}
        <div className="flex flex-col justify-center items-center bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md bg-slate-500 md:w-[70%]">
          <h3 className="text-3xl font-bold text-white mb-7 md:text-5xl text-center">
            BE OUR PARTNERS
          </h3>
          <form onSubmit={handleSubmit} className="w-[80%]">
            <div className="mb-4">
              {" "}
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Full Name :
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              {" "}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email ID :
              </label>
              <input
                required
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="artistName"
                className="block text-sm font-medium text-white"
              >
                Artist Name :
              </label>
              <input
                required
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="sampleSong"
                className="block text-sm font-medium text-white"
              >
                Sample Song :
              </label>
              <input
                required
                type="file"
                id="sampleSong"
                name="sampleSong" // Change the name attribute to "file"
                onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-white"
              >
                Upload your Cover Image :
              </label>
              <input
                required
                type="file"
                id="portfolio"
                name="portfolio" // Change the name attribute to "file"
                onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* HR QUESTIONS */}
            <div className="mb-4">
              <label
                htmlFor="artistName"
                className="block text-sm font-medium text-white"
              >
                HR QUESTION 1
              </label>
              <input
                required
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="artistName"
                className="block text-sm font-medium text-white"
              >
                HR QUESTION 2
              </label>
              <input
                required
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleChange}
                className="text-black mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-5 bg-blue-500 text-white bg-lavender/70 p-2 rounded-md"
            >
              SUBMIT YOUR APPLICATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Partners;
