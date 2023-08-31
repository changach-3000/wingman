import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import APPCONTEXT from "./context/APP";

import {
  farmerSidebarContent,
  adminSidebarContent
} from "./Config/config";

import IndexPage from "./Pages/LandingPage/index-page";
import ErrorPage from "./error-page";
import SignIn from "./Register/Login";
import SignUp from "./Register/SignUp";
import AboutUs from "./Pages/LandingPage/AboutUsPage/AboutUsPage";
import DisplayBlogs from "./Pages/LandingPage/MoreBlogs/DisplayBlogs/DisplayBlogs";

 import { default as FarmerWithoutDash } from "./Pages/Farmer/Farmer";
 import { default as SellingWithoutDash } from "./Pages/Farmer/Selling";
 import { default as VaccinationWithoutDash } from "./Pages/Farmer/Vaccination";
 import { default as TrainingWithoutDash } from "./Pages/Farmer/Training";
 import { default as PurchaseChicksWithoutDash } from "./Pages/Farmer/PurchaseChicks";
 import { default as FarmersWithoutDash } from "./Pages/Admin/Farmers";
 import { default as SellingsWithoutDash } from "./Pages/Admin/Sellings";
 import { default as VaccinationsWithoutDash } from "./Pages/Admin/Vaccinations";
 import { default as TrainingsWithoutDash } from "./Pages/Admin/Trainings";
 import { default as PurchaseChicksesWithoutDash } from "./Pages/Admin/PurchaseChickses";
// import { default as ProjectFinancialWithoutDash } from "./Aggregator/Finance/ProjectFinancial";


const withLayout = (allowedRoles) => (Component) => (props) => {
  const { user } = useContext(APPCONTEXT);

  const roleToSidebarMap = {
    farmer: farmerSidebarContent,
    admin: adminSidebarContent
  };

  if (!user || !allowedRoles.includes(user.role)) {
    return <RestrictedContentMessage />;
  }

  const sideBarContents = roleToSidebarMap[user.role];
  return (
    <Layout sideBarContents={sideBarContents}>
      <Component {...props} />
    </Layout>
  );
};

const RestrictedContentMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Restricted Access</h1>
        <p className="text-gray-700">
          Sorry, you do not have permission to access this content. Please
          contact an admin for assistance.
        </p>
      </div>
    </div>
  );
};


// Aggregators
const Farmer = withLayout(["farmer"])(FarmerWithoutDash);
const Selling = withLayout(["farmer"])(SellingWithoutDash);
const Vaccination = withLayout(["farmer"])(VaccinationWithoutDash);
const Training = withLayout(["farmer"])(TrainingWithoutDash);
const PurchaseChicks = withLayout(["farmer"])(PurchaseChicksWithoutDash);

const Farmers = withLayout(["admin"])(FarmersWithoutDash);
const Sellings= withLayout(["admin"])(SellingsWithoutDash);
const Vaccinations = withLayout(["admin"])(VaccinationsWithoutDash);
const Trainings = withLayout(["admin"])(TrainingsWithoutDash);
const PurchaseChickses = withLayout(["admin"])(PurchaseChicksesWithoutDash);
// const DisplayFarmers = withLayout(["aggregator"])(DisplayFarmersWithoutDash);


export {
  ErrorPage,
  SignIn,
  SignUp,
  IndexPage,
  AboutUs,
  DisplayBlogs,
  Farmer,
  Selling,
  Vaccination,
  Training,
  PurchaseChicks,
  Farmers,
  Sellings,
  Vaccinations,
  Trainings,
  PurchaseChickses
};
