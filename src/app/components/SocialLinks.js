import Link from "next/link";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "mailto:jamesdelasalas21@gmail.com",
    alt: "Email James Delas Alas",
    Icon: FaEnvelope,
  },
  {
    href: "https://www.facebook.com/james.salvo.395",
    alt: "James Delas Alas on Facebook",
    Icon: FaFacebook,
  },
  {
    href: "https://www.linkedin.com/in/james-louie-delas-alas-076b13223/",
    alt: "James Delas Alas on LinkedIn",
    Icon: FaLinkedin,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 items-center">
      {socialMediaLinks.map(({ href, alt, Icon }) => (
        <Link
          key={href}
          href={href}
          target={
            href.startsWith("http") || href.startsWith("mailto:")
              ? "_blank"
              : "_self"
          }
          rel={
            href.startsWith("http") || href.startsWith("mailto:")
              ? "noopener noreferrer"
              : ""
          }
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label={alt}
        >
          <Icon className="w-5 h-5 text-gray-800 dark:text-white" />
        </Link>
      ))}
    </div>
  );
}
