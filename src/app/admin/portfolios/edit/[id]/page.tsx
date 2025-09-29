'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast, { Toaster } from 'react-hot-toast'
import { ArrowLeft, Plus, X, Save } from 'lucide-react'

const portfolioSchema = z.object({
  title: z.string().min(1, 'Judul harus diisi'),
  description: z.string().min(1, 'Deskripsi harus diisi'),
  category: z.string().min(1, 'Kategori harus dipilih'),
  client: z.string().min(1, 'Nama client harus diisi'),
  duration: z.string().min(1, 'Durasi harus diisi'),
  technologies: z.array(z.object({ value: z.string().min(1, 'Technology tidak boleh kosong') })).min(1, 'Minimal 1 technology'),
  gallery: z.array(z.object({ value: z.string().url('URL gambar tidak valid') })).min(1, 'Minimal 1 gambar')
})

type PortfolioFormData = z.infer<typeof portfolioSchema>

interface Portfolio {
  id: string
  title: string
  description: string
  category: string
  client: string
  duration: string
  technologies: string[]
  gallery: string[]
}

export default function EditPortfolio({ params }: { params: Promise<{ id: string }> }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const router = useRouter()
  
  // Unwrap params using React.use()
  const { id } = use(params)

  const categories = [
    'Branding & Identity',
    'Web Development',
    'Digital Marketing',
    'Graphic Design',
    'Content Creation'
  ]

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PortfolioFormData>({
    resolver: zodResolver(portfolioSchema)
  })

  const { fields: techFields, append: appendTech, remove: removeTech } = useFieldArray({
    control,
    name: 'technologies' as const
  })

  const { fields: galleryFields, append: appendGallery, remove: removeGallery } = useFieldArray({
    control,
    name: 'gallery' as const
  })

  useEffect(() => {
    loadPortfolio()
  }, [id])

  const loadPortfolio = async () => {
    try {
      const response = await fetch(`/api/portfolios/${id}`)
      if (response.ok) {
        const data = await response.json()
        setPortfolio(data.portfolio)
        reset({
          title: data.portfolio.title,
          description: data.portfolio.description,
          category: data.portfolio.category,
          client: data.portfolio.client,
          duration: data.portfolio.duration,
          technologies: data.portfolio.technologies?.map((tech: string) => ({ value: tech })) || [{ value: '' }],
          gallery: data.portfolio.gallery?.map((img: string) => ({ value: img })) || [{ value: '' }]
        })
      } else {
        toast.error('Portfolio tidak ditemukan')
        router.push('/admin/portfolios')
      }
    } catch (error) {
      toast.error('Gagal memuat data portfolio')
      router.push('/admin/portfolios')
    } finally {
      setIsLoadingData(false)
    }
  }

  const onSubmit = async (data: PortfolioFormData) => {
    setIsLoading(true)
    try {
      // Transform data to match API expectations
      const transformedData = {
        ...data,
        technologies: data.technologies.map(tech => tech.value),
        gallery: data.gallery.map(img => img.value)
      }

      const response = await fetch(`/api/portfolios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transformedData)
      })

      if (response.ok) {
        toast.success('Portfolio berhasil diperbarui')
        router.push('/admin/portfolios')
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || 'Gagal memperbarui portfolio')
      }
    } catch (error) {
      toast.error('Terjadi kesalahan saat memperbarui portfolio')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoadingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    )
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Portfolio tidak ditemukan</p>
          <Link href="/admin/portfolios" className="text-green-600 hover:text-green-800 mt-2 inline-block">
            Kembali ke daftar portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin/portfolios" className="mr-4">
                <ArrowLeft className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Edit Portfolio</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Judul Portfolio *
              </label>
              <input
                type="text"
                id="title"
                {...register('title')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Masukkan judul portfolio"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi *
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Masukkan deskripsi portfolio"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            {/* Category and Client */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori *
                </label>
                <select
                  id="category"
                  {...register('category')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Pilih kategori</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-2">
                  Client *
                </label>
                <input
                  type="text"
                  id="client"
                  {...register('client')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Nama client"
                />
                {errors.client && (
                  <p className="mt-1 text-sm text-red-600">{errors.client.message}</p>
                )}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                Durasi *
              </label>
              <input
                type="text"
                id="duration"
                {...register('duration')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Contoh: 3 bulan"
              />
              {errors.duration && (
                <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
              )}
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Technologies *
                </label>
                <button
                  type="button"
                  onClick={() => appendTech({ value: '' })}
                  className="text-green-600 hover:text-green-800 flex items-center text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Tambah Technology
                </button>
              </div>
              
              <div className="space-y-3">
                {techFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <input
                      {...register(`technologies.${index}.value`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`Technology ${index + 1}`}
                    />
                    {techFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTech(index)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {errors.technologies && (
                <p className="mt-1 text-sm text-red-600">{errors.technologies.message}</p>
              )}
            </div>

            {/* Gallery */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gallery (URL Gambar) *
                </label>
                <button
                  type="button"
                  onClick={() => appendGallery({ value: '' })}
                  className="text-green-600 hover:text-green-800 flex items-center text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Tambah Gambar
                </button>
              </div>
              
              <div className="space-y-3">
                {galleryFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <input
                      type="url"
                      {...register(`gallery.${index}.value`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`https://example.com/image${index + 1}.jpg`}
                    />
                    {galleryFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeGallery(index)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {errors.gallery && (
                <p className="mt-1 text-sm text-red-600">{errors.gallery.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Link
                href="/admin/portfolios"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {isLoading ? 'Menyimpan...' : 'Perbarui Portfolio'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}