import Image from 'next/image';

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-[#11808b] uppercase tracking-wide mb-2">
                Tentang Kami
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Menciptakan Identitas Visual yang Berkesan
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ayung Project adalah studio desain grafis yang berdedikasi untuk menghadirkan solusi visual kreatif 
                dan profesional. Dengan pengalaman bertahun-tahun di industri desain, kami memahami betul bagaimana 
                menciptakan identitas visual yang tidak hanya menarik, tetapi juga efektif dalam menyampaikan pesan brand Anda.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Tim kreatif kami terdiri dari desainer berpengalaman yang selalu mengikuti tren terkini dalam dunia desain. 
                Kami percaya bahwa setiap brand memiliki cerita unik yang layak untuk diceritakan melalui desain yang memukau.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#11808b] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Kreativitas Tanpa Batas</h4>
                  <p className="text-gray-600">Ide-ide segar dan inovatif untuk setiap proyek desain Anda.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#11808b] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Pengerjaan Cepat</h4>
                  <p className="text-gray-600">Proses kerja yang efisien dengan hasil berkualitas tinggi.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#11808b] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Kualitas Terjamin</h4>
                  <p className="text-gray-600">Standar kualitas tinggi dalam setiap detail desain.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#11808b] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tim Profesional</h4>
                  <p className="text-gray-600">Desainer berpengalaman dengan keahlian di berbagai bidang.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/Ayung_Project.png"
                alt="Tim Ayung Project"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#11808b] rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#11808b] to-[#0f6b75] rounded-full opacity-10"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;