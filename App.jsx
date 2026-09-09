import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./Home";
import Challenges from "./Challenges";
import ChallengeDetail from "./ChallengeDetail";
import SubmitChallenge from "./SubmitChallenge";
import Solutions from "./Solutions";
import SolutionDetail from "./SolutionDetail";
import Programs from "./Programs";
import Partners from "./Partners";
import BecomePartner from "./BecomePartner";
import Impact from "./Impact";
import DistrictDetail from "./DistrictDetail";
import Stories from "./Stories";
import Resources from "./Resources";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import SolutionSubmission from "./SolutionSubmission";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:id" element={<ChallengeDetail />} />
        <Route path="/submit-challenge" element={<SubmitChallenge />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:id" element={<SolutionDetail />} />
        <Route path="/submit-solution/:challengeId" element={<SolutionSubmission />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/partners/join" element={<BecomePartner />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/impact/district/:district" element={<DistrictDetail />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}



export default App;