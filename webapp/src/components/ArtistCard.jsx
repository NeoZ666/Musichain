import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/outline";

const ArtistCard = ({ artist }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const posts = [
    {
      name: "Artist 1",
      events: ["Event 1", "Event 2", "Event 3"],
    },
  ];

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // dont use this very f**ed up
    // <div className="bg-purple-200 rounded-lg p-4 mb-4">
    //   <div
    //     className="flex items-center justify-between cursor-pointer"
    //     onClick={toggleAccordion}
    //   >
    //     <h2 className="text-lg font-semibold text-purple-800">{artist.name}</h2>
    //     <svg
    //       className={`w-6 h-6 text-purple-800 ${
    //         isExpanded ? "transform rotate-180" : ""
    //       }`}
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M19 9l-7 7-7-7"
    //       ></path>
    //     </svg>
    //   </div>
    //   {isExpanded && (
    //     <div className="max-w-sm w-full lg:max-w-full lg:flex">
    //       <div
    //         className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //         style={{ backgroundImage: "url('/img/card-left.jpg')" }}
    //         title="Woman holding a mug"
    //       >
    //         {/* Image from the web */}
    //         <img
    //           src="https://via.placeholder.com/150"
    //           alt="Woman holding a mug"
    //         />
    //       </div>
    //       <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //         <div className="mb-8">
    //           <p className="text-sm text-gray-600 flex items-center">
    //             {/* Your content here */}
    //             Members only
    //           </p>
    //           <div className="text-gray-900 font-bold text-xl mb-2">
    //             Can coffee make you a better developer?
    //           </div>
    //           <p className="text-gray-700 text-base">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //             Voluptatibus quia, nulla! Maiores et perferendis eaque,
    //             exercitationem praesentium nihil.
    //           </p>
    //         </div>
    //         <div className="flex items-center">
    //           <img
    //             className="w-10 h-10 rounded-full mr-4"
    //             src="/img/jonathan.jpg"
    //             alt="Avatar of Jonathan Reinink"
    //           />
    //           <div className="text-sm">
    //             <p className="text-gray-900 leading-none">Jonathan Reinink</p>
    //             <p className="text-gray-600">Aug 18</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>

    // this is somewhat okayish table
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Artist
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ArtistCard;
