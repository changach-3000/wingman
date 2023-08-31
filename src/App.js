import React from "react";
import * as Pages from "./App/index";
import AuthProvider from "./App/context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexPage from "./App/Pages/LandingPage/index-page";
import AboutUs from "./App/Pages/LandingPage/AboutUsPage/AboutUsPage";
import SignIn from "./App/Register/Login";
import SignUp from "./App/Register/SignUp";
import ErrorPage from "./App/error-page";
import Farmer from "./App/Pages/Farmer/Farmer";
import Selling from "./App/Pages/Farmer/Selling";
import Vaccination from "./App/Pages/Farmer/Vaccination";
import Training from "./App/Pages/Farmer/Training";
import PurchaseChicks  from "./App/Pages/Farmer/PurchaseChicks";
import Farmers from "./App/Pages/Admin/Farmers";
import Sellings from "./App/Pages/Admin/Sellings";
import Vaccinations from "./App/Pages/Admin/Vaccinations";
import Trainings from "./App/Pages/Admin/Trainings";
import PurchaseChickses from "./App/Pages/Admin/PurchaseChickses";



const App = () => {
  return (
    <>
      <AuthProvider>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<IndexPage />} errorElement={<ErrorPage />} />
              <Route path="/about-us" element={<AboutUs />} errorElement={<ErrorPage />} />
              <Route path="/login" element={<SignIn />} errorElement={<ErrorPage />} />
              <Route path="/signup" element={<SignUp />} errorElement={<ErrorPage />}/>
              <Route path="/farmer" element={<Pages.Farmer />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/selling" element={<Pages.Selling />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/vaccinations" element={<Pages.Vaccination />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/training" element={<Pages.Training/>} errorElement={<Pages.ErrorPage />}/>
              <Route path="/purchase-chicks" element={<Pages.PurchaseChicks/>} errorElement={<Pages.ErrorPage />}/>
              <Route path="/admin" element={<Pages.Farmers />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/sell" element={<Pages.Sellings />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/vaccines" element={<Pages.Vaccinations />} errorElement={<Pages.ErrorPage />}/>
              <Route path="/train" element={<Pages.Trainings/>} errorElement={<Pages.ErrorPage />}/>
              <Route path="/purchase-chicken" element={<Pages.PurchaseChickses/>} errorElement={<Pages.ErrorPage />}/> 
          </Routes>
         </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  );
};

export default App;