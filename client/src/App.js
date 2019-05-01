import React, { Component } from "react";
import { Route } from "react-router-dom";
import './App.scss';


// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import Post from './pages/Post';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import EditFavors from './pages/EditFavors';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* Auth Pages */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* Pages */}
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/editfavors" component={EditFavors} />
      </div>
    );
  }

}
export default App;