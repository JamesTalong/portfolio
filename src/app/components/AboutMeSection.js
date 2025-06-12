"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/Assets";

export default function AboutMeSection() {
  const [activeImage, setActiveImage] = useState("work");

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-800 border-l-8 border-blue-600 pl-4 tracking-tight font-bebas mb-10">
        My Personal
      </h2>
      <section className=" bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-black shadow-2xl p-8 max-w-5xl mx-auto transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Details */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveImage("work")}
                className={`text-xs font-bold px-4 py-1 rounded-full shadow-inner border border-black tracking-widest cursor-pointer ${
                  activeImage === "work"
                    ? "bg-yellow-400 text-black"
                    : "bg-white"
                }`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveImage("casual")}
                className={`text-xs font-bold px-4 py-1 rounded-full border border-black tracking-widest cursor-pointer ${
                  activeImage === "casual"
                    ? "bg-yellow-400 text-black"
                    : "bg-white"
                }`}
              >
                CASUAL
              </button>
            </div>

            {/* Personal Info */}
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-wide font-bebas">
                NICKNAME:{" "}
                <span className="text-yellow-500 text-4xl">JAMES</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 font-bebas">
                (REAL NAME):{" "}
                <span className="text-black dark:text-white text-3xl">
                  James Louie S. Delas Alas
                </span>
              </h3>

              <div className="border-t border-black dark:border-gray-300 pt-4 grid grid-cols-2 gap-y-2 text-sm font-medium text-gray-800 dark:text-gray-100 font-roboto">
                <p>
                  RELIGION:{" "}
                  <span className="text-black dark:text-white">
                    Roman Catholic
                  </span>
                </p>
                <p>
                  BIRTHPLACE:{" "}
                  <span className="text-black dark:text-white">
                    Lemery, Batangas
                  </span>
                </p>
                <p>
                  NATIONALITY:{" "}
                  <span className="text-black dark:text-white">Filipino</span>
                </p>
                <p>
                  CIVIL STATUS:{" "}
                  <span className="text-black dark:text-white">Single</span>
                </p>
                <p>
                  BIRTHDAY:{" "}
                  <span className="text-black dark:text-white">01/21/2000</span>
                </p>
                <p>
                  HEIGHT:{" "}
                  <span className="text-black dark:text-white">
                    &quot;5&apos;8&quot;
                  </span>
                </p>
                <p>
                  WEIGHT:{" "}
                  <span className="text-black dark:text-white">90kg</span>
                </p>
                <p>
                  SEX: <span className="text-black dark:text-white">Male</span>
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-extrabold font-bebas tracking-wide">
                SKILLS:{" "}
                <span className="bg-black text-yellow-400 px-2 py-1 rounded shadow-md inline-block animate-pulse">
                  ADAPTIVE INTELLECT
                </span>
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 font-medium leading-relaxed">
                Possesses the ability to rapidly adapt and engineer logical or
                creative solutions under pressure—especially in tech-related or
                strategic scenarios. Can instantly “upgrade” knowledge through
                observation or learning.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[450px] border-[3px] border-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
            <Image
              src={activeImage === "work" ? assets.img9 : assets.img8}
              alt="Hero Illustration"
              fill
              className="object-cover object-center transition-all duration-500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
