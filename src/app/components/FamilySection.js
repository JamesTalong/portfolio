import React from "react";
import { assets } from "../assets/Assets";
import Image from "next/image";

export default function FamilySection() {
  return (
    <section className="p-8 bg-white rounded-2xl shadow-lg mb-12 max-w-5xl mx-auto font-serif text-gray-800 space-y-16">
      {/* Header */}
      <div className="flex justify-between items-center text-sm uppercase tracking-wide text-gray-600 border-b pb-2"></div>
      <h2 className="text-4xl font-extrabold text-gray-800 border-l-8 border-blue-600 pl-4 tracking-tight font-bebas">
        My Family
      </h2>
      {/* Father Section */}
      <div className="md:flex md:items-start gap-6">
        {/* Image Left */}
        <div className="relative w-full md:w-[50%] h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={assets.img16}
            alt="Father Lifeguard"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Text Right */}
        <div className="md:w-[50%] space-y-4">
          <h2 className="text-2xl font-semibold tracking-widest text-gray-900">
            FATHER: THE LIFEGUARD EXPLORER
          </h2>
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            My father proudly serves as a{" "}
            <strong>
              lifeguard on the world-renowned Royal Caribbean Cruises
            </strong>{" "}
            — sailing across oceans while ensuring passenger safety in luxurious
            waters. His job isn&apos;t just a role, it&apos;s a commitment to
            courage, vigilance, and leadership at sea.
          </p>
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            Beyond the cruise decks, he’s a{" "}
            <strong>dedicated basketball coach</strong>, known for mentoring
            young athletes with discipline and passion.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Mother Section */}
      <div className="md:flex md:items-start md:flex-row-reverse gap-6">
        {/* Image Right */}
        <div className="relative w-full md:w-[50%] h-[300px] overflow-hidden rounded-lg shadow-md">
          <Image
            src={assets.img14}
            alt="Mother Swimmer"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Text Left */}
        <div className="md:w-[50%] space-y-4">
          <h2 className="text-2xl font-semibold tracking-widest text-gray-900">
            MOTHER: THE SWIMMING CHAMPION
          </h2>
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            My mother, Winnie Delas Alas, works as a{" "}
            <strong>highly skilled Technician at Amkor Technology, Inc.</strong>{" "}
            — a role she takes pride in with precision and excellence.
          </p>
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            But what makes her even more extraordinary is her past — she was a{" "}
            <strong>Palarong Pambansa swimming athlete</strong>, finishing{" "}
            <strong>5th place in the Regional Championships in Iloilo</strong>,
            a remarkable feat celebrated in our family.
          </p>
        </div>
      </div>

      {/* Footer URL */}
    </section>
  );
}
