'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Berapa lama waktu pengerjaan proyek desain?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Untuk logo dan branding sederhana biasanya 3-7 hari kerja, sedangkan untuk proyek website atau aplikasi mobile bisa memakan waktu 2-4 minggu. Kami akan memberikan timeline yang jelas setelah konsultasi awal."
    },
    {
      question: "Apakah ada revisi yang disediakan?",
      answer: "Ya, kami menyediakan hingga 3 kali revisi gratis untuk setiap proyek. Revisi tambahan dapat dikenakan biaya sesuai dengan kompleksitas perubahan yang diminta. Kami berkomitmen untuk memastikan hasil akhir sesuai dengan ekspektasi Anda."
    },
    {
      question: "Bagaimana sistem pembayaran yang berlaku?",
      answer: "Kami menerapkan sistem pembayaran bertahap: 50% di awal sebagai down payment, dan 50% sisanya setelah proyek selesai. Untuk proyek besar, kami dapat mengatur pembayaran dalam beberapa tahap sesuai milestone yang disepakati."
    },
    {
      question: "Apakah file sumber (source file) akan diberikan?",
      answer: "Ya, setelah pembayaran lunas, Anda akan menerima semua file sumber dalam format asli (AI, PSD, Figma, dll) beserta file siap pakai dalam berbagai format (PNG, JPG, PDF, dll). Kami juga menyediakan panduan penggunaan jika diperlukan."
    },
    {
      question: "Bisakah berkonsultasi terlebih dahulu sebelum memutuskan?",
      answer: "Tentu saja! Kami menyediakan konsultasi gratis untuk memahami kebutuhan dan visi kreatif Anda. Konsultasi dapat dilakukan melalui video call, chat, atau bertemu langsung di kantor kami. Tidak ada komitmen sampai Anda merasa yakin dengan proposal kami."
    },
    {
      question: "Apakah melayani klien dari luar kota?",
      answer: "Ya, kami melayani klien dari seluruh Indonesia bahkan mancanegara. Komunikasi dan koordinasi dapat dilakukan secara online melalui berbagai platform. Untuk klien luar kota, semua file akan dikirim secara digital dan hard copy dapat dikirim via kurir jika diperlukan."
    },
    {
      question: "Bagaimana jika hasil tidak sesuai ekspektasi?",
      answer: "Kepuasan klien adalah prioritas utama kami. Jika hasil tidak sesuai ekspektasi, kami akan melakukan revisi hingga Anda puas. Dalam kasus yang sangat jarang terjadi dimana tidak ada solusi yang memuaskan, kami akan mengembalikan sebagian pembayaran sesuai kesepakatan."
    },
    {
      question: "Apakah ada paket bundling untuk multiple services?",
      answer: "Ya, kami menyediakan paket bundling dengan harga khusus untuk klien yang membutuhkan multiple services seperti logo + website, atau branding + marketing materials. Paket bundling biasanya lebih hemat 15-25% dibanding memesan terpisah."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
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
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="text-gray-600 mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik tentang proyek Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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