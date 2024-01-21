import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import neo4j from "neo4j-driver";
import { NFTStorage, Blob } from "nft.storage";

const Upload = () => {
  const navigate = useNavigate();
  const [cid, setCID] = useState("");
  const [userData, setUserData] = useState(null);
  const [artistInput, setArtistInput] = useState({
    username: "Drake",
    numberOfSongs: 1,
    views: 0,
    wallet: "0xec88e00039294b99FfcdAc480C05A77C5F1d4229",
  });

  const IPFS_APIKEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJjOUZmMDcyQjA3ODAyZDU4YmI3NDc4YjZGNEVCRjNCNjQwNzhBRTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMzY2NjE1MzI3NiwibmFtZSI6InRlc3RrZXkifQ.0pNEM9Vv5GCD_njOskpExjU4G17YRecXw4xFww0CRkU";
  const nftstorage = new NFTStorage({ token: IPFS_APIKEY });

  async function uploadFile(file) {
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);

    fr.onloadend = async () => {
      const fileBlob = new Blob([fr.result]);

      console.log(fileBlob);
      const fileCid = await nftstorage.storeBlob(fileBlob);
      console.log({ fileCid });

      setCID(fileCid);
    };
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      setArtistInput((prevInput) => ({
        ...prevInput,
        username: parsedUserData.name || "Drake",
      }));
    }
  }, []);

  const [formData, setFormData] = useState({
    songName: "",
    songDesc: "",
    songFile: null,
    songTrack: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "songTrack") {
      const file = e.target.files[0];
      setFormData({ ...formData, [e.target.name]: file });
      uploadFile(file);
    } else if (e.target.name === "songFile") {
      const file = e.target.files[0];
      setFormData({ ...formData, [e.target.name]: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // const uri = "neo4j+s://16cea75e.databases.neo4j.io";
    // const password = "_swaqDxanVf1hK9fLCRaAbWarE74c_03lH8PlKgnKq0";
    const user = "neo4j";
    const password = "12345678";
    const uri = "bolt://localhost:7687";

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    let formDataToSend;
    formDataToSend = new FormData();
    formDataToSend.append("songName", formData.songName);
    formDataToSend.append("songDesc", formData.songDesc);
    formDataToSend.append("artistName", artistInput.username);
    formDataToSend.append("songFile", formData.songFile);
    // formDataToSend.append("songTrack", formData.songTrack);

    console.log("FORMDATA : ", formData.songName);
    console.log("FORMDATATOSEND : ", formDataToSend);

    const requestOptions = {
      method: "POST",
      body: formDataToSend,
    };

    console.log(requestOptions);

    try {
      const createArtistQuery = `
        CREATE (artist:Artist $artistInput)
      `;
      await session.run(createArtistQuery, { artistInput });

      const createSongQuery = `
      CREATE (song:Song {songName: $songName, songDesc: $songDesc})`;
      await session.run(createSongQuery, {
        songName: formData.songName,
        songDesc: formData.songDesc,
      });

      const createRelationshipQuery = `
        MATCH (artist:Artist {username: $artistUsername}),
              (song:Song {songName: $songName})
        CREATE (artist)-[:owns]->(song)
      `;
      await session.run(createRelationshipQuery, {
        artistUsername: artistInput.username,
        songName: formData.songName,
      });

      const res = await fetch(
        "http://localhost:3001/api/v1/users/uploadSong",
        requestOptions
      );

      console.log("RESPONSE : ", res);

      if (res.ok) {
        const data = await res.json();
        console.log("Song is uploaded", data);
        toast.success("Upload successful");
        navigate("/songs");
      } else {
        toast.error("Something went wrong");
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      session.close();
      driver.close();
      console.log("UPLOAD CODE COMPLETED");
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
                htmlFor="songTrack"
                className="block text-sm font-medium text-white"
              >
                Upload your Track :
              </label>
              <input
                type="file"
                id="songTrack"
                name="songTrack" // Change the name attribute to "file"
                onChange={handleChange}
                className="text-white mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="songFile"
                className="block text-sm font-medium text-white"
              >
                Upload your Cover Image :
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
          {/* {cid && <p>https://ipfs.io/ipfs/{cid}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Upload;
