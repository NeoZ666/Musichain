import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import NeovisComp from "../components/NeovisComp";

function SingleArtist() {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/users/Drake/getSongs"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();

        setSongs(data.artistSongs);
      } catch (error) {
        console.error("Error fetching songs:", error);
        // Handle errors here, e.g., set an error state or show a message to the user
      }
    };

    fetchSongs();
  }, []); // Add an empty dependency array to run this effect only once (on mount)

  return (
    <div className="mb-10">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-center items-center gap-x-10">
          <img
            src="http://localhost:3001/c9def01cdf4c50a8f08a4a16c2809713.jpg"
            alt="Drake"
            width={500}
            className="rounded-[70px] border border-slate-200 p-2"
          />
          <div>
            <h1 className="text-6xl font-bold mb-10">Drake</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              numquam suscipit a nostrum sed molestias repellendus tempora
              corporis odio accusantium!
            </p>
          </div>
        </div>

        {/* Songs Section */}
        <div>
        <h1 className="text-5xl mt-10 mb-10">Ownership Chart </h1>
          {/* <NeovisComp></NeovisComp> */}
          <h1 className="text-5xl mt-10">Songs from Drake</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-1 mt-10 md:mt-10">
            {songs.length > 0 ? (
              songs.map((item, i) => {
                const imagePath = item.songFile.split("\\")[1];

                return (
                  <div className="box card text-center" key={i}>
                    <div className="img relative h-[300px] w-[300px] m-auto">
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
              })
            ) : (
              <p>No songs available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleArtist;
