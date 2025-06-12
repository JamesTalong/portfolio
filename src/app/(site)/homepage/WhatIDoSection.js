import Link from "next/link";

export default function WhatIDoSection() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Build modern web applications using React and Next.js on the frontend and Node.js or serverless APIs on the backend. I create scalable, performant apps with clean architecture and seamless user experiences.",
      active: true,
    },
    {
      title: "Responsive UI with Tailwind CSS",
      description:
        "Craft pixel-perfect, responsive interfaces using Tailwind CSS. I turn designs into interactive and accessible user interfaces with utility-first styling and reusable components.",
      active: false,
    },
    {
      title: "API Integration & Backend Services",
      description:
        "Integrate RESTful or GraphQL APIs, manage databases like MongoDB or Firebase, and deploy serverless functions for backend logic using platforms like Vercel or AWS Lambda.",
      active: false,
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-16 bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
        {/* Left Content - Centered Vertically */}
        <div className="flex-1 flex items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 mb-4">
              I specialize in building scalable, full-stack web applications
              with modern technologies. From UI/UX to deployment, I deliver
              clean, maintainable, and high-performance code.
            </p>
            <p className="text-gray-600 mb-6">
              With a strong focus on React, Next.js, and Tailwind CSS, I create
              responsive and accessible web experiences optimized for
              performance and user engagement.
            </p>
            <Link
              href="/skills"
              className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Say Hello!
            </Link>
          </div>
        </div>

        {/* Right Services */}
        <div className="flex-1 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm bg-white transition-all ${
                service.active
                  ? "border-l-4 border-blue-600 shadow-lg"
                  : "border-l-4 border-transparent"
              }`}
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
