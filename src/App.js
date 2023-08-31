import React from "react";
import AuthProvider from "./App/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexPage from "./App/Pages/LandingPage/index-page";
import AboutUs from "./App/Pages/LandingPage/AboutUsPage/AboutUsPage";
import SignIn from "./App/Register/Login";
import SignUp from "./App/Register/SignUp";


const App = () => {
  return (
    <>
      <AuthProvider>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<IndexPage />}/>
              <Route path="/about-us" element={<AboutUs />}/>
              <Route path="/login" element={<SignIn />}/>
              <Route path="/signup" element={<SignUp />}/>
          </Routes>
         </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;