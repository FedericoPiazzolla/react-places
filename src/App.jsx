import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />

      <main>
        <Routes>
          <Route path="/" end element={<Users />} />
          <Route path="/places/new" end element={<NewPlace />} />
          <Route path="/:userId/places" end element={<UserPlaces />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
