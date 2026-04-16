import React from "react";
import "./App.css";
import UserData from "./components/users/UserData";
import UserDetails from "./components/users/UserDetails";
function App() {
  return (
    <div className="app">
      <UserData />
      <hr />
      <UserDetails />
    </div>
  );
}

export default App;
