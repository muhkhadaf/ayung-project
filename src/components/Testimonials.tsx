import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      position: 'CEO, TechStart Indonesia',
      company: 'TechStart Indonesia',
      content: 'Ayung Project berhasil menciptakan identitas visual yang sempurna untuk startup kami. Tim mereka sangat profesional dan memahami visi bisnis kami dengan baik. Hasil akhirnya melebihi ekspektasi!',
      rating: 5,
      image: '/Ayung_Project.png', // Using logo as placeholder
      project: 'Brand Identity & Logo Design'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      position: 'Marketing Manager',
      company: 'Resto Nusantara',
      content: 'Desain kemasan produk yang dibuat Ayung Project sangat membantu meningkatkan penjualan kami. Desainnya eye-catching dan sesuai dengan target market. Highly recommended!',
      rating: 5,
      image: '/Ayung_Project.png',
      project: 'Packaging Design'
    },
    {
      id: 3,
      name: 'Maya Sari',
      position: 'Founder',
      company: 'Beauty Glow',
      content: 'Pelayanan yang sangat memuaskan! Tim Ayung Project sangat responsif dan selalu memberikan revisi sesuai permintaan. Website yang mereka buat sangat user-friendly dan conversion rate kami meningkat 40%.',
      rating: 5,
      image: '/Ayung_Project.png',
      project: 'Website Design & Development'
    },
    {
      id: 4,
      name: 'Ahmad Rahman',
      position: 'Director',
      company: 'Konsultan Bisnis Pro',
      content: 'Kualitas desain yang luar biasa dengan harga yang sangat kompetitif. Ayung Project membantu kami menciptakan materi presentasi yang profesional dan menarik untuk klien korporat.',
      rating: 5,
      image: '/Ayung_Project.png',
      project: 'Corporate Presentation Design'
    },
    {
      id: 5,
      name: 'Lisa Permata',
      position: 'Social Media Manager',
      company: 'Fashion Forward',
      content: 'Kampanye visual media sosial yang dibuat sangat engaging dan sesuai dengan brand personality kami. Engagement rate meningkat signifikan setelah menggunakan jasa Ayung Project.',
      rating: 5,
      image: '/Ayung_Project.png',
      project: 'Social Media Design'
    },
    {
      id: 6,
      name: 'Rizky Pratama',
      position: 'Owner',
      company: 'Kafe Kopi Lokal',
      content: 'Dari logo hingga interior design, semuanya dikerjakan dengan detail dan sesuai konsep yang kami inginkan. Pelanggan sering memuji desain kafe kami yang unik dan instagramable.',
      rating: 5,
      image: '/Ayung_Project.png',
      project: 'Complete Branding Package'
    }
  ];

  const stats = [
    { number: '200+', label: 'Klien Puas' },
    { number: '500+', label: 'Proyek Selesai' },
    { number: '98%', label: 'Tingkat Kepuasan' },
    { number: '5', label: 'Tahun Pengalaman' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#11808b] uppercase tracking-wide mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Apa Kata Klien Kami
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang 
            pengalaman bekerja sama dengan Ayung Project.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[#11808b] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Project Type */}
              <div className="mb-4">
                <span className="text-sm font-medium text-[#11808b] bg-[#11808b] bg-opacity-10 px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#11808b] to-[#0f6b75] rounded-full flex items-center justify-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={24}
                      height={24}
                      className="w-6 h-auto opacity-80"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-[#11808b] font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabunglah dengan Klien yang Puas
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              Ratusan klien telah mempercayakan proyek desain mereka kepada kami. 
              Saatnya giliran Anda merasakan pengalaman yang sama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20tertarik%20dengan%20layanan%20desain%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#11808b] text-white px-8 py-3 rounded-lg hover:bg-[#0f6b75] transition-colors duration-300 font-semibold inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Konsultasi Gratis
              </a>
              <a
                href="#layanan"
                className="border-2 border-[#11808b] text-[#11808b] px-8 py-3 rounded-lg hover:bg-[#11808b] hover:text-white transition-colors duration-300 font-semibold"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;