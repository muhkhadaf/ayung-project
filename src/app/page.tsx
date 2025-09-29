import About from '@/components/About';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import OrderProcess from '@/components/OrderProcess';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ayung Project",
    "description": "Jasa desain grafis profesional terpercaya di Indonesia. Spesialis branding, logo design, web design, packaging, dan solusi kreatif untuk bisnis.",
    "url": "https://ayungproject.com",
    "logo": "https://ayungproject.com/Ayung_Project.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-812-3456-7890",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Indonesia"
    },
    "sameAs": [
      "https://www.facebook.com/ayungproject",
      "https://www.instagram.com/ayungproject",
      "https://wa.me/6281234567890"
    ],
    "serviceType": [
      "Graphic Design",
      "Logo Design",
      "Branding",
      "Web Design",
      "Packaging Design",
      "Social Media Design"
    ],
    "areaServed": "Indonesia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo Design & Branding",
            "description": "Desain logo profesional dan identitas visual yang memorable untuk brand Anda"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Website responsif dan user-friendly yang mengkonversi pengunjung menjadi pelanggan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Design",
            "description": "Konten visual yang engaging untuk meningkatkan brand awareness di media sosial"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <OrderProcess />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
