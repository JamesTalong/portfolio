import Image from "next/image";
import { assets } from "../../assets/Assets"; // Update path as necessary
import Link from "next/link";

export default function AboutMeCard() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white min-h-screen px-6 md:px-16 py-16 justify-center  md:gap-20 center-content">
      <div className="relative w-full max-w-sm h-[550px]  rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={assets.img2}
          alt="About Me"
          fill
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-blue-500 text-sm uppercase tracking-wide mb-2">
          About
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Get to Know Me Better
        </h2>

        <p className="text-gray-700 text-base md:text-lg mb-4 max-w-lg md:max-w-none mx-auto md:mx-0 leading-relaxed">
          I&apos;m passionate about building beautiful and functional web
          experiences. With a strong foundation in design and development, I
          love turning ideas into interactive products that make a difference.
        </p>

        <p className="text-gray-700 text-base md:text-lg mb-6 max-w-lg md:max-w-none mx-auto md:mx-0 leading-relaxed">
          Outside of coding, I enjoy exploring new technologies, working with
          creative teams, and always pushing to learn more and grow
          professionally.
        </p>

        <Link
          href="/about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition duration-300 ease-in-out"
        >
          Discover More About Me
        </Link>
      </div>
    </div>
  );
}
