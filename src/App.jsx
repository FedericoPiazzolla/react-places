import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedeIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedeIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedeIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <MainNavigation />

        <main>
          <Routes>
            <Route path="/" end element={<Users />} />
            <Route path="/:userId/places" end element={<UserPlaces />} />
            <Route path="/places/new" end element={<NewPlace />} />
            <Route path="/places/:placeId" end element={<UpdatePlace />} />
            <Route path="/auth" end element={<Auth />} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
