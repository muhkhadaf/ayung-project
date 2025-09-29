import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#11808b] to-[#0f6b75] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white bg-opacity-5 rounded-full -translate-x-32 -translate-y-32" data-aos="fade-right" data-aos-delay="100"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full translate-x-48 translate-y-48" data-aos="fade-left" data-aos-delay="200"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-aos="zoom-in" data-aos-delay="300">
            Siap Mewujudkan
            <span className="block text-yellow-300" data-aos="fade-up" data-aos-delay="500">Visi Kreatif Anda?</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl mb-8 opacity-90 leading-relaxed" data-aos="fade-up" data-aos-delay="600">
            Bergabunglah dengan ratusan klien yang telah mempercayakan proyek desain mereka kepada kami. 
            Dapatkan solusi desain profesional yang akan membuat brand Anda tampil menonjol.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center" data-aos="flip-up" data-aos-delay="700">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pengerjaan Cepat</h3>
              <p className="text-sm opacity-80">Hasil berkualitas dalam waktu yang efisien</p>
            </div>

            <div className="flex flex-col items-center" data-aos="flip-up" data-aos-delay="800">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kualitas Terjamin</h3>
              <p className="text-sm opacity-80">Standar profesional dengan hasil memuaskan</p>
            </div>

            <div className="flex flex-col items-center" data-aos="flip-up" data-aos-delay="900">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Harga Kompetitif</h3>
              <p className="text-sm opacity-80">Investasi terbaik untuk brand Anda</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" data-aos="fade-up" data-aos-delay="1000">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Ayung%20Project%2C%20saya%20ingin%20konsultasi%20tentang%20proyek%20desain%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#11808b] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg inline-flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              data-aos="zoom-in-right" 
              data-aos-delay="1100"
            >
              <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Konsultasi Gratis Sekarang
            </a>

            <Link
              href="#layanan"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#11808b] transition-all duration-300 font-bold text-lg transform hover:-translate-y-1"
              data-aos="zoom-in-left" 
              data-aos-delay="1200"
            >
              Lihat Paket Layanan
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white border-opacity-20 pt-8" data-aos="fade-up" data-aos-delay="1300">
            <p className="text-sm opacity-80 mb-4" data-aos="fade-in" data-aos-delay="1400">Dipercaya oleh 200+ klien dari berbagai industri</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60" data-aos="fade-in" data-aos-delay="1500">
              <div className="text-xs font-medium">✓ Startup Technology</div>
              <div className="text-xs font-medium">✓ Restaurant & F&B</div>
              <div className="text-xs font-medium">✓ Fashion & Beauty</div>
              <div className="text-xs font-medium">✓ Corporate Business</div>
              <div className="text-xs font-medium">✓ E-commerce</div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-4 inline-block" data-aos="bounce-in" data-aos-delay="1600">
            <p className="text-sm font-medium">
              🔥 <span className="text-yellow-300">Promo Spesial:</span> Konsultasi gratis + diskon 15% untuk 10 klien pertama bulan ini!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;