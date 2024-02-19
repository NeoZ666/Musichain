import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NeovisComp from "../../components/NeovisComp";
import Analysis from "./Analysis";
// import Maps from "../../components/Maps";

function SingleArtist() {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);
  const [info, setInfo] = useState([]);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setImageData(parsedUserData.image);

      console.log("Parsed Data : ", parsedUserData);

      const fetchArtist = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/users/getSingleArtist",
            {
              headers: {
                Authorization: `Bearer ${parsedUserData.token}`, // Set Authorization header with the token
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const data = await response.json();

          console.log("Response DATA : ", data);

          setInfo(data);
        } catch (error) {
          console.error("Error fetching songs:", error);
          // Handle errors here, e.g., set an error state or show a message to the user
        }
      };

      fetchArtist();

      const fetchSongs = async () => {
        try {
          const response = await fetch(
            "http://localhost:3001/api/v1/users/getSingleArtistSong",
            {
              headers: {
                Authorization: `Bearer ${parsedUserData.token}`, // Set Authorization header with the token
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const data = await response.json();

          console.log("getSingleArtistSong DATA : ", data);
          setSongs(data.artistSongs);
        } catch (error) {
          console.error("Error fetching songs:", error);
          // Handle errors here, e.g., set an error state or show a message to the user
        }
      };

      fetchSongs();
    }
  }, []);

  console.log(imageData);

  return (
    <div className="mb-10">
      <div className="w-[80%]">
        <div className="flex justify-center items-center gap-x-10">
          {imageData && (
            <img
              src={`http://localhost:3001/${imageData.split("\\")[1]}`}
              alt="Profile"
              className=" rounded-sm border border-slate-200 p-2 w-[400px] h-[400px] object-cover"
            />
          )}
          <div>
            <h1 className="text-6xl font-bold mb-10">{info.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              numquam suscipit a nostrum sed molestias repellendus tempora
              corporis odio accusantium!
            </p>
          </div>
        </div>

        {/* Songs Section */}
        <div>
          <h1 className="text-5xl mt-10 mb-10 w-[80%]">Ownership Chart </h1>
          <div className="w-[50%] mr-4">
            <NeovisComp></NeovisComp>
          </div>

          {/* <h1 className="text-5xl mt-10">Songs from {info.name}</h1> */}
          <h1 className="text-5xl mt-10">Traffic Analytics</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-1 mt-10 md:mt-10">
            {songs?.length > 0 ? (
              songs?.map((item, i) => {
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
              <p></p>
            )}
          </div>
        </div>
      </div>

      <Analysis />
      {/* <Maps></Maps> */}
    </div>
  );
}

export default SingleArtist;
