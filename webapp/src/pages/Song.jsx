import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Accordian from "../components/Accordian";

export default function Song() {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/users/getAllSongs"
        );

        if (response.ok) {
          const data = await response.json();
          setSongs(data);
          console.log({ data });
        } else {
          console.error("Failed to fetch artist data");
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="mx-5 my-10 md:my-14 md:mx-10">
        <h1 className="text-6xl text-center font-bold mb-5 text-primary text-lavender md:text-7xl">
          SONGS
        </h1>
        <p className="md:text-xl text-center">WE TUNE COLORS INTO DULL WORLD</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-1 mt-10 md:mt-10">
          {songs.map((item, i) => {
            // Preprocess the file.item data here
            const imagePath = item.songFile.split("\\")[1]; // Splitting by backslash and taking the second part

            return (
              <div className="box card text-center" key={i}>
                <div className="img relative h-[400px] w-[400px] m-auto">
                  <img
                    src={`http://localhost:3001/${imagePath}`}
                    alt="cover"
                    className="w-full h-full object-cover rounded-[50px] border-2 border-slate-200 p-2"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-md text-gray-500 font-semibold md:text-2xl md:mt-2">
                    {item.songName}
                  </h3>
                  <p>{item.songDesc}</p>
                  <button
                    onClick={() => navigate("/contract")}
                    className="bg-lavender mt-2 text-2xl py-2 px-5 rounded-xl"
                  >
                    PAY ME
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
