'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, Save } from 'lucide-react';
import toast from 'react-hot-toast';

const faqSchema = z.object({
  question: z.string().min(1, 'Pertanyaan wajib diisi').min(10, 'Pertanyaan minimal 10 karakter'),
  answer: z.string().min(1, 'Jawaban wajib diisi').min(20, 'Jawaban minimal 20 karakter'),
  category: z.string().min(1, 'Kategori wajib diisi'),
  is_active: z.boolean()
});

type FAQFormData = z.infer<typeof faqSchema>;

export default function CreateFAQPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FAQFormData>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answer: '',
      category: '',
      is_active: true
    }
  });

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          router.push('/admin');
          return;
        }
      } catch (error) {
        router.push('/admin');
      }
    };

    checkAuth();
  }, [router]);

  const onSubmit = async (data: FAQFormData) => {
    try {
      setLoading(true);

      const response = await fetch('/api/faqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create FAQ');
      }

      toast.success('FAQ berhasil ditambahkan');
      router.push('/admin/faqs');
    } catch (error) {
      toast.error('Gagal menambahkan FAQ');
      console.error('Error creating FAQ:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/admin/faqs"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tambah FAQ Baru</h1>
              <p className="text-gray-600 mt-2">Buat pertanyaan dan jawaban yang sering diajukan</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Question */}
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                Pertanyaan *
              </label>
              <textarea
                id="question"
                rows={3}
                {...register('question')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Masukkan pertanyaan yang sering diajukan..."
              />
              {errors.question && (
                <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
              )}
            </div>

            {/* Answer */}
            <div>
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                Jawaban *
              </label>
              <textarea
                id="answer"
                rows={6}
                {...register('answer')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                placeholder="Masukkan jawaban yang lengkap dan jelas..."
              />
              {errors.answer && (
                <p className="mt-1 text-sm text-red-600">{errors.answer.message}</p>
              )}
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Kategori *
              </label>
              <select
                id="category"
                {...register('category')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Pilih kategori</option>
                <option value="Umum">Umum</option>
                <option value="Layanan">Layanan</option>
                <option value="Pembayaran">Pembayaran</option>
                <option value="Teknis">Teknis</option>
                <option value="Dukungan">Dukungan</option>
                <option value="Kebijakan">Kebijakan</option>
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>

            {/* Status */}
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register('is_active')}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-700">FAQ aktif dan ditampilkan</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4 pt-6 border-t">
              <Link
                href="/admin/faqs"
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Simpan FAQ
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}