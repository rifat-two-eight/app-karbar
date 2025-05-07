import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <title>App KarBar | About</title>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-3">
          About Our App Store
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Discover, explore, and install the best apps tailored just for you.
        </p>
      </div>

      <section className="space-y-8">
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Who We Are
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We are a team of passionate developers dedicated to building an app
            store that helps users find quality applications across various
            categories including productivity, education, healthcare, and more.
            Our mission is to deliver a smooth and trusted experience while
            browsing or reviewing apps.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            What We Offer
          </h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 text-sm sm:text-base">
            <li>Curated list of top-rated and trending apps</li>
            <li>User-friendly interface for browsing and installing apps</li>
            <li>Secure user authentication and profile-based app history</li>
            <li>Real-time app reviews and ratings</li>
            <li>Category-based browsing and search functionality</li>
          </ul>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Unlike other platforms, our app store prioritizes simplicity, speed,
            and accuracy. We ensure every app goes through basic quality checks,
            so you don't have to worry about scams or broken links.
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Join Us Today
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Start discovering amazing apps and leave your reviews to help others
          in the community.
        </p>
        <a
          href="/"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default About;
