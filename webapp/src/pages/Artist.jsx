import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Artist() {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/users/getArtistInfo");
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
      <Navbar />
      <section className="mx-5 my-10 md:my-14 md:mx-10">
        <h1 className="text-5xl font-bold mb-5 text-primary">Artists</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1">
          {artistData.map((item, i) => {
            // Preprocess the file.item data here
            const imagePath = item.file.split("\\")[1]; // Splitting by backslash and taking the second part
            
            return (
              <div className="box card text-center" key={i}>
                <div className="img relative h-52 w-52 m-auto">
                  <img
                    src={`http://localhost:3001/${imagePath}`}
                    alt="cover"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-md text-gray-500 font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Artist;
