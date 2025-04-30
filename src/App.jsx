import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";

const App = () => {
  return (
    <Router>
      <MainNavigation />

      <main>
        <Routes>
          <Route path="/" end element={<Users />} />
          <Route path="/:userId/places" end element={<UserPlaces />} />
          <Route path="/places/new" end element={<NewPlace />} />
          <Route path="/places/:placeId" end element={<UpdatePlace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
