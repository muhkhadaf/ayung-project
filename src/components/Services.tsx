'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  icon_path: string;
  features: string[];
  price: string;
  category: string;
  is_active: boolean;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services?limit=6&is_active=true');
        if (response.ok) {
          const data = await response.json();
          setServices(data.services);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#11808b]"></div>
          </div>
        </div>
      </section>
    );
  }

  const staticServices = [
    {
      id: 'logo-design',
      title: 'Logo Design',
      description: 'Ciptakan identitas brand yang kuat dengan logo yang memorable dan profesional.',
      icon_path: '/icons/logo.jpeg', // Menggunakan gambar yang sudah ada
      features: ['Konsep Original', 'File Vector', 'Revisi Unlimited', 'Brand Guidelines'],
      price: 'Mulai dari Rp 500K',
      category: 'Branding & Identity',
      is_active: true
    },
    {
      id: 'branding',
      title: 'Branding Package',
      description: 'Paket lengkap branding untuk membangun identitas visual yang konsisten.',
      icon_path: '/icons/compro.jpeg', // Menggunakan gambar yang sudah ada
      features: ['Logo + Variations', 'Business Card', 'Letterhead', 'Brand Guidelines'],
      price: 'Mulai dari Rp 2.5Jt',
      category: 'Branding & Identity',
      is_active: true
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Desain website yang menarik, responsif, dan user-friendly untuk bisnis Anda.',
      icon_path: '/icons/web.jpeg', // Menggunakan gambar yang sudah ada
      features: ['UI/UX Design', 'Responsive Layout', 'Prototype', 'Style Guide'],
      price: 'Mulai dari Rp 3Jt',
      category: 'Web Development',
      is_active: true
    },
    {
      id: 'print-design',
      title: 'Print Design',
      description: 'Desain untuk media cetak seperti brosur, flyer, poster, dan materi promosi lainnya.',
      icon_path: '/icons/brosur.jpeg', // Menggunakan gambar yang sudah ada
      features: ['Print Ready', 'High Resolution', 'Multiple Formats', 'Color Variants'],
      price: 'Mulai dari Rp 300K',
      category: 'Print Design',
      is_active: true
    },
    {
      id: 'social-media',
      title: 'Social Media Design',
      description: 'Konten visual menarik untuk meningkatkan engagement di media sosial Anda.',
      icon_path: '/icons/feed.jpeg', // Menggunakan gambar yang sudah ada
      features: ['Post Templates', 'Story Design', 'Cover Design', 'Content Calendar'],
      price: 'Mulai dari Rp 200K',
      category: 'Digital Marketing',
      is_active: true
    },
    {
      id: 'packaging',
      title: 'Packaging Design',
      description: 'Desain kemasan produk yang eye-catching dan meningkatkan daya tarik produk.',
      icon_path: '/icons/banner.jpeg', // Menggunakan gambar yang sudah ada
      features: ['3D Mockup', 'Die-cut Template', 'Print Specification', 'Multiple Variants'],
      price: 'Mulai dari Rp 800K',
      category: 'Print Design',
      is_active: true
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-sm font-semibold text-[#11808b] uppercase tracking-wide mb-2" data-aos="fade-up" data-aos-delay="200">
            Layanan Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="300">
            Solusi Desain Grafis Terlengkap
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Dari konsep hingga eksekusi, kami menyediakan berbagai layanan desain grafis 
            yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {(services && services.length > 0 ? services : staticServices).map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              data-aos="flip-up"
              data-aos-delay={500 + (index * 100)}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="sm:w-1/2 bg-gradient-to-br from-[#11808b] to-[#0f6b75] p-0 relative overflow-hidden min-h-[250px]">
                  <Image
                     src={service.icon_path || '/icons/logo.jpeg'}
                     alt={`${service.title} icon`}
                     width={400}
                     height={250}
                     className="w-full h-full object-cover absolute inset-0"
                   />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 via-transparent to-transparent">
                    <div className="text-center z-10">
                      <div className="text-white text-xl font-bold mb-1 drop-shadow-lg">
                        {service.title.split(' ')[0]}
                      </div>
                      <div className="text-white text-base font-medium drop-shadow-lg">
                        {service.title.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="sm:w-1/2 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#11808b]">{service.price.replace('Mulai dari ', '')}</div>
                      <div className="text-xs text-gray-500">Mulai dari</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-[#11808b] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-xs text-gray-500 italic">+{service.features.length - 3} fitur lainnya</li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <div className="flex gap-2">
                    <Link
                      href={`/layanan/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-2 px-4 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 font-medium text-sm"
                    >
                      PESAN SEKARANG
                    </Link>
                    <Link
                      href={`/layanan/${service.id}`}
                      className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" data-aos="zoom-in" data-aos-delay="1200">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Butuh Layanan Khusus?
            </h4>
            <p className="text-gray-600 mb-6">
              Kami juga menerima proyek custom sesuai dengan kebutuhan spesifik bisnis Anda. 
              Konsultasikan ide Anda dengan tim kreatif kami.
            </p>
            <Link
              href="#"
              className="inline-block bg-[#11808b] text-white px-8 py-3 rounded-lg hover:bg-[#0f6b75] transition-colors duration-300 font-semibold"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;