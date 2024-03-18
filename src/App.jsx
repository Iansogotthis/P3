import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react'
import "./App.css";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NewStoryPage from "./pages/NewStoryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import "../App.css";
import NavBar from "./components/NavBar";
  import userService from "./utils/userService";

//import LoginPage from "../LoginPage/LoginPage";

export default function App() {

  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
  }

  function logout() {
    console.log("happening");
    userService.logout();
    setUser(null);
  }

  if (!user) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <span>
  
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/new" component={NewStoryPage} />

        <Route path="/" element={< loggedUser={user} handleLogout={logout} />} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path='/signup' element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/:username" element={<ProfilePage loggedUser={user} handleLogout={logout}/>} />
      </Routes>
      </div>
    </Router>
    
      
    </span>
  );
}
