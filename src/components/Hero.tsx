'use client';

import React from 'react';
import Link from 'next/link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#11808b] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#11808b] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#11808b] rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-[#11808b] rounded-full"></div>
      </div>

      {/* SVG Wave Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#11808b" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,245.3C384,277,480,299,576,272C672,245,768,171,864,138.7C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-right" data-aos-delay="100">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
              Wujudkan Visi Kreatif Anda dengan{' '}
              <span className="text-[#11808b]">Desain Profesional</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
              Ayung Project hadir sebagai partner terpercaya untuk semua kebutuhan desain grafis Anda. 
              Dari logo hingga branding lengkap, kami menciptakan identitas visual yang memukau dan berkesan.
            </p>
            
            {/* Key Points */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-left" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#11808b] rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Desain Berkualitas Tinggi</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#11808b] rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Pengerjaan Cepat</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#11808b] rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Harga Terjangkau</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="500">
              <Link
                href="#layanan"
                className="bg-[#11808b] text-white px-8 py-4 rounded-lg hover:bg-[#0f6b75] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Mulai Proyek Anda
              </Link>
              <Link
                href="#portfolio"
                className="border-2 border-[#11808b] text-[#11808b] px-8 py-4 rounded-lg hover:bg-[#11808b] hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500" data-aos="zoom-in" data-aos-delay="400">
              <DotLottieReact
                src="https://lottie.host/a7273477-d8bb-46ad-814e-0c84d9f00fa0/NIbGP1CpE7.lottie"
                loop
                autoplay
                className="w-full h-auto rounded-lg"
                style={{ width: 2000, height: 1500 }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#11808b] rounded-full opacity-20 animate-pulse" data-aos="fade-in" data-aos-delay="600"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#11808b] to-[#0f6b75] rounded-full opacity-10 animate-bounce" data-aos="fade-in" data-aos-delay="700"></div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 z-20" data-aos="flip-left" data-aos-delay="800">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#11808b]">500+</div>
                <div className="text-sm text-gray-600">Proyek Selesai</div>
              </div>
            </div>
            
            <div className="absolute -top-8 right-8 bg-white rounded-lg shadow-lg p-4 transform rotate-12 z-20" data-aos="flip-right" data-aos-delay="900">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#11808b]">98%</div>
                <div className="text-sm text-gray-600">Kepuasan Klien</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#11808b] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#11808b] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;