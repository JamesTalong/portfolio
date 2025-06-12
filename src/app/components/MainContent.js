// components/MainContent.js

import React from "react";
import AboutMeSection from "./AboutMeSection";
import MyJourneySection from "./MyJourneySection";
import FamilySection from "./FamilySection";
import MyDreamsSection from "./MyDreamsSection";

export default function MainContent({ activeSection }) {
  return (
    // Tailwind classes for main content area: flex grow to take available space, padding
    <div className="flex-grow p-6 md:p-10 relative">
      {" "}
      {/* Added relative for background positioning */}
      {/* Render the appropriate section based on activeSection state,
          defaulting to AboutMeSection if activeSection is not set */}
      {activeSection === "my-journey" && <MyJourneySection />}
      {activeSection === "family" && <FamilySection />}
      {activeSection === "my-dreams" && <MyDreamsSection />}
      {/* This will render AboutMeSection if activeSection is 'personal-information'
          OR if activeSection is null/undefined (the initial state) */}
      {(activeSection === "personal-information" || !activeSection) && (
        <AboutMeSection />
      )}
    </div>
  );
}
