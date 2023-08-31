import React from "react";
import AuthProvider from "./App/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexPage from "./App/Pages/LandingPage/index-page";
import AboutUs from "./App/Pages/LandingPage/AboutUsPage/AboutUsPage";


const App = () => {
  return (
    <>
      <AuthProvider>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<IndexPage />}/>  
              <Route path="/About Us" element={<AboutUs/>}/>
          </Routes>
         </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;