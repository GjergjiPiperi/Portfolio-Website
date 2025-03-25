import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex fixed top-0 left-0 w-full z-50 justify-between items-center py-6 px-8 md:px-32 bg-[#A8A9AD] drop-shadow-md">
      <div>
        <img src="/images/logo.png" alt="" className="w-[9rem]" />
      </div>

      {/* Desktop Menu */}
      <ul className="items-center hidden gap-12 text-base font-semibold xl:flex">
        <li>
          <Link
            className="p-3 hover:bg-[#3A3B3C] hover:text-white rounded-md transition-all cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-3 hover:bg-[#3A3B3C] hover:text-white rounded-md transition-all cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-3 hover:bg-[#3A3B3C] hover:text-white rounded-md transition-all cursor-pointer"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="p-3 hover:bg-[#3A3B3C] hover:text-white rounded-md transition-all cursor-pointer"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
      </ul>

      {/* Contact Button (Desktop) */}
      <div className="relative items-center justify-center hidden gap-3 md:flex">
        <button className="ml-auto bg-[#3A3B3C] px-6 py-2 rounded-xl text-white font-medium hover:bg-[#5A5B5C] transition duration-300">
          <Link
            className="cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </button>
      </div>

      {/* Hamburger Icon */}
      <i
        className="block text-5xl cursor-pointer bx bx-menu xl:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      {/* Mobile Menu */}
      <div
        className={`absolute xl:hidden top-24 left-0 w-full bg-[#A8A9AD] flex flex-col items-center gap-7 font-semibold text-lg transition-all ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <ul className="w-full">
          <li className="list-none w-full text-center p-4 hover:bg-[#3A3B3C] hover:text-white transition-all cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3A3B3C] hover:text-white transition-all cursor-pointer">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3A3B3C] hover:text-white transition-all cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3A3B3C] hover:text-white transition-all cursor-pointer">
            <Link
              to="work"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-[#3A3B3C] hover:text-white transition-all cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
