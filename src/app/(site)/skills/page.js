"use client";

import { useState } from "react";

const colorThemes = [
  "bg-gradient-to-r from-pink-500 to-purple-500",
  "bg-gradient-to-r from-purple-600 to-indigo-600",
  "bg-gradient-to-r from-sky-500 to-cyan-400",
  "bg-gradient-to-r from-orange-400 to-yellow-500",
  "bg-gradient-to-r from-lime-500 to-green-500",
  "bg-gradient-to-r from-teal-500 to-emerald-500",
  "bg-gradient-to-r from-fuchsia-500 to-rose-500",
];

const skillsData = [
  {
    step: "01",
    title: "Languages",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "SQL"],
  },
  {
    step: "02",
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue.js", "Node.js"],
  },
  {
    step: "03",
    title: "Styling & Design",
    items: ["Tailwind CSS", "Sass", "CSS Modules", "Styled Components"],
  },
  {
    step: "04",
    title: "UI/UX Tools",
    items: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    step: "05",
    title: "Version Control & Tools",
    items: ["Git & GitHub", "Webpack", "Babel", "npm/yarn"],
  },
  {
    step: "06",
    title: "Professional Skills",
    items: ["Responsive Design", "A11Y", "REST APIs", "Agile"],
  },
  {
    step: "07",
    title: "Certifications",
    items: [
      "Microsoft Azure Fundamentals",
      "Google IT Support",
      "ICORE Research Author",
    ],
  },
];

export default function SkillsInfographic() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen text-black py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Skills & Qualifications
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="border-l-4 border-gray-600 pl-6">
          {skillsData.map((skill, index) => (
            <div key={skill.title} className="mb-10 relative group">
              <div
                className={`absolute -left-[39px] top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-md text-white ${
                  colorThemes[index % colorThemes.length]
                }`}
              >
                {skill.step}
              </div>

              <div
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:scale-[1.02] ${
                  colorThemes[index % colorThemes.length]
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
                {activeIndex === index && (
                  <ul className="ml-4 list-disc text-sm space-y-1">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
