import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets/Assets";

export const metadata = {
  title: "Portfolio - James Delas Alas",
  description:
    "A selection of James Delas Alas's projects in front-end development and UI design.",
};

// Example project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform UI",
    description:
      "A modern and responsive user interface for an online retail platform, focusing on seamless user experience and conversion.",
    imageUrl: assets.img11,
    tags: ["Next.js", "Tailwind CSS", "Figma", "Stripe API"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard Design",
    description:
      "Designed and developed a data visualization dashboard for a software-as-a-service product, enhancing data accessibility.",
    imageUrl: assets.img12,
    tags: ["React", "Chart.js", "Firebase", "UI/UX"],
    liveLink: "#",
  },
  {
    id: 3,
    title: "Personal Blog",
    description:
      "A JAMstack blog built with a focus on performance and SEO, featuring a clean and minimalist design.",
    imageUrl: assets.img12,
    tags: ["Gatsby", "GraphQL", "Markdown", "Netlify"],
    repoLink: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary-text dark:text-white mb-10 text-center">
        My Portfolio
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-brand-primary-text dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-brand-secondary-text dark:text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-3">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-brand-accent hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
                  >
                    View Live
                  </Link>
                )}
                {project.repoLink && (
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-accent dark:text-blue-400 border border-brand-accent dark:border-blue-400 hover:bg-brand-accent hover:text-white dark:hover:bg-blue-400 dark:hover:text-brand-dark-bg px-4 py-2 rounded-md transition-colors"
                  >
                    View Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
