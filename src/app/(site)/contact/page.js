import SocialLinks from "@/app/components/SocialLinks";

// app/(site)/contact/page.js
export const metadata = {
  title: "Contact James Delas Alas",
  description:
    "Get in touch with James for collaborations, projects, or inquiries.",
};

export default function ContactPage() {
  // Basic form structure. For actual email sending, you'll need a backend or a service like EmailJS, Formspree, etc.
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-primary-text dark:text-white mb-8 text-center">
          Get In Touch
        </h1>
        <p className="text-center text-brand-secondary-text dark:text-gray-300 mb-8">
          Have a project in mind, a question, or just want to say hello? Fill
          out the form below or reach out via my social channels.
        </p>
        <form action="#" method="POST" className="space-y-6">
          {" "}
          {/* Replace # with your form handling endpoint */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-brand-secondary-text dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-brand-accent dark:focus:ring-blue-500 focus:border-brand-accent dark:focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-brand-secondary-text dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-brand-accent dark:focus:ring-blue-500 focus:border-brand-accent dark:focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-brand-secondary-text dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-brand-accent dark:focus:ring-blue-500 focus:border-brand-accent dark:focus:border-blue-500 sm:text-sm"
              defaultValue={""}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent dark:focus:ring-blue-500 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-brand-secondary-text dark:text-gray-400">
            Or find me on:
          </p>
          <div className="flex justify-center mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
