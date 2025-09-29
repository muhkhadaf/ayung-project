-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Services Table
CREATE TABLE services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    price VARCHAR(100) NOT NULL,
    features JSONB NOT NULL DEFAULT '[]',
    image VARCHAR(500) NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portfolios Table
CREATE TABLE portfolios (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT NOT NULL,
    image VARCHAR(500) NOT NULL,
    category VARCHAR(100) NOT NULL,
    client VARCHAR(255) NOT NULL,
    year VARCHAR(4) NOT NULL,
    technologies JSONB NOT NULL DEFAULT '[]',
    gallery JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- FAQs Table
CREATE TABLE faqs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100) NOT NULL DEFAULT 'general',
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin Users Table
CREATE TABLE admin_users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_services_category ON services(category);
CREATE INDEX idx_portfolios_category ON portfolios(category);
CREATE INDEX idx_faqs_category ON faqs(category);
CREATE INDEX idx_faqs_order ON faqs(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access on portfolios" ON portfolios FOR SELECT USING (true);
CREATE POLICY "Allow public read access on faqs" ON faqs FOR SELECT USING (true);

-- Create policies for admin access (you'll need to implement auth logic)
CREATE POLICY "Allow admin full access on services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access on portfolios" ON portfolios FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access on faqs" ON faqs FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample data
INSERT INTO services (title, description, short_description, price, features, image, category) VALUES
('Logo Design', 'Desain logo profesional yang mencerminkan identitas brand Anda dengan konsep yang unik dan memorable.', 'Desain logo profesional untuk brand Anda', 'Mulai dari Rp 500.000', '["3 Konsep desain", "Revisi unlimited", "File vector (AI, EPS)", "File raster (PNG, JPG)", "Panduan penggunaan logo"]', '/icons/logo.jpeg', 'design'),
('Branding Package', 'Paket lengkap branding yang mencakup logo, color palette, typography, dan brand guidelines.', 'Paket branding lengkap untuk bisnis Anda', 'Mulai dari Rp 2.500.000', '["Logo design", "Color palette", "Typography guide", "Brand guidelines", "Business card design", "Letterhead design"]', '/icons/logo.jpeg', 'branding'),
('Web Design', 'Desain website modern, responsif, dan user-friendly yang sesuai dengan kebutuhan bisnis Anda.', 'Website modern dan responsif', 'Mulai dari Rp 3.000.000', '["Desain responsif", "UI/UX optimization", "SEO friendly", "Loading speed optimization", "Cross-browser compatibility"]', '/icons/web.jpeg', 'web'),
('Print Design', 'Desain untuk media cetak seperti brosur, flyer, poster, dan materi promosi lainnya.', 'Desain untuk media cetak berkualitas tinggi', 'Mulai dari Rp 300.000', '["High resolution design", "Print-ready files", "Multiple format options", "Color management", "Professional layout"]', '/icons/brosur.jpeg', 'print'),
('Social Media Design', 'Desain konten visual untuk media sosial yang engaging dan sesuai dengan brand identity.', 'Konten visual menarik untuk media sosial', 'Mulai dari Rp 150.000', '["Instagram post design", "Story templates", "Facebook cover", "LinkedIn banner", "Consistent branding"]', '/icons/feed.jpeg', 'social'),
('Packaging Design', 'Desain kemasan produk yang menarik dan fungsional untuk meningkatkan daya tarik produk Anda.', 'Desain kemasan produk yang menarik', 'Mulai dari Rp 1.000.000', '["3D mockup visualization", "Die-cut template", "Print specifications", "Material recommendations", "Structural design"]', '/icons/banner.jpeg', 'packaging');

INSERT INTO portfolios (title, description, short_description, image, category, client, year, technologies, gallery) VALUES
('Brand Identity - Tech Startup', 'Pengembangan identitas visual lengkap untuk startup teknologi, mencakup logo, color scheme, dan aplikasi brand di berbagai media.', 'Identitas visual untuk startup teknologi', '/icons/logo.jpeg', 'Branding', 'TechStart Inc.', '2024', '["Adobe Illustrator", "Adobe Photoshop", "Figma"]', '["/icons/logo.jpeg", "/icons/web.jpeg", "/icons/brosur.jpeg"]'),
('E-commerce Website Design', 'Desain website e-commerce yang modern dan user-friendly dengan fokus pada conversion rate optimization.', 'Website e-commerce modern dan fungsional', '/icons/web.jpeg', 'Web Design', 'ShopMart', '2024', '["Figma", "Adobe XD", "Principle"]', '["/icons/web.jpeg", "/icons/feed.jpeg", "/icons/banner.jpeg"]'),
('Restaurant Branding Package', 'Paket branding lengkap untuk restoran termasuk logo, menu design, dan interior branding elements.', 'Branding lengkap untuk restoran', '/icons/brosur.jpeg', 'Branding', 'Warung Nusantara', '2023', '["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"]', '["/icons/brosur.jpeg", "/icons/logo.jpeg", "/icons/banner.jpeg"]'),
('Social Media Campaign', 'Kampanye visual media sosial untuk peluncuran produk baru dengan konsep yang konsisten dan engaging.', 'Kampanye visual media sosial', '/icons/feed.jpeg', 'Social Media', 'Beauty Brand Co.', '2024', '["Adobe Photoshop", "Canva Pro", "After Effects"]', '["/icons/feed.jpeg", "/icons/banner.jpeg", "/icons/web.jpeg"]'),
('Product Packaging Design', 'Desain kemasan produk makanan dengan pendekatan sustainable dan eye-catching untuk meningkatkan brand awareness.', 'Kemasan produk yang menarik dan sustainable', '/icons/banner.jpeg', 'Packaging', 'Healthy Snacks Ltd.', '2023', '["Adobe Illustrator", "Adobe Dimension", "KeyShot"]', '["/icons/banner.jpeg", "/icons/logo.jpeg", "/icons/brosur.jpeg"]'),
('Corporate Annual Report', 'Desain laporan tahunan perusahaan dengan layout yang profesional dan infografis yang informatif.', 'Laporan tahunan dengan desain profesional', '/icons/compro.jpeg', 'Print Design', 'Corporate Solutions', '2023', '["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"]', '["/icons/compro.jpeg", "/icons/brosur.jpeg", "/icons/banner.jpeg"]');

INSERT INTO faqs (question, answer, category, order_index) VALUES
('Berapa lama waktu pengerjaan untuk desain logo?', 'Waktu pengerjaan desain logo biasanya 3-7 hari kerja, tergantung kompleksitas dan jumlah revisi yang diperlukan.', 'design', 1),
('Apakah ada garansi revisi untuk desain yang sudah selesai?', 'Ya, kami memberikan garansi revisi minor selama 30 hari setelah desain final diserahkan.', 'general', 2),
('Format file apa saja yang akan saya terima?', 'Anda akan menerima file dalam berbagai format seperti AI, EPS, PDF, PNG, dan JPG sesuai kebutuhan.', 'design', 3),
('Bagaimana sistem pembayaran yang tersedia?', 'Kami menerima pembayaran melalui transfer bank, e-wallet (OVO, GoPay, DANA), dan payment gateway lainnya.', 'payment', 4),
('Apakah bisa konsultasi gratis sebelum memulai project?', 'Tentu! Kami menyediakan konsultasi gratis untuk memahami kebutuhan dan ekspektasi Anda.', 'general', 5),
('Bagaimana jika saya tidak puas dengan hasil desain?', 'Kami berkomitmen untuk kepuasan klien. Jika tidak puas, kami akan melakukan revisi hingga sesuai ekspektasi atau refund sesuai kebijakan.', 'general', 6);