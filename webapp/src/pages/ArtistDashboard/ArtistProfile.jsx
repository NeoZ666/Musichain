import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ArtistProfile() {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/users/getArtistInfo"
        );
        if (response.ok) {
          const data = await response.json();
          setArtistData(data);
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
      <section className="mx-5 my-10 md:my-14 md:mx-10">
        <h1 className="text-6xl text-center font-bold mb-5 text-primary text-lavender md:text-7xl">
          Artists
        </h1>
        <p className="md:text-xl text-center">WE TUNE COLORS INTO DULL WORLD</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:grid-cols-1 mt-10 md:mt-10">
          {artistData.map((item, i) => {
            // Preprocess the file.item data here
            const imagePath = item.file.split("\\")[1]; // Splitting by backslash and taking the second part

            return (
              <div className="box card text-center" key={i}>
                <div className="img relative h-[250px] w-[250px] m-auto">
                  <img
                    src={`http://localhost:3001/${imagePath}`}
                    alt="cover"
                    className="w-full h-full object-cover rounded-[50px] border-2 border-slate-200 p-2"
                  />
                </div>
                <div className="text-center">
                  <Link to="/artist/Drake">
                    <h3 className="text-md text-gray-500 font-semibold md:text-2xl md:mt-2">
                      {item.name}
                    </h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ArtistProfile;
