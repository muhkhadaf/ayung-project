'use client';

import { useState, useEffect } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  // Static fallback data
  const staticFaqs = [
    {
      id: 1,
      question: "Berapa lama waktu pengerjaan proyek desain?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk logo dan branding sederhana biasanya 3-7 hari kerja, sedangkan untuk proyek website atau aplikasi mobile bisa memakan waktu 2-4 minggu. Kami akan memberikan timeline yang jelas setelah konsultasi awal.",
      category: "general",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 2,
      question: "Apakah ada revisi yang disediakan?",
      answer: "Ya, kami menyediakan hingga 3 kali revisi gratis untuk setiap proyek. Revisi tambahan dapat dikenakan biaya sesuai dengan kompleksitas perubahan yang diminta. Kami berkomitmen untuk memastikan hasil akhir sesuai dengan ekspektasi Anda.",
      category: "general",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 3,
      question: "Bagaimana sistem pembayaran yang berlaku?",
      answer: "Kami menerapkan sistem pembayaran bertahap: 50% di awal sebagai down payment, dan 50% sisanya setelah proyek selesai. Untuk proyek besar, kami dapat mengatur pembayaran dalam beberapa tahap sesuai milestone yang disepakati.",
      category: "payment",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 4,
      question: "Apakah file sumber (source file) akan diberikan?",
      answer: "Ya, setelah pembayaran lunas, Anda akan menerima semua file sumber dalam format asli (AI, PSD, Figma, dll) beserta file siap pakai dalam berbagai format (PNG, JPG, PDF, dll). Kami juga menyediakan panduan penggunaan jika diperlukan.",
      category: "delivery",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 5,
      question: "Bisakah berkonsultasi terlebih dahulu sebelum memutuskan?",
      answer: "Tentu saja! Kami menyediakan konsultasi gratis untuk memahami kebutuhan dan visi kreatif Anda. Konsultasi dapat dilakukan melalui video call, chat, atau bertemu langsung di kantor kami. Tidak ada komitmen sampai Anda merasa yakin dengan proposal kami.",
      category: "consultation",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 6,
      question: "Apakah melayani klien dari luar kota?",
      answer: "Ya, kami melayani klien dari seluruh Indonesia bahkan mancanegara. Komunikasi dan koordinasi dapat dilakukan secara online melalui berbagai platform. Untuk klien luar kota, semua file akan dikirim secara digital dan hard copy dapat dikirim via kurir jika diperlukan.",
      category: "service",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/faqs?limit=8&is_active=true');
        if (response.ok) {
          const data = await response.json();
          setFaqs(data.faqs || []);
        } else {
          console.warn('Failed to fetch FAQs, using static data');
          setFaqs(staticFaqs);
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
        setFaqs(staticFaqs);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  // Use dynamic data if available, otherwise use static data
  const displayFaqs = faqs && faqs.length > 0 ? faqs : staticFaqs;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="100">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" data-aos="fade-down" data-aos-delay="200">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="300">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
              <p className="mt-4 text-gray-600">Memuat FAQ...</p>
            </div>
          ) : (
            displayFaqs.map((item, index) => (
              <div
                key={item.id || index}
                className="mb-4 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                data-aos="slide-right"
                data-aos-delay={400 + (index * 100)}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {item.question}
                  </span>
                  <div className={`transform transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg
                      className="w-5 h-5 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="1200">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4" data-aos="fade-in" data-aos-delay="1300">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-gray-600 mb-6" data-aos="fade-in" data-aos-delay="1400">
              Tim kami siap membantu menjawab pertanyaan spesifik tentang proyek Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-in" data-aos-delay="1500">
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300">
                💬 Chat WhatsApp
              </button>
              <button className="bg-white text-teal-500 border-2 border-teal-500 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300">
                📧 Email Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;