import React from "react";
import "./about.css";
import NavBar from "../LandingPage/NavBar";


export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="about-title-container">
        <h1 id="about-title">Meet the team</h1>
      </div>
      <h3 className="about-subtitle">ABOUT US</h3>
      <p className="about-main">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
         </p>
      <h3 className="about-subtitle">About the solid team!</h3>
      <div className="crew-container-1">
        {crews.map((crew, id) => (
          <CrewCard key={id} crew={crew} />
        ))}
      </div>
    </>
  );
}
