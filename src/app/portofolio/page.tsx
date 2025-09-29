import Link from 'next/link';
import Image from 'next/image';

const PortfolioDetailPage = () => {
  const portfolioCategories = [
    { id: 'all', name: 'Semua Proyek', count: 24 },
    { id: 'logo', name: 'Logo Design', count: 8 },
    { id: 'web', name: 'Web Design', count: 6 },
    { id: 'social', name: 'Social Media', count: 5 },
    { id: 'print', name: 'Print Design', count: 3 },
    { id: 'banner', name: 'Banner Design', count: 2 }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Rebranding Cafe Nusantara',
      category: 'logo',
      client: 'Cafe Nusantara',
      year: '2024',
      image: '/icons/logo.jpeg',
      description: 'Redesign identitas visual untuk cafe lokal dengan konsep modern minimalis yang tetap mempertahankan nuansa tradisional Indonesia.',
      services: ['Logo Design', 'Brand Guidelines', 'Stationery Design'],
      challenge: 'Menciptakan identitas yang modern namun tetap mencerminkan nilai-nilai tradisional Indonesia.',
      solution: 'Menggunakan tipografi modern dengan elemen visual yang terinspirasi dari motif batik dan warna-warna hangat khas Indonesia.',
      results: ['Peningkatan brand awareness 40%', 'Peningkatan customer engagement 35%', 'Konsistensi brand di semua touchpoint'],
      testimonial: {
        text: "Ayung Project berhasil menangkap visi kami dengan sempurna. Logo baru ini benar-benar merepresentasikan identitas cafe kami.",
        author: "Budi Santoso",
        position: "Owner Cafe Nusantara"
      }
    },
    {
      id: 2,
      title: 'E-commerce Platform TechStore',
      category: 'web',
      client: 'TechStore Indonesia',
      year: '2024',
      image: '/icons/web.jpeg',
      description: 'Pengembangan website e-commerce modern dengan fokus pada user experience dan conversion optimization.',
      services: ['Web Design', 'UI/UX Design', 'E-commerce Development'],
      challenge: 'Menciptakan platform e-commerce yang user-friendly dengan tingkat konversi tinggi di pasar yang kompetitif.',
      solution: 'Implementasi design system yang konsisten, optimasi loading speed, dan checkout process yang streamlined.',
      results: ['Peningkatan conversion rate 60%', 'Penurunan bounce rate 45%', 'Peningkatan average session duration 50%'],
      testimonial: {
        text: "Website baru kami tidak hanya terlihat profesional, tapi juga sangat mudah digunakan. Penjualan online meningkat drastis!",
        author: "Sarah Wijaya",
        position: "Marketing Manager TechStore"
      }
    },
    {
      id: 3,
      title: 'Social Media Campaign FashionHub',
      category: 'social',
      client: 'FashionHub Boutique',
      year: '2024',
      image: '/icons/feed.jpeg',
      description: 'Kampanye media sosial komprehensif untuk meningkatkan brand awareness dan engagement di platform digital.',
      services: ['Social Media Design', 'Content Strategy', 'Brand Photography'],
      challenge: 'Meningkatkan engagement rate dan follower growth di tengah persaingan ketat fashion retail.',
      solution: 'Strategi konten yang konsisten dengan visual yang menarik dan storytelling yang engaging.',
      results: ['Peningkatan follower 150%', 'Engagement rate naik 80%', 'Reach organik meningkat 120%'],
      testimonial: {
        text: "Tim Ayung Project memahami target market kami dengan baik. Konten yang dibuat selalu on-point dan engaging.",
        author: "Maya Sari",
        position: "Brand Manager FashionHub"
      }
    },
    {
      id: 4,
      title: 'Corporate Brochure PT. Maju Bersama',
      category: 'print',
      client: 'PT. Maju Bersama',
      year: '2024',
      image: '/icons/brosur.jpeg',
      description: 'Desain company profile dan marketing materials untuk perusahaan konstruksi dengan pendekatan profesional.',
      services: ['Print Design', 'Company Profile', 'Marketing Collateral'],
      challenge: 'Menciptakan materi marketing yang dapat membangun trust dan kredibilitas di industri konstruksi.',
      solution: 'Desain yang clean dan profesional dengan penggunaan fotografi berkualitas tinggi dan infografis yang informatif.',
      results: ['Peningkatan lead generation 45%', 'Closing rate naik 30%', 'Brand perception lebih profesional'],
      testimonial: {
        text: "Company profile yang dibuat sangat membantu dalam presentasi ke klien. Desainnya profesional dan informatif.",
        author: "Ir. Bambang Sutrisno",
        position: "Director PT. Maju Bersama"
      }
    },
    {
      id: 5,
      title: 'Digital Banner Campaign StartupTech',
      category: 'banner',
      client: 'StartupTech Solutions',
      year: '2024',
      image: '/icons/banner.jpeg',
      description: 'Kampanye digital advertising dengan berbagai variasi banner untuk meningkatkan brand awareness startup teknologi.',
      services: ['Banner Design', 'Digital Advertising', 'A/B Testing Design'],
      challenge: 'Menciptakan banner ads yang dapat menarik perhatian target audience di tengah information overload.',
      solution: 'Desain yang bold dan eye-catching dengan clear call-to-action dan value proposition yang kuat.',
      results: ['CTR meningkat 85%', 'Cost per acquisition turun 40%', 'Brand recall naik 65%'],
      testimonial: {
        text: "Banner ads yang dibuat sangat efektif. ROI dari campaign digital kami meningkat signifikan.",
        author: "David Chen",
        position: "Marketing Lead StartupTech"
      }
    },
    {
      id: 6,
      title: 'Complete Brand Identity RestoCafe',
      category: 'logo',
      client: 'RestoCafe Modern',
      year: '2023',
      image: '/icons/compro.jpeg',
      description: 'Pengembangan identitas brand lengkap untuk restaurant modern dengan konsep farm-to-table.',
      services: ['Logo Design', 'Brand Identity', 'Menu Design', 'Signage'],
      challenge: 'Menciptakan brand identity yang mencerminkan konsep fresh, natural, dan modern.',
      solution: 'Penggunaan palet warna natural, tipografi yang clean, dan elemen visual yang terinspirasi dari alam.',
      results: ['Brand recognition meningkat 70%', 'Customer retention naik 45%', 'Premium pricing acceptance 35%'],
      testimonial: {
        text: "Brand identity yang dibuat benar-benar mencerminkan konsep restaurant kami. Pelanggan langsung recognize brand kami.",
        author: "Chef Andrea",
        position: "Owner RestoCafe Modern"
      }
    }
  ];

  const stats = [
    { number: '200+', label: 'Proyek Selesai' },
    { number: '150+', label: 'Klien Puas' },
    { number: '5+', label: 'Tahun Pengalaman' },
    { number: '98%', label: 'Tingkat Kepuasan' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#11808b] to-[#0f6b75] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up">
              Portfolio Karya Kami
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
              Jelajahi koleksi proyek desain terbaik kami yang telah membantu berbagai bisnis mencapai tujuan mereka
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" data-aos="fade-up" data-aos-delay="400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 rounded-full border-2 border-[#11808b] text-[#11808b] hover:bg-[#11808b] hover:text-white transition-all duration-300 font-medium"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12`}>
                {/* Project Image */}
                <div className="lg:w-1/2" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay="200">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="bg-[#11808b] px-3 py-1 rounded-full text-sm font-medium">
                        {portfolioCategories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-delay="400">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{project.year}</span>
                    </div>
                    
                    <p className="text-lg text-[#11808b] font-semibold mb-2">Client: {project.client}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    {/* Services */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Layanan yang Diberikan:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, idx) => (
                          <span key={idx} className="bg-[#11808b]/10 text-[#11808b] px-3 py-1 rounded-full text-sm font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tantangan:</h4>
                        <p className="text-gray-600 text-sm">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solusi:</h4>
                        <p className="text-gray-600 text-sm">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Hasil yang Dicapai:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <svg className="w-8 h-8 text-[#11808b] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                        <div>
                          <p className="text-gray-700 italic mb-3">&ldquo;{project.testimonial.text}&rdquo;</p>
                          <div>
                            <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                            <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Metodologi Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Setiap proyek dikerjakan dengan pendekatan yang terstruktur untuk memastikan hasil yang optimal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: '🎯', 
                title: 'Discovery', 
                desc: 'Memahami tujuan bisnis, target audience, dan kompetitor klien' 
              },
              { 
                icon: '💡', 
                title: 'Ideation', 
                desc: 'Brainstorming konsep kreatif dan strategi desain yang tepat' 
              },
              { 
                icon: '🎨', 
                title: 'Execution', 
                desc: 'Implementasi desain dengan standar kualitas tinggi' 
              },
              { 
                icon: '🚀', 
                title: 'Delivery', 
                desc: 'Penyerahan hasil final dan dukungan implementasi' 
              }
            ].map((process, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Industri yang Kami Layani
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Pengalaman luas di berbagai sektor industri memungkinkan kami memberikan solusi yang tepat sasaran
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Technology', icon: '💻' },
              { name: 'F&B', icon: '🍽️' },
              { name: 'Fashion', icon: '👗' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Education', icon: '🎓' },
              { name: 'Finance', icon: '💰' },
              { name: 'Real Estate', icon: '🏢' },
              { name: 'Automotive', icon: '🚗' },
              { name: 'Beauty', icon: '💄' },
              { name: 'Sports', icon: '⚽' },
              { name: 'Travel', icon: '✈️' },
              { name: 'E-commerce', icon: '🛒' }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-aos="fade-up">
            Siap Menjadi Bagian dari Portfolio Kami?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Mari wujudkan proyek desain impian Anda bersama tim profesional kami. Konsultasi gratis untuk membahas kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20tertarik%20untuk%20memulai%20proyek%20desain"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#11808b] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Mulai Proyek Sekarang
            </a>
            <Link
              href="/layanan"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#11808b] transition-all duration-300 font-bold text-lg"
            >
              Lihat Paket Layanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;