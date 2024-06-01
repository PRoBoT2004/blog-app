// About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="mt-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-500 dark:text-violet-500">About Blog App</h1>
        <p className="text-lg text-gray-800 dark:text-gray-300">Welcome to Blog App, your go-to platform for discovering insightful articles, engaging with a vibrant community, and sharing your own thoughts and ideas. Our mission is to provide a user-friendly and feature-rich blogging experience that empowers individuals and businesses to express themselves and connect with others.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Our Mission</h2>
        <p className="text-lg text-gray-800 dark:text-gray-300">At Blog App, our mission is to foster a creative and inclusive environment where users can freely express themselves, explore diverse perspectives, and build meaningful connections. We strive to continuously innovate and improve our platform to meet the evolving needs of our community.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Meet Our Team</h2>
        <div className="flex items-center space-x-4">
          {/* Dummy Team Member 1 */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src="src/assets/images/logo1.jpg" alt="Team Member 1" className="h-24 w-24 rounded-full" />
            <h3 className="text-lg font-semibold mt-2">John Doe</h3>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
          {/* Dummy Team Member 2 */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src="src/assets/images/logo1.jpg" alt="Team Member 2" className="h-24 w-24 rounded-full" />
            <h3 className="text-lg font-semibold mt-2">Jane Smith</h3>
            <p className="text-sm text-gray-600">Backend Developer</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-300">
          <li>Empowerment: We empower individuals to share their stories and ideas.</li>
          <li>Inclusivity: We celebrate diversity and foster an inclusive community.</li>
          <li>Innovation: We continuously innovate to provide the best user experience.</li>
          <li>Collaboration: We believe in the power of collaboration and teamwork.</li>
        </ul>
      </section>

      <section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Our Features</h2>
  <ul className="list-disc list-inside text-lg text-gray-800 dark:text-gray-300">
    <li>Feature 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Feature 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    <li>Feature 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
    <li>Feature 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
  </ul>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Our Vision</h2>
  <p className="text-lg text-gray-800 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam justo nec ex ultricies, eget pulvinar risus lacinia. Duis ultricies urna eu ligula vestibulum, ac fermentum ex blandit. Duis consectetur dolor vitae lorem ultricies, a blandit purus varius. Morbi nec congue arcu.</p>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Join Our Community</h2>
  <p className="text-lg text-gray-800 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec ultricies felis. Integer vel justo nec nisl feugiat sollicitudin. Vestibulum sodales, leo vel sagittis consectetur, sapien diam feugiat velit, nec varius lorem metus ac magna. Ut tincidunt enim id luctus rhoncus.</p>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Sign Up</button>
</section>

<section className="mt-8">
  <h2 className="text-2xl font-semibold mb-4 text-blue-500 dark:text-violet-500">Contact Us</h2>
  <p className="text-lg text-gray-800 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu odio in ipsum aliquam dictum. Phasellus pretium dui at nibh pretium, ut tempus tortor facilisis. Sed interdum, metus at convallis vestibulum, massa odio placerat turpis, id gravida eros felis in odio.</p>
</section>

      {/* Additional sections can be added similarly */}
    </div>
  );
};

export default About;
