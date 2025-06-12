import Image from "next/image";
import SocialLinks from "../../components/SocialLinks";
import { assets } from "../../assets/Assets"; // Adjust the path as necessary

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row  md:min-h-[calc(100vh-4rem)]">
      <div className="w-full md:w-[40%] bg-brand-dark-bg relative overflow-hidden md:diagonal-clip-right order-first md:order-last flex justify-center items-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-full">
          <Image
            src={assets.img5}
            alt="James Delas Alas"
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            quality={90}
            priority
            // Added rounded-full for mobile and md:rounded-none for desktop
            className="rounded-full md:rounded-none z-0"
          />
        </div>
      </div>

      {/* Left Side (Content: Light Gray Background) */}
      <div className="w-full md:w-[60%] bg-brand-light-bg dark:bg-gray-800 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center items-center md:items-start diagonal-point-left">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-[clamp(1.5rem,6vw,3.5rem)] font-bold text-brand-primary-text dark:text-white mb-3 sm:mb-4">
            James Delas Alas
          </h1>
          <p className="text-lg sm:text-xl text-brand-secondary-text dark:text-gray-400 mb-2 sm:mb-3">
            Hi, I am
          </p>
          <p className="text-base sm:text-lg text-brand-secondary-text dark:text-gray-300 mb-8 sm:mb-10">
            Full Stack Developer
          </p>
          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
