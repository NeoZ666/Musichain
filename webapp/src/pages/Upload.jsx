// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import Navbar from "../components/Navbar";
// import neo4j from "neo4j-driver";

// const Upload = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Retrieve user information from local storage
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       const parsedUserData = JSON.parse(storedUserData);
//       setUserData(parsedUserData);
//       console.log(parsedUserData);
//     }
//   }, []);

//   // EXAMPLE URL :
//   // https://ipfs.io/ipfs/bafybeiejzv6qwndwaifsdpo3lanmnpisbz3yyd5u6dbmnxxzqd6pdnmyxy

//   const [artistInput, setArtistInput] = useState({
//     username: "",
//     numberOfSongs: 1,
//     views: 0,
//     wallet: "0xec88e00039294b99FfcdAc480C05A77C5F1d4229",
//   });

//   const [songInput, setSongInput] = useState({
//     title: "",
//     description: "",
//     views: 0,
//   });

//   const [formData, setFormData] = useState({
//     songName: "",
//     songDesc: "",
//     songFile: "",
//     songTrack: "",
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "songFile") {
//       // If file input, store the file object
//       setFormData({ ...formData, songFile: e.target.files[0] });
//     } else if (e.target.name === "songTrack") {
//       setFormData({ ...formData, songTrack: e.target.files[0] });
//     } else {
//       // For other inputs, update form data as usual
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//       setSongInput({...formData, [e.target.name] : e.target.value});
//     }
//   };

//   setArtistInput({username : userData?.name});

//   async function handleSubmit(e) {
//     e.preventDefault();

//     // SONG CIRCLE DETAILS :
//     const uri = "neo4j+s://16cea75e.databases.neo4j.io";
//     const user = "neo4j";
//     const password = "_swaqDxanVf1hK9fLCRaAbWarE74c_03lH8PlKgnKq0";

//     const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//     const session = driver.session();

//     // WEB2 Form handling :
//     const formDataToSend = new FormData(); // Use FormData for file upload
//     formDataToSend.append("songName", formData.songName);
//     formDataToSend.append("songDesc", formData.songDesc);
//     formDataToSend.append("artistName", userData?.name);
//     formDataToSend.append("songFile", formData.songFile);
//     formDataToSend.append("songTrack", formData.songTrack);

//     console.log("FROM DATA : ", formDataToSend);

//     const requestOptions = {
//       method: "POST",
//       body: formDataToSend,
//     };

//     try {
//       const createArtistQuery = `
//       CREATE (artist:Artist $artistInput)
//     `;
//       await session.run(createArtistQuery, { artistInput });

//       const createSongQuery = `
//       CREATE (song:Song $songInput)
//     `;
//       await session.run(createSongQuery, { songInput });

//       const createRelationshipQuery = `
//       MATCH (artist:Artist {username: $artistUsername}),
//             (song:Song {title: $songTitle})
//       CREATE (artist)-[:owns]->(song)
//     `;
//       await session.run(createRelationshipQuery, {
//         artistUsername: userData?.name,
//         songTitle: formData?.songName,
//       });

//       const res = await fetch(
//         "http://localhost:3001/api/v1/users/uploadSong",
//         requestOptions
//       );

//       if (res.ok) {
//         const data = await res.json();
//         console.log("Song is uploaded", data);

//         toast.success("Upload successful");
//         navigate("/songs");
//       } else {
//         toast.error("Something went wrong");
//         console.error("Upload failed");
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//     } finally {
//       session.close();
//       driver.close();
//     }
//   }

//   return (
//     <div>
//       <Navbar />

//       <div className="w-[100%] flex flex-col mx-4 md:mx-0 md:flex-row items-center justify-center md:mt-10 md:gap-x-10">
//         <img className="w-[420px]" src="./images/MUSIC.png" alt="MUSIC" />
//         <div className="flex flex-col justify-center items-center bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md bg-slate-500">
//           <h3 className="text-3xl font-bold text-white mb-7 md:text-5xl text-center">
//             Upload Your TRACK
//           </h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               {" "}
//               <label
//                 htmlFor="songName"
//                 className="block text-sm font-medium text-white"
//               >
//                 Song Name
//               </label>
//               <input
//                 type="text"
//                 id="songName"
//                 name="songName"
//                 value={formData.songName}
//                 onChange={handleChange}
//                 className="text-black mt-1 p-2 w-full border rounded-md"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="songDesc"
//                 className="block text-sm font-medium text-white"
//               >
//                 Song Description
//               </label>
//               <input
//                 type="text"
//                 id="songDesc"
//                 name="songDesc"
//                 value={formData.songDesc}
//                 onChange={handleChange}
//                 className="text-black mt-1 p-2 w-full border rounded-md"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="songDesc"
//                 className="block text-sm font-medium text-white"
//               >
//                 Upload your Track :
//               </label>
//               <input
//                 type="file"
//                 id="songTrack"
//                 name="songTrack" // Change the name attribute to "file"
//                 onChange={handleChange}
//                 className="text-white mt-1 p-2 w-full border rounded-md"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="songFile"
//                 className="block text-sm font-medium text-white"
//               >
//                 Upload you Cover Image :
//               </label>
//               <input
//                 type="file"
//                 id="songFile"
//                 name="songFile" // Change the name attribute to "file"
//                 onChange={handleChange}
//                 className="text-white mt-1 p-2 w-full border rounded-md"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-5 bg-blue-500 text-white bg-lavender p-2 rounded-md hover:bg-blue-600"
//             >
//               UPLOAD YOUR TRACK
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Upload;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import neo4j from "neo4j-driver";

const Upload = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [artistInput, setArtistInput] = useState({
    username: "",
    numberOfSongs: 1,
    views: 0,
    wallet: "0xec88e00039294b99FfcdAc480C05A77C5F1d4229",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      setArtistInput((prevInput) => ({
        ...prevInput,
        username: parsedUserData?.name || "",
      }));
    }
  }, []);

  const [songInput, setSongInput] = useState({
    views: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    songDesc: "",
    songFile: "",
    songTrack: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "songFile") {
      setFormData({ ...formData, songFile: e.target.files[0] });
    } else if (e.target.name === "songTrack") {
      setFormData({ ...formData, songTrack: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setSongInput({ ...songInput, [e.target.name]: e.target.value });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // SONG CIRCLE DETAILS :
    const uri = "neo4j+s://16cea75e.databases.neo4j.io";
    const user = "neo4j";
    const password = "_swaqDxanVf1hK9fLCRaAbWarE74c_03lH8PlKgnKq0";

    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
    const session = driver.session();

    // WEB2 Form handling :
    const formDataToSend = new FormData(); // Use FormData for file upload
    formDataToSend.append("name", formData.name);
    formDataToSend.append("songDesc", formData.songDesc);
    formDataToSend.append("artistName", userData?.name);
    formDataToSend.append("songFile", formData.songFile);
    formDataToSend.append("songTrack", formData.songTrack);

    console.log("FROM DATA : ", formDataToSend);

    const requestOptions = {
      method: "POST",
      body: formDataToSend,
    };

    try {
      const createArtistQuery = `
     CREATE (artist:Artist $artistInput)
   `;
      await session.run(createArtistQuery, { artistInput });

      const createSongQuery = `
     CREATE (song:Song $songInput)
   `;
      await session.run(createSongQuery, { songInput });

      const createRelationshipQuery = `
     MATCH (artist:Artist {username: $artistUsername}),
           (song:Song {name: $name})
     CREATE (artist)-[:owns]->(song)
   `;
      await session.run(createRelationshipQuery, {
        artistUsername: "Harsh",
        songTitle: formData?.name,
      });

      const res = await fetch(
        "http://localhost:3001/api/v1/users/uploadSong",
        requestOptions
      );

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
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Song Name
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
                htmlFor="songDesc"
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
                Upload you Cover Image :
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
