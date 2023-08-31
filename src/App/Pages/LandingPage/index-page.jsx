import React, { useContext, useRef } from "react";
import Hero from "./helpers/HeroSection";
import Navbar from "./helpers/Navbar";
//import OngoingProjects from "./helpers/OngoingProjectsSection";
import Testimonials from "./helpers/TestimonialsSection";
import Footer from "./helpers/FooterSection";
import LastCallToAction from "./helpers/LastCallToActionSection";
import About from "./helpers/AboutSection";
import Info from "./helpers/InfoSection";
import FlexibleContent from "./helpers/FlexibleContentSection";

const stats = [
  { name: "Projects", value: "5000+" },
  { name: "Completion Rate", value: "80%" },
  { name: "Cost Savings", value: "400 Million" },
  { name: "Sub Locations", value: "250+" },
];

const blogs = [
  {
    id: 1,
    title: "Blog Title 1",
    content:
      "A fertile 24-acre tea plantation along Kapsorwa plains in Kericho, expecting a harvest of 1200 kg of tea.",
    imageUrl:
      "https://images.unsplash.com/photo-1592079927431-3f8ced0dacc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Replace with the URL of the first image
    progress: 75,
  },
  {
    id: 2,
    title: "Blog Title 2",
    content:
      "A sprawling flower plantation spanning 30 acres near Nakuru, with an expected production of 300,000 cut flowers for export.",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Replace with the URL of the second image
    progress: 55,
  },
  {
    id: 3,
    title: "Blog Title 3",
    content:
      "A thriving 100-acre dairy farm surrounded by picturesque landscapes in Eldoret, foreseeing 10,000 liters of high-quality milk monthly.",
    imageUrl:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", // Replace with the URL of the third image
    progress: 85,
  },
];

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero stats={stats} />
      <About />
      <FlexibleContent />
      <Info />
      {/* <OngoingProjects blogs={blogs} /> */}
      <Testimonials />
      <LastCallToAction />
      <Footer />
    </>
  );
};

export default IndexPage;
