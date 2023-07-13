import React from "react";
import "./App.css";
import Navber from "./components/Navber";
import logo from "./img/logo.svg";
import { GoSearch, GoStar, GoPerson } from "react-icons/go";
import { PiHandbagLight } from "react-icons/pi";
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo_nav">
          <div className="logo">
            <img src={logo} />
            <ul className="nav_user">
              <li>
                <GoSearch />
              </li>
              <li>
                <GoPerson />
              </li>
              <li>
                <GoStar />
              </li>
              <li>
                <PiHandbagLight />
              </li>
            </ul>
          </div>
        </div>
        <Navber />
      </header>
    </div>
  );
}

export default App;
