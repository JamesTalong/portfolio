// pages/about.js
"use client";

import Head from "next/head";
import React, { useState } from "react"; // Import useState
import Sidebar from "@/app/components/Sidebar";
import MainContent from "@/app/components/MainContent";
import HeroBackground from "@/app/components/HeroBackground"; // Import the HeroBackground component
export default function About() {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState(null); // Or set a default like 'personal-information'

  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* Overall background color */}
      <Head>
        <title>About James Louie S. Delas Alas</title>
        <meta
          name="description"
          content="Learn more about James Louie S. Delas Alas's life, journey, family, and dreams."
        />
      </Head>
      {/* Optional: Hero section content over the background. You can place this
         here or integrate the background directly into a HeroSection component */}
      <div className="relative h-64 flex items-center justify-center text-white overflow-hidden">
        <HeroBackground /> {/* Render the background image */}
        <div className="relative z-20 text-center">
          {" "}
          {/* Content needs higher z-index */}
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            James Louie S. Delas Alas
          </h1>
          <p className="text-xl md:text-2xl mt-2 drop-shadow-md">(James)</p>
          {/* Add your chosen welcoming statement here */}
          <p className="text-md md:text-lg mt-4 max-w-prose mx-auto">
            Dive into the story of James – a journey shaped by water, ambition,
            and a touch of the unexpected.
          </p>
        </div>
      </div>
      {/* Main content area with sidebar */}
      {/* Use flexbox to arrange sidebar and main content side-by-side on medium screens and up */}
      <div className="flex flex-col md:flex-row container mx-auto mt-8 px-4 md:px-0">
        {/* Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main Content */}
        <MainContent activeSection={activeSection} />
      </div>
      {/* Optional: Footer */}
    </div>
  );
}
