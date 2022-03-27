import React from "react";
import Signup from "./Signup";

import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Dashboard from './Dashboard';
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import UserDashboard from "./UserDashboard";
import ArtistLogin from "./ArtistLogin";

import ArtistDashboard from "./ArtistDashboard";
import Dashboard from "./Dashboard";
import PlayNewArtist from "./PlayNewArtist";

import LandingPage from "./LandingPage";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/UserDashboard" component={UserDashboard} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/ArtistDashboard" component={ArtistDashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/Artist-Login" component={ArtistLogin} />
            <Route path="/Landing-Page" component={LandingPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
