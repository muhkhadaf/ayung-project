'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Ayung_Project.png"
              alt="Ayung Project Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              className="text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
            >
              Tentang
            </Link>
            <Link
              href="/layanan"
              className="text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
            >
              Layanan
            </Link>
            <Link
              href="/portofolio"
              className="text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#testimoni"
              className="text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
            >
              Testimoni
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/layanan"
              className="bg-[#11808b] text-white px-6 py-2 rounded-lg hover:bg-[#0f6b75] transition-colors duration-300 font-medium"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              className="block text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link
              href="/layanan"
              className="block text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              href="/portofolio"
              className="block text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#testimoni"
              className="block text-gray-700 hover:text-[#11808b] transition-colors duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Link
              href="/layanan"
              className="block bg-[#11808b] text-white px-6 py-2 rounded-lg hover:bg-[#0f6b75] transition-colors duration-300 font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;