import Link from 'next/link';
import Image from 'next/image';

const ServicesDetailPage = () => {
  const services = [
    {
      id: 'logo-design',
      title: 'Logo Design',
      subtitle: 'Identitas Visual yang Memorable',
      description: 'Ciptakan identitas brand yang kuat dengan desain logo profesional yang mencerminkan nilai dan kepribadian bisnis Anda.',
      image: '/icons/logo.jpeg',
      price: 'Mulai dari Rp 150.000',
      features: [
        '3 Konsep desain awal',
        '2x Revisi gratis',
        'File format PNG, JPG, SVG',
        'Panduan penggunaan logo',
        'Hak cipta penuh'
      ],
      process: [
        'Konsultasi kebutuhan brand',
        'Riset kompetitor dan target market',
        'Sketsa dan konsep awal',
        'Digitalisasi dan refinement',
        'Presentasi dan revisi',
        'Final delivery'
      ],
      portfolio: [
        'Logo startup teknologi',
        'Logo restaurant & cafe',
        'Logo fashion brand',
        'Logo corporate'
      ]
    },
    {
      id: 'web-design',
      title: 'Web Design',
      subtitle: 'Website Modern & Responsif',
      description: 'Bangun kehadiran online yang profesional dengan desain website yang menarik, user-friendly, dan mobile-responsive.',
      image: '/icons/web.jpeg',
      price: 'Mulai dari Rp 2.500.000',
      features: [
        'Desain UI/UX modern',
        'Responsive design',
        'SEO-friendly structure',
        'Loading speed optimization',
        'Content management system',
        '1 tahun maintenance'
      ],
      process: [
        'Analisis kebutuhan bisnis',
        'Wireframe dan sitemap',
        'UI/UX design mockup',
        'Development & coding',
        'Testing & optimization',
        'Launch & training'
      ],
      portfolio: [
        'E-commerce website',
        'Company profile',
        'Portfolio website',
        'Landing page'
      ]
    },
    {
      id: 'social-media',
      title: 'Social Media Design',
      subtitle: 'Konten Visual yang Engaging',
      description: 'Tingkatkan engagement media sosial dengan desain konten yang menarik dan konsisten dengan brand identity Anda.',
      image: '/icons/feed.jpeg',
      price: 'Mulai dari Rp 500.000/bulan',
      features: [
        '20 desain post per bulan',
        '5 desain story template',
        'Brand guideline konsisten',
        'Hashtag strategy',
        'Content calendar',
        'Analytics report'
      ],
      process: [
        'Brand audit & strategy',
        'Content planning',
        'Design creation',
        'Review & approval',
        'Scheduling & posting',
        'Performance monitoring'
      ],
      portfolio: [
        'Instagram feed design',
        'Facebook ads creative',
        'LinkedIn company posts',
        'TikTok content design'
      ]
    },
    {
      id: 'print-design',
      title: 'Print Design',
      subtitle: 'Materi Cetak Berkualitas Tinggi',
      description: 'Desain materi cetak profesional untuk kebutuhan marketing, branding, dan komunikasi bisnis Anda.',
      image: '/icons/brosur.jpeg',
      price: 'Mulai dari Rp 75.000',
      features: [
        'High resolution design',
        'Print-ready files',
        'Multiple format options',
        'Color profile accuracy',
        'Bleed & margin setup',
        'Printing consultation'
      ],
      process: [
        'Brief & requirement gathering',
        'Concept development',
        'Design creation',
        'Client review & revision',
        'Print preparation',
        'Quality assurance'
      ],
      portfolio: [
        'Business card & letterhead',
        'Brochure & flyer',
        'Banner & poster',
        'Packaging design'
      ]
    },
    {
      id: 'banner-design',
      title: 'Banner Design',
      subtitle: 'Promosi Visual yang Impactful',
      description: 'Ciptakan banner promosi yang eye-catching untuk berbagai kebutuhan marketing online dan offline Anda.',
      image: '/icons/banner.jpeg',
      price: 'Mulai dari Rp 100.000',
      features: [
        'Multiple size variations',
        'Animated banner options',
        'Brand consistent design',
        'Call-to-action optimization',
        'A/B testing versions',
        'Usage guidelines'
      ],
      process: [
        'Campaign objective analysis',
        'Target audience research',
        'Creative concept development',
        'Design execution',
        'Testing & optimization',
        'Final delivery'
      ],
      portfolio: [
        'Google Ads banner',
        'Facebook ads creative',
        'Website header banner',
        'Event promotion banner'
      ]
    },
    {
      id: 'company-profile',
      title: 'Company Profile',
      subtitle: 'Profil Perusahaan yang Profesional',
      description: 'Presentasikan perusahaan Anda dengan company profile yang profesional dan meyakinkan untuk calon klien dan investor.',
      image: '/icons/compro.jpeg',
      price: 'Mulai dari Rp 1.200.000',
      features: [
        'Professional layout design',
        'Infographic elements',
        'High-quality imagery',
        'Print & digital versions',
        'Multiple language options',
        'Editable source files'
      ],
      process: [
        'Company information gathering',
        'Content structuring',
        'Visual concept development',
        'Design & layout creation',
        'Content integration',
        'Final review & delivery'
      ],
      portfolio: [
        'Corporate company profile',
        'Startup pitch deck',
        'Service company profile',
        'Manufacturing profile'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#11808b] to-[#0f6b75] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up">
              Layanan Desain Profesional
            </h1>
            <p className="text-xl sm:text-2xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
              Solusi lengkap untuk semua kebutuhan desain bisnis Anda dengan kualitas terjamin dan harga kompetitif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20desain"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#11808b] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center"
              >
                Konsultasi Gratis
              </a>
              <Link
                href="#layanan-detail"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#11808b] transition-all duration-300 font-bold text-lg"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section id="layanan-detail" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Paket Layanan Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Pilih paket layanan yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk konsultasi gratis dan revisi.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Image */}
                <div className="lg:w-1/2" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay="200">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-delay="400">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-lg text-[#11808b] font-semibold mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-[#11808b]">{service.price}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Yang Anda Dapatkan:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20tertarik%20dengan%20layanan%20${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#11808b] text-white py-3 px-6 rounded-lg hover:bg-[#0f6b75] transition-all duration-300 font-semibold text-center block"
                    >
                      Pesan Sekarang
                    </a>
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
              Proses Kerja Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Metodologi yang terstruktur untuk memastikan hasil terbaik sesuai ekspektasi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Konsultasi & Brief', desc: 'Memahami kebutuhan dan tujuan proyek Anda' },
              { step: '02', title: 'Riset & Analisis', desc: 'Mempelajari target market dan kompetitor' },
              { step: '03', title: 'Konsep & Sketsa', desc: 'Mengembangkan ide kreatif dan konsep desain' },
              { step: '04', title: 'Desain & Eksekusi', desc: 'Merealisasikan konsep menjadi desain final' },
              { step: '05', title: 'Review & Revisi', desc: 'Penyempurnaan berdasarkan feedback Anda' },
              { step: '06', title: 'Delivery & Support', desc: 'Penyerahan file final dan dukungan teknis' }
            ].map((process, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-[#11808b] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Berapa lama waktu pengerjaan untuk setiap layanan?',
                a: 'Waktu pengerjaan bervariasi tergantung kompleksitas: Logo Design 3-5 hari, Web Design 2-4 minggu, Social Media Design 1-2 minggu, Print Design 2-7 hari.'
              },
              {
                q: 'Apakah ada garansi revisi?',
                a: 'Ya, setiap paket sudah termasuk 2x revisi gratis. Revisi tambahan dikenakan biaya sesuai kesepakatan.'
              },
              {
                q: 'Format file apa saja yang akan diberikan?',
                a: 'Kami menyediakan file dalam berbagai format sesuai kebutuhan: PNG, JPG, SVG, PDF, AI, PSD, dan format lainnya sesuai permintaan.'
              },
              {
                q: 'Apakah bisa konsultasi dulu sebelum order?',
                a: 'Tentu! Kami menyediakan konsultasi gratis untuk memahami kebutuhan Anda sebelum memulai proyek.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#11808b] to-[#0f6b75] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-aos="fade-up">
            Siap Memulai Proyek Desain Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan desain Anda.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20desain"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#11808b] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center"
            data-aos="zoom-in" 
            data-aos-delay="400"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailPage;