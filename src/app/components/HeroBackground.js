// components/HeroBackground.js

import Image from "next/image";
// Assuming your assets are in ../../assets/Assets
import { assets } from "../assets/Assets";

export default function HeroBackground() {
  return (
    // Absolute positioning to cover the container (likely the main content area or the whole page)
    // and lower z-index to be behind content
    <div className="absolute inset-0 z-0">
      <Image
        src={assets.img1} // Use the specified asset
        alt="Background Image" // Descriptive alt text
        layout="fill" // Fill the parent container
        objectFit="cover" // Cover the container without distortion
        className="opacity-60" // Apply opacity as requested
        priority // Load this image with high priority
      />
      {/* Optional: Add an overlay div for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
    </div>
  );
}
