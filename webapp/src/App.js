import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Artist from "./pages/Artist";
import SingleArtist from "./pages/SingleArtist";
import Song from "./pages/Song";
import Upload from "./pages/Upload";
import Solidity from "./components/solidity/Solidity";
import { Toaster } from "react-hot-toast";
import Payment from "./pages/Payment";
import SuccessPage from "./pages/SuccessPage";
import Summarization from "./pages/Summarization";
import PdfViewer from "./pages/PdfViewer";

// import Access from "./components/Access";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* Auth Routes */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path="/pdfviewer" element={<PdfViewer />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/artist" element={<Artist />} />
      </Routes>

      <Routes>
        <Route path="/artist/Drake" element={<SingleArtist />} />
      </Routes>

      <Routes>
        <Route path="/songs" element={<Song />} />
      </Routes>

      <Routes>
        <Route path="/upload" element={<Upload />} />
      </Routes>

      <Routes>
        <Route path="/contract" element={<Solidity />} />
      </Routes>

      <Routes>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Toaster />

      {/* <Access
        CID={"bafybeiejzv6qwndwaifsdpo3lanmnpisbz3yyd5u6dbmnxxzqd6pdnmyxy"}
        flag={"false"}
      /> */}

      <Routes>
        <Route path="/summarization" element={<Summarization/>} />
      </Routes>

      <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
