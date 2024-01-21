import React from "react";

const SuccessPage = () => {
  const copyText = () => {
    const textToCopy = document.querySelector("h1").innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Do something when text is successfully copied
        console.log("Text copied to clipboard:", textToCopy);
      })
      .catch((error) => {
        // Handle errors if the text cannot be copied
        console.error("Could not copy text to clipboard:", error);
      });
  };

  const cid = "";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src="./images/CONGRATS.png" alt="CONGRATS MESSAGE" />

      <div className="flex flex-col gap-y-5">
        <div className="text-white text-2xl font-bold mt-10">
          Here's your Licensed Song
        </div>

        <div className="flex gap-x-10 items-center break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter">
          <h1>{cid}</h1>
          <div>
            <img
              src="./images/copy.svg"
              alt="COPY"
              width={20}
              className="cursor-pointer"
              onClick={copyText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
