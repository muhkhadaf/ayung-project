'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, Star, Clock, Users, Award } from 'lucide-react';

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const services = {
    'logo-design': {
      title: 'Logo Design',
      subtitle: 'Ciptakan Identitas Brand yang Memorable',
      description: 'Logo adalah wajah pertama brand Anda. Kami menciptakan logo yang tidak hanya indah dipandang, tetapi juga memiliki makna mendalam dan mudah diingat oleh target audience Anda.',
      iconPath: '/icons/logo.jpeg',
      price: 'Rp 500.000',
      originalPrice: 'Rp 750.000',
      duration: '3-5 Hari Kerja',
      revisions: 'Unlimited Revisi',
      features: [
        'Konsep Logo Original & Unik',
        'File Vector (AI, EPS, SVG)',
        'File Raster (PNG, JPG) High Resolution',
        'Logo Variations (Horizontal, Vertical, Icon)',
        'Color & Monochrome Versions',
        'Brand Guidelines Basic',
        'Unlimited Revisi',
        'Commercial License'
      ],
      process: [
        { step: 1, title: 'Brief & Konsultasi', desc: 'Diskusi mendalam tentang brand dan visi Anda' },
        { step: 2, title: 'Research & Konsep', desc: 'Riset kompetitor dan pengembangan konsep awal' },
        { step: 3, title: 'Desain & Presentasi', desc: 'Pembuatan 3-5 konsep logo untuk dipilih' },
        { step: 4, title: 'Revisi & Finalisasi', desc: 'Penyempurnaan berdasarkan feedback Anda' },
        { step: 5, title: 'Delivery', desc: 'Pengiriman file final dalam berbagai format' }
      ],
      portfolio: [
        { name: 'Tech Startup Logo', image: '/icons/logo.jpeg' },
        { name: 'Restaurant Brand', image: '/icons/logo.jpeg' },
        { name: 'Fashion Brand', image: '/icons/logo.jpeg' }
      ],
      testimonials: [
        { name: 'Sarah Johnson', company: 'Tech Innovate', rating: 5, text: 'Logo yang dibuat sangat mencerminkan visi perusahaan kami. Prosesnya juga sangat profesional!' },
        { name: 'Ahmad Rizki', company: 'Warung Nusantara', rating: 5, text: 'Hasil logo melebihi ekspektasi. Tim sangat responsif dan kreatif dalam memberikan solusi.' }
      ]
    },
    'branding': {
      title: 'Branding Package',
      subtitle: 'Paket Lengkap Identitas Visual Brand',
      description: 'Bangun identitas brand yang kuat dan konsisten dengan paket branding lengkap. Dari logo hingga aplikasi di berbagai media, kami pastikan brand Anda tampil profesional di setiap touchpoint.',
      iconPath: '/icons/compro.jpeg',
      price: 'Rp 2.500.000',
      originalPrice: 'Rp 3.500.000',
      duration: '7-10 Hari Kerja',
      revisions: '3x Major Revisi',
      features: [
        'Logo Design + Variations',
        'Business Card Design',
        'Letterhead & Kop Surat',
        'Brand Guidelines Lengkap',
        'Color Palette & Typography',
        'Brand Pattern & Elements',
        'Social Media Template',
        'Email Signature Design',
        'Favicon & App Icon',
        'Brand Mockup Presentation'
      ],
      process: [
        { step: 1, title: 'Brand Discovery', desc: 'Workshop mendalam tentang brand positioning' },
        { step: 2, title: 'Visual Strategy', desc: 'Pengembangan strategi visual dan mood board' },
        { step: 3, title: 'Logo Development', desc: 'Pembuatan logo sebagai fondasi brand' },
        { step: 4, title: 'Brand Extension', desc: 'Aplikasi brand ke berbagai media' },
        { step: 5, title: 'Guidelines Creation', desc: 'Pembuatan panduan penggunaan brand' }
      ],
      portfolio: [
        { name: 'Corporate Branding', image: '/icons/compro.jpeg' },
        { name: 'Startup Identity', image: '/icons/compro.jpeg' },
        { name: 'Restaurant Branding', image: '/icons/compro.jpeg' }
      ],
      testimonials: [
        { name: 'Lisa Chen', company: 'Green Valley Cafe', rating: 5, text: 'Paket branding lengkap yang sangat membantu bisnis kami tampil lebih profesional.' },
        { name: 'Budi Santoso', company: 'Santoso Construction', rating: 5, text: 'Brand guidelines yang detail memudahkan kami dalam konsistensi brand di semua media.' }
      ]
    },
    'web-design': {
      title: 'Web Design',
      subtitle: 'Website Responsif & User-Friendly',
      description: 'Ciptakan website yang tidak hanya cantik, tetapi juga fungsional dan mengkonversi visitor menjadi customer. Desain responsif yang optimal di semua device.',
      iconPath: '/icons/web.jpeg',
      price: 'Rp 3.000.000',
      originalPrice: 'Rp 4.500.000',
      duration: '10-14 Hari Kerja',
      revisions: '2x Major Revisi',
      features: [
        'UI/UX Design Profesional',
        'Responsive Design (Mobile, Tablet, Desktop)',
        'Interactive Prototype',
        'Style Guide & Design System',
        'Landing Page Optimization',
        'SEO-Friendly Structure',
        'Fast Loading Design',
        'Cross-Browser Compatible',
        'Accessibility Standards',
        'Source Files (Figma/Adobe XD)'
      ],
      process: [
        { step: 1, title: 'Requirements Analysis', desc: 'Analisis kebutuhan dan target audience' },
        { step: 2, title: 'Wireframing', desc: 'Pembuatan struktur dan flow website' },
        { step: 3, title: 'UI Design', desc: 'Desain visual interface yang menarik' },
        { step: 4, title: 'Prototype', desc: 'Interactive prototype untuk testing' },
        { step: 5, title: 'Final Design', desc: 'Finalisasi dan handoff untuk development' }
      ],
      portfolio: [
        { name: 'E-commerce Website', image: '/icons/web.jpeg' },
        { name: 'Corporate Website', image: '/icons/web.jpeg' },
        { name: 'Portfolio Website', image: '/icons/web.jpeg' }
      ],
      testimonials: [
        { name: 'Michael Wong', company: 'Digital Solutions', rating: 5, text: 'Desain website yang modern dan user-friendly. Conversion rate meningkat 40% setelah redesign!' },
        { name: 'Sari Dewi', company: 'Boutique Fashion', rating: 5, text: 'Website e-commerce yang cantik dan mudah digunakan. Customer sangat puas dengan experience-nya.' }
      ]
    },
    'print-design': {
      title: 'Print Design',
      subtitle: 'Desain Media Cetak Berkualitas Tinggi',
      description: 'Dari brosur hingga poster, kami ciptakan desain print yang eye-catching dan efektif untuk kebutuhan promosi dan komunikasi bisnis Anda.',
      iconPath: '/icons/brosur.jpeg',
      price: 'Rp 300.000',
      originalPrice: 'Rp 450.000',
      duration: '2-4 Hari Kerja',
      revisions: 'Unlimited Revisi',
      features: [
        'Print-Ready Design (300 DPI)',
        'CMYK Color Mode',
        'Bleed & Crop Marks',
        'Multiple Size Formats',
        'High Resolution Output',
        'Color Variants Available',
        'Editable Source Files',
        'Print Specification Guide'
      ],
      process: [
        { step: 1, title: 'Content Planning', desc: 'Perencanaan konten dan layout struktur' },
        { step: 2, title: 'Design Creation', desc: 'Pembuatan desain sesuai spesifikasi print' },
        { step: 3, title: 'Review & Revision', desc: 'Review dan penyempurnaan desain' },
        { step: 4, title: 'Print Preparation', desc: 'Persiapan file untuk proses cetak' },
        { step: 5, title: 'Final Delivery', desc: 'Pengiriman file print-ready' }
      ],
      portfolio: [
        { name: 'Company Brochure', image: '/icons/brosur.jpeg' },
        { name: 'Event Flyer', image: '/icons/brosur.jpeg' },
        { name: 'Product Catalog', image: '/icons/brosur.jpeg' }
      ],
      testimonials: [
        { name: 'Andi Pratama', company: 'Event Organizer Pro', rating: 5, text: 'Brosur event kami selalu menarik perhatian berkat desain yang kreatif dan berkualitas.' },
        { name: 'Nina Sari', company: 'Beauty Clinic', rating: 5, text: 'Flyer promosi yang dibuat sangat efektif meningkatkan awareness produk kami.' }
      ]
    },
    'social-media': {
      title: 'Social Media Design',
      subtitle: 'Konten Visual yang Engaging',
      description: 'Tingkatkan engagement dan brand awareness dengan konten visual yang menarik dan konsisten di semua platform media sosial Anda.',
      iconPath: '/icons/feed.jpeg',
      price: 'Rp 200.000',
      originalPrice: 'Rp 300.000',
      duration: '1-3 Hari Kerja',
      revisions: 'Unlimited Revisi',
      features: [
        'Instagram Post & Story Templates',
        'Facebook Cover & Post Design',
        'LinkedIn Banner & Content',
        'Twitter Header & Graphics',
        'YouTube Thumbnail Design',
        'Content Calendar Template',
        'Brand-Consistent Design',
        'Multiple Format Sizes'
      ],
      process: [
        { step: 1, title: 'Platform Analysis', desc: 'Analisis platform dan target audience' },
        { step: 2, title: 'Content Strategy', desc: 'Perencanaan strategi konten visual' },
        { step: 3, title: 'Template Creation', desc: 'Pembuatan template yang reusable' },
        { step: 4, title: 'Content Production', desc: 'Produksi konten sesuai calendar' },
        { step: 5, title: 'Optimization', desc: 'Optimasi untuk setiap platform' }
      ],
      portfolio: [
        { name: 'Instagram Feed Design', image: '/icons/feed.jpeg' },
        { name: 'Facebook Campaign', image: '/icons/feed.jpeg' },
        { name: 'LinkedIn Content', image: '/icons/feed.jpeg' }
      ],
      testimonials: [
        { name: 'Rina Kusuma', company: 'Fashion Boutique', rating: 5, text: 'Engagement Instagram kami meningkat 200% setelah menggunakan template design yang konsisten.' },
        { name: 'Doni Setiawan', company: 'Tech Startup', rating: 5, text: 'Konten LinkedIn kami jadi lebih profesional dan menarik lebih banyak leads.' }
      ]
    },
    'packaging': {
      title: 'Packaging Design',
      subtitle: 'Kemasan Produk yang Memikat',
      description: 'Buat produk Anda stand out di rak dengan desain kemasan yang eye-catching, fungsional, dan mencerminkan kualitas produk di dalamnya.',
      iconPath: '/icons/banner.jpeg',
      price: 'Rp 800.000',
      originalPrice: 'Rp 1.200.000',
      duration: '5-7 Hari Kerja',
      revisions: '2x Major Revisi',
      features: [
        '3D Mockup Visualization',
        'Die-cut Template Design',
        'Print Specification Complete',
        'Multiple Size Variants',
        'Structural Design Guidance',
        'Material Recommendation',
        'Cost-Effective Solutions',
        'Sustainable Design Options'
      ],
      process: [
        { step: 1, title: 'Product Analysis', desc: 'Analisis produk dan target market' },
        { step: 2, title: 'Structural Design', desc: 'Desain struktur kemasan yang optimal' },
        { step: 3, title: 'Visual Design', desc: 'Pengembangan visual dan branding' },
        { step: 4, title: '3D Visualization', desc: 'Pembuatan mockup 3D untuk preview' },
        { step: 5, title: 'Production Ready', desc: 'Finalisasi untuk produksi massal' }
      ],
      portfolio: [
        { name: 'Food Packaging', image: '/icons/banner.jpeg' },
        { name: 'Cosmetic Box', image: '/icons/banner.jpeg' },
        { name: 'Product Label', image: '/icons/banner.jpeg' }
      ],
      testimonials: [
        { name: 'Tono Wijaya', company: 'Snack Factory', rating: 5, text: 'Kemasan produk kami jadi lebih menarik dan penjualan meningkat signifikan di retail.' },
        { name: 'Maya Indira', company: 'Skincare Brand', rating: 5, text: 'Desain packaging yang premium membuat produk kami terlihat lebih berkelas.' }
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Layanan Tidak Ditemukan</h1>
          <Link href="/layanan" className="text-[#11808b] hover:underline">
            Kembali ke Halaman Layanan
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
            href="/layanan" 
            className="inline-flex items-center text-[#11808b] hover:text-[#0f6b75] transition-colors"
            data-aos="fade-right"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Layanan
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl mb-6 text-blue-100">{service.subtitle}</p>
              <p className="text-lg mb-8 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{service.revisions}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan ${service.title}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Pesan Sekarang
                </Link>
                <Link
                  href="#pricing"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#11808b] px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Lihat Harga
                </Link>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <Image
                  src={service.iconPath}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Harga & Paket</h2>
              <p className="text-gray-600">Investasi terbaik untuk brand Anda</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8" data-aos="zoom-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-[#11808b]">{service.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-3">{service.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-green-600 mb-6">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Hemat {Math.round(((parseInt(service.originalPrice.replace(/\D/g, '')) - parseInt(service.price.replace(/\D/g, ''))) / parseInt(service.originalPrice.replace(/\D/g, '')) * 100))}%</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Yang Anda Dapatkan:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Proses Kerja</h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-[#11808b] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan ${service.title} dengan harga ${service.price}`}
                  className="bg-[#11808b] hover:bg-[#0f6b75] text-white px-12 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Pesan Layanan Ini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Terkait</h2>
            <p className="text-gray-600">Lihat hasil karya kami untuk layanan ini</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {service.portfolio.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Client</h2>
            <p className="text-gray-600">Apa kata mereka yang sudah menggunakan layanan ini</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Konsultasikan kebutuhan {service.title.toLowerCase()} Anda dengan tim ahli kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang ${service.title}`}
              className="bg-white text-[#11808b] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="/portofolio"
              className="border-2 border-white text-white hover:bg-white hover:text-[#11808b] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Portfolio Lengkap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;