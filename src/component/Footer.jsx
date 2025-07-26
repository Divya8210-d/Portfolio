import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700 bg-[#1C1C1E] text-white py-8 px-6 z-50 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Connect Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
          <p>Email: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {currentYear} Divyanshu Choubey. All rights reserved.
      </div>
    </footer>
  );
}
