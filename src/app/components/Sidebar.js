import React, { useState, useEffect } from "react";
import { User, Map, Users, Star, Compass, X } from "lucide-react";

export default function EnhancedSidebar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false); // This can be repurposed for other mobile interactions if needed

  const sections = [
    { id: "personal-information", name: "Personal Info", icon: User },
    { id: "my-journey", name: "My Journey", icon: Map },
    { id: "family", name: "Family", icon: Users },
    { id: "my-dreams", name: "My Dreams", icon: Star },
  ];

  // Haptic feedback function
  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibrate for 50ms
    }
  };

  return (
    <>
      {/* --- Desktop Sidebar --- */}
      <aside className="w-72 min-h-screen bg-white shadow-2xl p-8 hidden md:block sticky top-0">
        <div className="flex items-center mb-8">
          <Compass className="w-8 h-8 text-indigo-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Navigation</h3>
        </div>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-3">
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                    activeSection === section.id
                      ? "bg-indigo-600 text-white shadow-xl"
                      : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                  }`}
                >
                  <section.icon className="w-5 h-5 mr-4" />
                  <span className="font-medium">{section.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* --- Mobile Floating Navigation Bar --- */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm shadow-2xl rounded-full p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                triggerHapticFeedback();
              }}
              aria-label={section.name}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${
                activeSection === section.id
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
              style={{
                width: activeSection === section.id ? "auto" : "44px",
                height: "44px",
                padding: activeSection === section.id ? "0 16px" : "0",
              }}
            >
              <section.icon className="w-5 h-5 flex-shrink-0" />
              {activeSection === section.id && (
                <span className="ml-2 font-semibold text-sm whitespace-nowrap">
                  {section.name}
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
