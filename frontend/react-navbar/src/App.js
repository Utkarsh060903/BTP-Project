import React from "react";
import axios from "axios";
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About/about";
import Charges from "./pages/charges";
import Availability from "./pages/availabilty";
import Gallery from "./pages/gallery";
import Guidelines from "./pages/guidelines";
import Services from "./pages/services";
import GuestHouseBookingForm from "./pages/Form/form"
import Login from "./components/login/Login"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from "./components/register/Register";
import Contactus from "./pages/contactus";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPassword from "./components/login/ResetPassword";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/charges" exact element={<Charges/>} />
        <Route path="/availability" exact element={<Availability/>} />
        <Route path="/guidelines" exact element={<Guidelines/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
        <Route path="/services" exact element={<Services/>} />
        <Route path="/form" exact element={<GuestHouseBookingForm/>} />
        <Route path="/Login" exact element={<Login/>} />
        <Route path="/Register" exact element={<Register/>} />
        <Route path="/contactus" exact element={<Contactus/>} />
      </Routes>
    </Router>,
  </>
  );
}

export default App;
