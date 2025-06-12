import React from "react";

// SVG Icon Data - replacing the external react-icons library
const icons = {
  home: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 576 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.57V44.05a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l225.2-185.07a12 12 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
    </svg>
  ),
  ship: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M620.4 153.6c-4.2-11.3-13.8-20.4-25.9-24.2L464.2 89.2c-15.4-4.8-31.5-4.8-46.9 0l-45.2 14.2-36.1-60.2c-5.4-9-15.1-14.8-25.9-14.8s-20.5 5.8-25.9 14.8l-36.1 60.2-45.2-14.2c-15.4-4.8-31.5-4.8-46.9 0L19.5 129.4c-12.1 3.8-21.7 12.9-25.9 24.2C-10.7 162.6 0 176.9 12.8 184.1l29.9 17.1c-2.5 13.9-3.7 28.4-3.7 43.4v84.9c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-27.1c28.9 18.1 62.4 27.1 96 27.1s67.1-9 96-27.1V328c13.3 0 24 10.7 24 24h32c13.3 0 24-10.7 24-24v-84.9c0-15-1.2-29.5-3.7-43.4l29.9-17.1c12.8-7.2 23.5-21.5 19.3-30.5zm-518.2 0c1.7-4.5 5.5-8.1 10.3-9.6L242.8 93.8c15.4-4.8 31.5-4.8 46.9 0l130.3 40.8c4.8 1.5 8.6 5.1 10.3 9.6-3.8 1-7.5 2.3-11.1 3.9L320 186.7l-71.1 94.8c-5.7 7.6-15.3 12.5-25.8 12.5s-20.1-4.9-25.8-12.5L128 186.7 29.3 157.5c-3.6-1.6-7.3-2.9-11.1-3.9zM320 288c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path>
    </svg>
  ),
  moneyBillWave: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M624 160H16c-8.84 0-16 7.16-16 16v160c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16V176c0-8.84-7.16-16-16-16zM320 336c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zm288-160v128h-48V176h48zM48 176v128H0V176h48zm144 0v128h-48V176h48zm96 0v128h-48V176h48zm192 0v128h-48V176h48z"></path>
    </svg>
  ),
  tree: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M432 320H16A16 16 0 0 0 0 336v32a16 16 0 0 0 16 16h16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h256v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h16a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144z"></path>
    </svg>
  ),
  users: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-18.6C100.5 263.1 84.6 256 67.2 256H0c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
    </svg>
  ),
  motorcycle: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 640 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 320c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 192c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zM0 336c0-26.5 21.5-48 48-48h11.2c2.1-23.8 12.6-45.7 29.3-62.3L2.5 91.7c-4.5-4.5-4.5-11.8 0-16.3l31-31c4.5-4.5 11.8-4.5 16.3 0l134.1 134.1C202.3 166.9 224.2 156.4 248 155.2V48c0-26.5 21.5-48 48-48h16c26.5 0 48 21.5 48 48v48.4c4.3.4 8.5.9 12.7 1.6l42.2-84.4c2.8-5.7 8.9-9.6 15.6-9.6h32.2c12.2 0 21 12.1 16.9 23.3l-27.5 75.7c21.2 14.9 37.1 36.8 45.4 62.4H592c26.5 0 48 21.5 48 48v16c0 26.5-21.5 48-48 48H352.5c-4-44-24.8-82.6-56.2-108.3-2.1-1.7-4.3-3.4-6.5-5-8.2-6.1-17.7-10.2-27.8-11.7v3.5c0 12.7-5.1 24.9-14.1 33.9L128 384v80c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm80 112h32v-64h-32v64zm32-256c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40z"></path>
    </svg>
  ),
  car: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M499.99 176h-59.87l-16-64H384V96H128v16H88.02l-16 64H12.01C4.2 176-1.53 183.08.38 190.15l50.06 180.22c2.45 8.83 10.99 15.63 20.21 15.63h362.69c9.22 0 17.76-6.8 20.21-15.63l50.06-180.22C513.53 183.08 507.79 176 499.99 176zM176 352c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160 0c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm111.31-208H24.69l-9.14-32.69C13.23 102.43 22.92 96 32.22 96h447.56c9.29 0 18.98 6.43 16.67 15.31l-9.14 32.69z"></path>
    </svg>
  ),
  tint: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 384 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.6 160 0c5.3 9.9 12.3 20.6 20.6 32C219.2 88.5 256 160 256 208c0 61.9-43 112-96 112c-8.8 0-16-7.2-16-16s7.2-16 16-16c44.2 0 80-35.8 80-80c0-30.9-19.3-76-56.3-130.6c3.1 4.5 6.1 9 9 13.5C222.1 106.3 288 224.2 288 320c0 106-86 192-192 192z"></path>
    </svg>
  ),
  hamburger: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM480 96H32A16 16 0 0 0 16 112v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16z"></path>
    </svg>
  ),
  globe: (props) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 496 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.3 358.9L226.7 222.7l-71.4 71.4c-4.2 4.2-11 4.2-15.2 0L98.7 252.7c-4.2-4.2-4.2-11 0-15.2l71.4-71.4-143.6-143.6c-4.2-4.2-4.2-11 0-15.2l30.6-30.6c4.2-4.2 11-4.2 15.2 0l143.6 143.6 71.4-71.4c4.2-4.2 11-4.2 15.2 0l41.4 41.4c4.2 4.2 4.2 11 0 15.2L222.7 226.7l146.2 146.2c4.2 4.2 4.2 11 0 15.2l-30.6 30.6c-4.2 4.2-11 4.2-15.2 0z"></path>
    </svg>
  ),
};

// Dream data array for easier mapping and maintenance
const dreams = [
  {
    icon: icons.home,
    text: "Live in a Modern House with smart features and sleek design.",
  },
  {
    icon: icons.ship,
    text: "Be a tourist on Royal Caribbean Cruises and treat my family.",
  },
  {
    icon: icons.moneyBillWave,
    text: "Earn a salary over 150,000 pesos/month for financial stability.",
  },
  {
    icon: icons.tree,
    text: "Own 3 hectares of farmland for peace or business.",
  },
  {
    icon: icons.users,
    text: "Build a happy family with a beautiful wife and kids.",
  },
  { icon: icons.motorcycle, text: "Ride a Kawasaki Ninja motorcycle." },
  { icon: icons.car, text: "Drive a Honda BR-V for family use." },
  { icon: icons.tint, text: "Start a water station business." },
  {
    icon: icons.hamburger,
    text: "Own a fast-food brand and run my own business.",
  },
  { icon: icons.globe, text: "Travel the world—especially Greece." },
];

// Individual Dream Card Component
const DreamCard = ({ icon: Icon, text }) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg transform hover:scale-105 hover:bg-white/20 transition-all duration-300 ease-in-out flex items-center space-x-4">
    <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-3 rounded-full shadow-md">
      <Icon className=" text-2xl" />
    </div>
    <p className="text-lg font-light">{text}</p>
  </div>
);

// Main Section Component
export default function MyDreamsSection() {
  return (
    <div className="relative font-sans antialiased">
      {/* Background Image and Gradient Overlay */}
      <h2 className="text-4xl font-extrabold text-gray-800 border-l-8 border-blue-600 pl-4 tracking-tight font-bebas">
        DREAMS
      </h2>
      {/* Content Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 md:p-12 text-center ">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 drop-shadow-lg">
            A Vision for the Future
          </h1>
          <p className="text-xl md:text-2xl  mb-12 max-w-2xl mx-auto font-light">
            These are the dreams that fuel my journey, a collection of
            aspirations for a life filled with purpose, joy, and adventure.
          </p>

          {/* Dreams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dreams.map((dream, index) => (
              <DreamCard key={index} icon={dream.icon} text={dream.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
