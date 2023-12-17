import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Artist from "./pages/Artist";
import Song from "./pages/Song";
import Upload from "./pages/Upload";
<<<<<<< Updated upstream
import Solidity from "./components/solidity/Solidity";
=======
import { Toaster } from "react-hot-toast";
>>>>>>> Stashed changes

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

      <Routes>
        <Route path="/artist" element={<Artist />} />
      </Routes>

      <Routes>
        <Route path="/songs" element={<Song />} />
      </Routes>

      <Routes>
        <Route path="/upload" element={<Upload />} />
      </Routes>

<<<<<<< Updated upstream
      <Routes>
        <Route path="/contract" element={<Solidity />} />
      </Routes>
=======
      <Toaster />
>>>>>>> Stashed changes
    </BrowserRouter>
  );
}

export default App;
