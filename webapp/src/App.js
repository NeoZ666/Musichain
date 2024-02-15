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

import Dashboard from "./pages/Dashboard";
import UploadMusic from "../src/pages/ArtistDashboard/UploadMusic";
import Partners from "../src/pages/ArtistDashboard/Partners";
import Pipeline from "../src/pages/ArtistDashboard/Pipeline";
import Contract from "../src/pages/ArtistDashboard/Contract";
import Songs from "../src/pages/ArtistDashboard/Songs";
import ArtistProfile from "../src/pages/ArtistDashboard/ArtistProfile";

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
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* SIDEBAR ROUTES */}
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/dashboard/uploadmusic" element={<UploadMusic />} />
          <Route path="/dashboard/partners" element={<Partners />} />
          <Route path="/dashboard/pipeline" element={<Pipeline />} />
          <Route path="/dashboard/contract" element={<Contract />} />
          <Route path="/dashboard/songs" element={<Songs />} />
          <Route path="/dashboard/artistprofile" element={<ArtistProfile />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/artist" element={<Artist />} />
      </Routes> */}

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

      <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
