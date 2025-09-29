'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Tag, ExternalLink, Star, Clock, Target, Award } from 'lucide-react';

const PortfolioDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const portfolioItems = {
    '1': {
      title: 'Brand Identity - Tech Startup',
      category: 'Branding',
      client: 'TechNova Solutions',
      year: '2024',
      duration: '6 Minggu',
      description: 'Proyek pengembangan identitas visual lengkap untuk startup teknologi yang berfokus pada solusi AI dan machine learning. Kami menciptakan brand identity yang modern, futuristik, dan mencerminkan inovasi teknologi terdepan.',
      challenge: 'Klien membutuhkan brand identity yang dapat membedakan mereka dari kompetitor di industri tech yang sangat kompetitif, sambil tetap terlihat profesional dan dapat dipercaya oleh investor dan enterprise clients.',
      solution: 'Kami mengembangkan konsep visual yang menggabungkan elemen teknologi dengan sentuhan human-centered design. Logo menggunakan geometri yang clean dengan gradient yang mencerminkan dinamika dan inovasi.',
      results: [
        'Brand recognition meningkat 300% dalam 3 bulan',
        'Berhasil mendapatkan funding Series A sebesar $2M',
        'Website conversion rate meningkat 150%',
        'Social media engagement naik 400%'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Logo Design & Variations' },
        { url: '/Ayung_Project.png', caption: 'Business Card Design' },
        { url: '/Ayung_Project.png', caption: 'Brand Guidelines' },
        { url: '/Ayung_Project.png', caption: 'Website Implementation' },
        { url: '/Ayung_Project.png', caption: 'Marketing Materials' },
        { url: '/Ayung_Project.png', caption: 'Brand Mockups' }
      ],
      tags: ['Logo Design', 'Brand Guidelines', 'Business Card', 'Letterhead', 'Website Design', 'Marketing Materials'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign'],
      testimonial: {
        text: 'Ayung Project berhasil menangkap visi kami dengan sempurna. Brand identity yang mereka ciptakan tidak hanya indah, tetapi juga sangat efektif dalam membantu kami mendapatkan investor dan klien enterprise.',
        author: 'Sarah Johnson',
        position: 'CEO, TechNova Solutions',
        rating: 5
      }
    },
    '2': {
      title: 'E-commerce Website Design',
      category: 'Web Design',
      client: 'Fashion Forward Store',
      year: '2024',
      duration: '8 Minggu',
      description: 'Desain dan pengembangan website e-commerce untuk brand fashion yang berfokus pada user experience dan conversion optimization. Website dirancang untuk memberikan pengalaman berbelanja yang seamless dan engaging.',
      challenge: 'Klien memiliki conversion rate yang rendah di website lama dan tingkat bounce rate yang tinggi. Mereka membutuhkan redesign yang dapat meningkatkan penjualan online dan customer retention.',
      solution: 'Kami melakukan UX research mendalam, menganalisis customer journey, dan merancang interface yang intuitive dengan fokus pada product discovery dan checkout process yang simplified.',
      results: [
        'Conversion rate meningkat 180%',
        'Bounce rate turun 45%',
        'Average order value naik 65%',
        'Mobile sales meningkat 220%'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Homepage Design' },
        { url: '/Ayung_Project.png', caption: 'Product Listing Page' },
        { url: '/Ayung_Project.png', caption: 'Product Detail Page' },
        { url: '/Ayung_Project.png', caption: 'Shopping Cart & Checkout' },
        { url: '/Ayung_Project.png', caption: 'Mobile Responsive Design' },
        { url: '/Ayung_Project.png', caption: 'User Dashboard' }
      ],
      tags: ['UI/UX Design', 'Responsive Design', 'E-commerce', 'User Research', 'Conversion Optimization', 'Mobile First'],
      tools: ['Figma', 'Adobe XD', 'Principle', 'Zeplin'],
      testimonial: {
        text: 'Website baru kami tidak hanya terlihat stunning, tetapi juga sangat functional. Penjualan online kami meningkat drastis sejak launching website yang dirancang oleh Ayung Project.',
        author: 'Michael Chen',
        position: 'Founder, Fashion Forward Store',
        rating: 5
      }
    },
    '3': {
      title: 'Restaurant Branding Package',
      category: 'Branding',
      client: 'Nusantara Rasa',
      year: '2024',
      duration: '5 Minggu',
      description: 'Pengembangan brand identity lengkap untuk restoran Indonesia modern yang menggabungkan cita rasa tradisional dengan presentasi kontemporer. Branding dirancang untuk menarik target market urban millennials.',
      challenge: 'Restoran baru yang ingin memposisikan diri sebagai fine dining Indonesia modern, namun tetap accessible dan tidak intimidating bagi customer dari berbagai kalangan.',
      solution: 'Kami mengembangkan visual identity yang sophisticated namun warm, menggunakan elemen tradisional Indonesia yang diinterpretasi dengan cara modern dan elegant.',
      results: [
        'Grand opening sold out selama 2 minggu',
        'Featured di 5 media kuliner terkemuka',
        'Instagram followers mencapai 10K dalam 1 bulan',
        'Reservasi booking rate 95% di bulan pertama'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Logo & Brand Mark' },
        { url: '/Ayung_Project.png', caption: 'Menu Design' },
        { url: '/Ayung_Project.png', caption: 'Restaurant Signage' },
        { url: '/Ayung_Project.png', caption: 'Packaging Design' },
        { url: '/Ayung_Project.png', caption: 'Interior Branding' },
        { url: '/Ayung_Project.png', caption: 'Marketing Collaterals' }
      ],
      tags: ['Restaurant Branding', 'Menu Design', 'Packaging', 'Signage', 'Interior Graphics', 'Cultural Design'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Cinema 4D'],
      testimonial: {
        text: 'Branding yang dibuat Ayung Project benar-benar menangkap essence dari konsep restoran kami. Customers sering compliment tentang visual identity kami yang memorable dan Instagram-worthy.',
        author: 'Chef Andi Wijaya',
        position: 'Head Chef & Owner, Nusantara Rasa',
        rating: 5
      }
    },
    '4': {
      title: 'Social Media Campaign',
      category: 'Social Media',
      client: 'EcoLife Products',
      year: '2024',
      duration: '3 Bulan',
      description: 'Kampanye visual media sosial untuk brand produk ramah lingkungan yang bertujuan meningkatkan awareness tentang sustainability dan mendorong lifestyle yang lebih eco-friendly.',
      challenge: 'Brand baru di market sustainability yang sangat kompetitif. Perlu menciptakan content yang engaging dan educational tanpa terkesan preachy atau boring.',
      solution: 'Kami mengembangkan visual storytelling yang engaging dengan menggunakan ilustrasi custom, infografis yang mudah dipahami, dan photography yang natural dan authentic.',
      results: [
        'Instagram engagement rate 8.5% (industry average 1.2%)',
        'Follower growth 500% dalam 3 bulan',
        'User-generated content meningkat 300%',
        'Website traffic dari social media naik 400%'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Instagram Feed Design' },
        { url: '/Ayung_Project.png', caption: 'Instagram Stories Templates' },
        { url: '/Ayung_Project.png', caption: 'Educational Infographics' },
        { url: '/Ayung_Project.png', caption: 'Product Photography' },
        { url: '/Ayung_Project.png', caption: 'Campaign Visuals' },
        { url: '/Ayung_Project.png', caption: 'Video Content Storyboard' }
      ],
      tags: ['Social Media Design', 'Content Strategy', 'Infographics', 'Photography', 'Video Content', 'Sustainability'],
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'After Effects'],
      testimonial: {
        text: 'Kampanye social media dari Ayung Project tidak hanya beautiful secara visual, tetapi juga sangat effective dalam menyampaikan message sustainability kami. Engagement dan sales meningkat significantly.',
        author: 'Lisa Green',
        position: 'Marketing Director, EcoLife Products',
        rating: 5
      }
    },
    '5': {
      title: 'Product Packaging Design',
      category: 'Packaging',
      client: 'Glow Beauty Co.',
      year: '2024',
      duration: '4 Minggu',
      description: 'Desain kemasan untuk line produk skincare premium yang berfokus pada natural ingredients. Packaging dirancang untuk mencerminkan luxury dan sustainability sekaligus.',
      challenge: 'Menciptakan packaging yang premium dan luxurious namun tetap eco-friendly, serta dapat stand out di competitive beauty market yang sangat visual-driven.',
      solution: 'Kami menggunakan sustainable materials dengan finishing techniques yang memberikan premium feel. Design menggunakan minimalist approach dengan accent foil yang elegant.',
      results: [
        'Product launch sold out dalam 48 jam',
        'Featured di 3 beauty magazines',
        'Packaging design memenangkan local design award',
        'Reorder rate 85% dari first-time buyers'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Product Line Packaging' },
        { url: '/Ayung_Project.png', caption: '3D Packaging Mockups' },
        { url: '/Ayung_Project.png', caption: 'Unboxing Experience' },
        { url: '/Ayung_Project.png', caption: 'Retail Display Design' },
        { url: '/Ayung_Project.png', caption: 'Packaging Variations' },
        { url: '/Ayung_Project.png', caption: 'Sustainable Materials' }
      ],
      tags: ['Packaging Design', 'Luxury Branding', 'Sustainable Design', '3D Mockup', 'Beauty Industry', 'Premium Products'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Cinema 4D', 'KeyShot'],
      testimonial: {
        text: 'Packaging design dari Ayung Project benar-benar elevate produk kami. Customers sering bilang bahwa unboxing experience-nya premium banget dan packaging-nya too pretty to throw away.',
        author: 'Amanda Sari',
        position: 'Brand Manager, Glow Beauty Co.',
        rating: 5
      }
    },
    '6': {
      title: 'Corporate Annual Report',
      category: 'Print Design',
      client: 'Mandiri Financial Group',
      year: '2024',
      duration: '6 Minggu',
      description: 'Desain laporan tahunan untuk perusahaan finansial besar yang harus menyajikan data kompleks dalam format yang mudah dipahami dan visually appealing untuk stakeholders dan investors.',
      challenge: 'Menyajikan data finansial yang kompleks dan technical dalam format yang engaging dan mudah dipahami, sambil tetap mempertahankan kredibilitas dan profesionalisme corporate.',
      solution: 'Kami menggunakan data visualization yang innovative, infografis yang clear, dan layout yang clean untuk membuat informasi kompleks menjadi accessible dan engaging.',
      results: [
        'Positive feedback dari 95% stakeholders',
        'Report dijadikan benchmark oleh industry peers',
        'Meningkatkan investor confidence score 25%',
        'Memenangkan corporate communication award'
      ],
      images: [
        { url: '/Ayung_Project.png', caption: 'Cover & Introduction' },
        { url: '/Ayung_Project.png', caption: 'Financial Data Visualization' },
        { url: '/Ayung_Project.png', caption: 'Infographic Spreads' },
        { url: '/Ayung_Project.png', caption: 'Executive Summary' },
        { url: '/Ayung_Project.png', caption: 'Corporate Governance' },
        { url: '/Ayung_Project.png', caption: 'Sustainability Report' }
      ],
      tags: ['Annual Report', 'Data Visualization', 'Corporate Design', 'Infographics', 'Financial Communication', 'Print Design'],
      tools: ['Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Excel'],
      testimonial: {
        text: 'Annual report yang dibuat Ayung Project sangat impressive. Mereka berhasil mengubah data yang kompleks menjadi storytelling yang compelling dan mudah dipahami oleh semua stakeholders.',
        author: 'Robert Tanaka',
        position: 'CFO, Mandiri Financial Group',
        rating: 5
      }
    }
  };

  const portfolio = portfolioItems[id as keyof typeof portfolioItems];

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Tidak Ditemukan</h1>
          <Link href="/portofolio" className="text-[#11808b] hover:underline">
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/portofolio" 
            className="inline-flex items-center text-[#11808b] hover:text-[#0f6b75] transition-colors"
            data-aos="fade-right"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {portfolio.category}
                </span>
                <span className="text-blue-100">{portfolio.year}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{portfolio.title}</h1>
              <p className="text-xl mb-6 text-blue-100">Client: {portfolio.client}</p>
              <p className="text-lg mb-8 leading-relaxed">{portfolio.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{portfolio.duration}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <User className="w-5 h-5 mr-2" />
                  <span>{portfolio.client}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{portfolio.year}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan ${portfolio.category} seperti project ${portfolio.title}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Diskusi Project Serupa
                </Link>
                <Link
                  href="#gallery"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#11808b] px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Lihat Gallery
                </Link>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <Image
                  src={portfolio.images[0].url}
                  alt={portfolio.title}
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#11808b] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Challenge</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{portfolio.challenge}</p>
            </div>

            <div data-aos="fade-left">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#11808b] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Solution</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{portfolio.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <p className="text-gray-600">Hasil yang dicapai dari project ini</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.results.map((result, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="w-12 h-12 bg-[#11808b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-gray-600">Lihat detail visual dari project ini</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.images.map((image, index) => (
              <div key={index} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-3 font-medium">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Tags */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Software</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.tools.map((tool, index) => (
                  <span key={index} className="bg-[#11808b] text-white px-4 py-2 rounded-lg font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Tags</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Testimonial</h2>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                {[...Array(portfolio.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{portfolio.testimonial.text}&rdquo;
              </blockquote>
              
              <div>
                <p className="font-bold text-gray-900 text-lg">{portfolio.testimonial.author}</p>
                <p className="text-gray-600">{portfolio.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Tertarik dengan Project Serupa?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Mari diskusikan bagaimana kami dapat membantu project {portfolio.category.toLowerCase()} Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan ${portfolio.category} seperti project ${portfolio.title}`}
              className="bg-white text-[#11808b] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Konsultasi Project
            </Link>
            <Link
              href="/portofolio"
              className="border-2 border-white text-white hover:bg-white hover:text-[#11808b] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Portfolio Lainnya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;