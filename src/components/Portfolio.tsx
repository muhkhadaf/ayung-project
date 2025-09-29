import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity - Tech Startup',
      category: 'Branding',
      description: 'Identitas visual lengkap untuk startup teknologi dengan konsep modern dan futuristik.',
      image: '/Ayung_Project.png', // Using the logo as placeholder
      tags: ['Logo Design', 'Brand Guidelines', 'Business Card']
    },
    {
      id: 2,
      title: 'E-commerce Website Design',
      category: 'Web Design',
      description: 'Desain website e-commerce yang user-friendly dengan fokus pada konversi penjualan.',
      image: '/Ayung_Project.png',
      tags: ['UI/UX', 'Responsive', 'E-commerce']
    },
    {
      id: 3,
      title: 'Restaurant Branding Package',
      category: 'Branding',
      description: 'Paket branding lengkap untuk restoran dengan konsep elegant dan appetizing.',
      image: '/Ayung_Project.png',
      tags: ['Logo', 'Menu Design', 'Packaging']
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Kampanye visual media sosial yang engaging untuk meningkatkan brand awareness.',
      image: '/Ayung_Project.png',
      tags: ['Instagram', 'Facebook', 'Content Design']
    },
    {
      id: 5,
      title: 'Product Packaging Design',
      category: 'Packaging',
      description: 'Desain kemasan produk kosmetik yang premium dan eye-catching di rak toko.',
      image: '/Ayung_Project.png',
      tags: ['Packaging', '3D Mockup', 'Print Design']
    },
    {
      id: 6,
      title: 'Corporate Annual Report',
      category: 'Print Design',
      description: 'Laporan tahunan perusahaan dengan layout yang profesional dan informatif.',
      image: '/Ayung_Project.png',
      tags: ['Layout Design', 'Infographic', 'Corporate']
    }
  ];

  const categories = ['Semua', 'Branding', 'Web Design', 'Social Media', 'Packaging', 'Print Design'];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#11808b] uppercase tracking-wide mb-2">
            Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Karya Terbaik Kami
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai proyek desain yang telah kami kerjakan untuk klien dari berbagai industri. 
            Setiap karya mencerminkan dedikasi kami terhadap kualitas dan kreativitas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-[#11808b] text-[#11808b] hover:bg-[#11808b] hover:text-white transition-colors duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#11808b] to-[#0f6b75] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-32 h-auto opacity-80 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={`/portfolio/${item.id}`}
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
                    {item.tags.map((tag, index) => (
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
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#11808b] to-[#0f6b75] rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Ingin Melihat Portfolio Lengkap?
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Jelajahi lebih banyak karya kami dan temukan inspirasi untuk proyek Anda selanjutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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