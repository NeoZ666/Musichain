import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import '@coreui/coreui/dist/css/coreui.min.css';

import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Artist from "./pages/Artist";
import Solidity from "./components/solidity/Solidity";
import { Toaster } from "react-hot-toast";
import Payment from "./pages/Payment";
import SuccessPage from "./pages/SuccessPage";

import Dashboard from "./pages/Dashboard";
import UploadMusic from "../src/pages/ArtistDashboard/UploadMusic";
import Partners from "../src/pages/ArtistDashboard/Partners";
import Pipeline from "../src/pages/ArtistDashboard/Pipeline";
import Songs from "../src/pages/ArtistDashboard/Songs";
import ArtistProfile from "../src/pages/ArtistDashboard/ArtistProfile";
import Analysis from "../src/pages/ArtistDashboard/Analysis";
import PdfViewer from "./pages/ArtistDashboard/PdfViewer";
import Review from "./pages/ArtistDashboard/Review";
// import { registerLicense } from '@syncfusion/ej2-base'

import AllSongs from "./pages/CompanyDashboard/AllSongs";
import AllArtists from "./pages/CompanyDashboard/AllArtists";
import Companyprofile from "./pages/CompanyDashboard/Companyprofile";

import SingleSongsPage from './pages/SingleSongsPage';

// registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX1fdnRUQ2lYWEB+X0A=')
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
          {/* ARTIST DASHBOARD */}
          <Route path="/dashboard/analysis" element={<Analysis />} />
          <Route path="/dashboard/uploadmusic" element={<UploadMusic />} />
          <Route path="/dashboard/partners" element={<Partners />} />
          <Route path="/dashboard/pipeline" element={<Pipeline />} />
          <Route path="/dashboard/contract" element={<PdfViewer />} />
          <Route path="/dashboard/songs" element={<Songs />} />
          <Route path="/dashboard/artistprofile" element={<ArtistProfile />} />
          <Route path="/dashboard/review" element={<Review />} />

          {/* COMPANY DASHBOARD */}
          <Route path="/dashboard/allsongs" element={<AllSongs />} />
          <Route path="/dashboard/companyprofile" element={<Companyprofile />} />
          <Route path="/dashboard/allartist" element={<AllArtists />} />
          <Route path="/dashboard/artist/:id" element={<ArtistProfile />} />
          <Route path="/dashboard/allsongs/:id" element={<SingleSongsPage />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/artist" element={<Artist />} />
      </Routes>

      <Routes>
        <Route path="/contract" element={<Solidity />} />
      </Routes>

      <Routes>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Toaster />

      <Routes>
        <Route path="/aicontract" element={<PdfViewer />} />
      </Routes>

      <Routes>
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
