import React from "react";
import Card from "../components/Cards/Card.js"
import "../components/Cards/Card.css"
import Footer from "../components/Footer/Footer.js";
import About from "./About/about.js";
import Guidelines from "./guidelines"
import Availability from "./availabilty"
import Contactus from "./contactus.js";



const Home = () => {
  
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjusted to 100vh for full viewport height
        textAlign: "center", // Center align text
        position: "relative" // Added position relative to allow absolute positioning of h1 and h2
      }}
    >
      <img
        src={require("../images/download33.png")}
        className="lnm"
        alt="LNMIIT Jaipur"
        style={{
          maxWidth: "100%", // Ensure image fits within its container
          maxHeight: "100%", // Ensure image fits within its container
          display: "block" // Ensure image is displayed as a block element
        }}
      />
      <div
        style={{
          position: "absolute", // Position the text absolutely over the image
          top: "20%", // Align text vertically at 50% from top
          left: "50%", // Align text horizontally at 50% from left
          transform: "translate(-50%, -50%)" // Center text both horizontally and vertically
        }}
      >
        <h1 className="heading1">Welcome to LNMIIT Jaipur Guest House Booking System</h1>
        <h2 className="h2-heading">We are not away from home</h2>
        <div className="start-cards">
          <div className="cardss">
            <Card title={"STANDARD ROOMS IN GUEST HOUSE"} 
            info={"12 Standard Rooms - Ground Floor - 8 Rooms, First Floor - 4 Rooms."} />
          </div>
          <div className="cardss">
            <Card title={"DELUXE ROOMS IN GUEST HOUSE"} 
            info={"2 VIP Rooms - Ground Floor - 0 Rooms, First Floor - 2 Rooms."} />
          </div>
        </div>
      </div >
      <div >
      
      </div>
    
     
    </div>  
    <div id="aboutuss">
      <About />
    </div>
    <div>
      <Availability />
    </div>
    <div>
      <Guidelines />
    </div>
    <div>
      <Contactus />
    </div>

    <div>
      <Footer/>
    </div>
      </>
  );
};

export default Home;
