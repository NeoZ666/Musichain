import React from "react";
import Navbar from "../componenets/Navbar";

const browse = [
  {
    id: 1,
    name: "Simple Place To Be",
    tag: "RYD",
    cover: "../images/b1.jpg",
  },
  {
    id: 2,
    name: "Reflection (Deluxe)",
    tag: "Fifth Harmony",
    cover: "../images/b2.jpg",
  },
  {
    id: 3,
    name: "The Open Road",
    tag: "Postiljonen",
    cover: "../images/b3.jpg",
  },
  {
    id: 4,
    name: "Body on me",
    tag: "Rita Ora",
    cover: "../images/b4.jpg",
  },
  {
    id: 5,
    name: "I Wanna Be In the Cavalry",
    tag: "Jeremy Scott",
    cover: "../images/b5.jpg",
  },
  {
    id: 6,
    name: "Pull Up",
    tag: "Summerella",
    cover: "../images/b6.jpg",
  },
  {
    id: 7,
    name: "What A Time To Be Alive",
    tag: "Judith Garcia",
    cover: "../images/b7.jpg",
  },
  {
    id: 8,
    name: "Live Radio",
    tag: "Radionomy",
    cover: "../images/b8.jpg",
  },
  {
    id: 9,
    name: "What A Time To Be Alive",
    tag: "Judith Garcia",
    cover: "../images/b3.jpg",
  },
  {
    id: 10,
    name: "Live Radio",
    tag: "Radionomy",
    cover: "../images/b2.jpg",
  },
];

function Artist() {
  return (
    <div>
      <Navbar />
      <section className="mx-5 my-10 md:my-14 md:mx-10">
        <h1 className="text-5xl font-bold mb-5 text-primary">Artists</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1">
          {browse.map((item, i) => (
            <div className="box card text-center" key={i}>
              <div className="img relative h-52 w-52 m-auto">
                <img
                  src={item.cover}
                  alt="cover"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-md text-gray-500 font-semibold">
                  {item.name}
                </h3>
                <span className="text-gray-400">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Artist;
