import Image from "next/image";
import React from "react";
import { assets } from "../assets/Assets";

export default function MyJourneySection() {
  return (
    <section className="relative z-10 bg-gradient-to-br from-[#f9f9f9] to-[#ececec] border border-gray-300 shadow-2xl rounded-3xl p-10 max-w-5xl mx-auto my-12 overflow-hidden">
      {/* Header */}
      <div className="relative z-20 mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 border-l-8 border-blue-600 pl-4 tracking-tight font-bebas">
          My Journey
        </h2>
        <p className="text-base text-gray-600 mt-1 italic">
          A story of resilience, education, and my love for the water.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-20 space-y-10 text-lg text-gray-800 leading-relaxed font-roboto">
        <p>
          My path has been one of learning, growth, and navigating different
          currents — much like my favorite sport,{" "}
          <span className="font-semibold text-blue-700">swimming</span>.
        </p>

        {/* Educational Path */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
            Educational Path
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Spent foundational years from{" "}
              <strong>Elementary to High School</strong> at{" "}
              <em>DMI (Daughters of Mary Immaculate School)</em>.
            </li>
            <li>
              Attended <strong>Senior High</strong> at{" "}
              <em>First Asia Institute of Technology and Humanities</em>.
            </li>
            <li>
              Completed <strong>College</strong> at{" "}
              <em>National University Philippines, Laguna</em>.
            </li>
          </ul>
        </div>

        {/* Swimming Journey */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
            Swimming & STACAA
          </h3>
          <div className="relative w-full max-w-2xl mx-auto border-2 border-gray-900 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={assets.img10}
              alt="Newspaper Clipping: Swimming Victory"
              width={800}
              height={500}
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="bg-gray-100 text-gray-700 text-sm italic px-4 py-2 border-t border-gray-900 text-center">
              “Local Student Makes Waves: A Victory at STACAA” — A proud moment
              captured like a newspaper headline.
            </p>
          </div>
          <p className="mt-4">
            Swimming isn&apos;t just a sport — it&apos;s part of my identity. I
            was fortunate to compete in the{" "}
            <strong>
              STACAA (Southern Tagalog CALABARZON Athletic Association)
            </strong>{" "}
            during my early school years. Though my academic priorities later
            shifted, the discipline and spirit of those swimming days remain a
            huge part of who I am today.
          </p>
        </div>
      </div>

      {/* Decorative Texture or Overlay */}
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10 z-0 pointer-events-none" />
    </section>
  );
}
