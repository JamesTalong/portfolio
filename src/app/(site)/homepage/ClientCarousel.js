"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const clients = [
  "Microsoft",
  "National University Philippines",
  "First Asia Institute of Technology and Humanities",
  "Cognizant",
  "SSCGI",
  "SunLife",
  "Ichthus Technology",
  "Google",
];

export default function ClientCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: {
      perView: 4,
      spacing: 2,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 3 },
      },
    },
  });

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        My Professional Journey
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        These are all the companies and schools I have been with.
      </p>
      <div ref={sliderRef} className="keen-slider mt-10">
        {clients.map((client, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center text-gray-600 font-medium text-lg"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
