import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon lib you prefer

export default function Sidebar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "personal-information", name: "Personal Information" },
    { id: "my-journey", name: "My Journey" },
    { id: "family", name: "Family" },
    { id: "my-dreams", name: "My Dreams" },
  ];

  return (
    <>
      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Sidebar for desktop */}
      <div className="w-64 min-h-screen bg-white shadow-lg p-6 hidden md:block sticky top-0">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Navigation</h3>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.id} className="mb-2">
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar Drawer for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-64 bg-white p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Navigation
              </h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <nav>
              <ul>
                {sections.map((section) => (
                  <li key={section.id} className="mb-2">
                    <button
                      onClick={() => {
                        setActiveSection(section.id);
                        setIsOpen(false); // Close menu after selection
                      }}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
