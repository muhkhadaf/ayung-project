'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Portfolio {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  technologies: string[];
  gallery: string[];
  client_name: string;
  project_date: string;
  is_featured: boolean;
}

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch('/api/portfolios?limit=6&is_featured=true');
        if (response.ok) {
          const data = await response.json();
          setPortfolios(data.portfolios);
        }
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  const staticPortfolios = [
    {
      id: '1',
      title: 'Brand Identity - Tech Startup',
      category: 'Branding',
      description: 'Identitas visual lengkap untuk startup teknologi dengan konsep modern dan futuristik.',
      image_url: '/Ayung_Project.png',
      technologies: ['Logo Design', 'Brand Guidelines', 'Business Card'],
      gallery: [],
      client_name: 'Tech Startup',
      project_date: '2024-01-01',
      is_featured: true
    },
    {
      id: '2',
      title: 'E-commerce Website Design',
      category: 'Web Design',
      description: 'Desain website e-commerce yang user-friendly dengan fokus pada konversi penjualan.',
      image_url: '/Ayung_Project.png',
      technologies: ['UI/UX', 'Responsive', 'E-commerce'],
      gallery: [],
      client_name: 'E-commerce Client',
      project_date: '2024-01-01',
      is_featured: true
    },
    {
      id: '3',
      title: 'Restaurant Branding Package',
      category: 'Branding',
      description: 'Paket branding lengkap untuk restoran dengan konsep elegant dan appetizing.',
      image_url: '/Ayung_Project.png',
      technologies: ['Logo', 'Menu Design', 'Packaging'],
      gallery: [],
      client_name: 'Restaurant Client',
      project_date: '2024-01-01',
      is_featured: true
    },
    {
      id: '4',
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Kampanye visual media sosial yang engaging untuk meningkatkan brand awareness.',
      image_url: '/Ayung_Project.png',
      technologies: ['Instagram', 'Facebook', 'Content Design'],
      gallery: [],
      client_name: 'Social Media Client',
      project_date: '2024-01-01',
      is_featured: true
    },
    {
      id: '5',
      title: 'Product Packaging Design',
      category: 'Packaging',
      description: 'Desain kemasan produk kosmetik yang premium dan eye-catching di rak toko.',
      image_url: '/Ayung_Project.png',
      technologies: ['Packaging', '3D Mockup', 'Print Design'],
      gallery: [],
      client_name: 'Cosmetic Brand',
      project_date: '2024-01-01',
      is_featured: true
    },
    {
      id: '6',
      title: 'Corporate Annual Report',
      category: 'Print Design',
      description: 'Laporan tahunan perusahaan dengan layout yang profesional dan informatif.',
      image_url: '/Ayung_Project.png',
      technologies: ['Layout Design', 'Infographic', 'Corporate'],
      gallery: [],
      client_name: 'Corporate Client',
      project_date: '2024-01-01',
      is_featured: true
    }
  ];

  const displayPortfolios = portfolios && portfolios.length > 0 ? portfolios : staticPortfolios;
  const categories = ['Semua', ...Array.from(new Set(displayPortfolios.map(p => p.category)))];

  const filteredPortfolios = selectedCategory === 'Semua' 
    ? displayPortfolios 
    : displayPortfolios.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#11808b]"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-sm font-semibold text-[#11808b] uppercase tracking-wide mb-2" data-aos="fade-down" data-aos-delay="200">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" data-aos="fade-down" data-aos-delay="300">
            Karya Terbaik Kami
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-down" data-aos-delay="400">
            Lihat berbagai proyek desain yang telah kami kerjakan untuk klien dari berbagai industri. 
            Setiap karya mencerminkan dedikasi kami terhadap kualitas dan kreativitas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="500">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 border-[#11808b] transition-colors duration-300 font-medium ${
                selectedCategory === category
                  ? 'bg-[#11808b] text-white'
                  : 'text-[#11808b] hover:bg-[#11808b] hover:text-white'
              }`}
              data-aos="zoom-in"
              data-aos-delay={600 + (index * 50)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPortfolios.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              data-aos="fade-up-right"
              data-aos-delay={800 + (index * 100)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#11808b] to-[#0f6b75] flex items-center justify-center">
                  {item.image_url && item.image_url.trim() !== '' ? (
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-32 h-auto opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-32 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-medium">No Image</span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={`/portofolio/${item.id}`}
                        className="bg-white text-[#11808b] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#11808b] bg-[#11808b] bg-opacity-10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#11808b] transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" data-aos="slide-up" data-aos-delay="1400">
          <div className="bg-gradient-to-r from-[#11808b] to-[#0f6b75] rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4" data-aos="fade-in" data-aos-delay="1500">
              Ingin Melihat Portfolio Lengkap?
            </h4>
            <p className="text-lg mb-6 opacity-90" data-aos="fade-in" data-aos-delay="1600">
              Jelajahi lebih banyak karya kami dan temukan inspirasi untuk proyek Anda selanjutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-in" data-aos-delay="1700">
              <Link
                href="/portfolio"
                className="bg-white text-[#11808b] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
              >
                Lihat Semua Portfolio
              </Link>
              <Link
                href="#layanan"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#11808b] transition-colors duration-300 font-semibold"
              >
                Mulai Proyek Anda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;