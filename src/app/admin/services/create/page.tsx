'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast, { Toaster } from 'react-hot-toast'
import { ArrowLeft, Plus, X, Save } from 'lucide-react'

const serviceSchema = z.object({
  title: z.string().min(1, 'Judul harus diisi'),
  description: z.string().min(1, 'Deskripsi harus diisi'),
  short_description: z.string().min(1, 'Deskripsi singkat harus diisi'),
  price: z.string().min(1, 'Harga harus diisi'),
  category: z.string().min(1, 'Kategori harus dipilih'),
  image: z.string().url('URL gambar tidak valid'),
  features: z.array(z.object({ value: z.string().min(1, 'Feature tidak boleh kosong') })).min(1, 'Minimal 1 feature')
})

type ServiceFormData = z.infer<typeof serviceSchema>

export default function CreateService() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

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
    formState: { errors }
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      features: [{ value: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'features' as const
  })

  const onSubmit = async (data: ServiceFormData) => {
    setIsLoading(true)
    try {
      // Transform data to match API expectations
      const transformedData = {
        ...data,
        features: data.features.map(feature => feature.value)
      }

      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transformedData)
      })

      if (response.ok) {
        toast.success('Service berhasil ditambahkan')
        router.push('/admin/services')
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || 'Gagal menambahkan service')
      }
    } catch (error) {
      toast.error('Terjadi kesalahan saat menambahkan service')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/admin/services" className="mr-4">
                <ArrowLeft className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">Tambah Service Baru</h1>
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
                Judul Service *
              </label>
              <input
                type="text"
                id="title"
                {...register('title')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan judul service"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan deskripsi service"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            {/* Short Description */}
            <div>
              <label htmlFor="short_description" className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Singkat *
              </label>
              <textarea
                id="short_description"
                rows={2}
                {...register('short_description')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan deskripsi singkat service"
              />
              {errors.short_description && (
                <p className="mt-1 text-sm text-red-600">{errors.short_description.message}</p>
              )}
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Harga *
                </label>
                <input
                  type="text"
                  id="price"
                  {...register('price')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Contoh: Rp 2.500.000"
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                )}
              </div>

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
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                )}
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                URL Gambar *
              </label>
              <input
                type="url"
                id="image"
                {...register('image')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
              )}
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Features *
                </label>
                <button
                  type="button"
                  onClick={() => append({ value: '' })}
                  className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Tambah Feature
                </button>
              </div>
              
              <div className="space-y-3">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <input
                      {...register(`features.${index}.value`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Feature ${index + 1}`}
                    />
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {errors.features && (
                <p className="mt-1 text-sm text-red-600">{errors.features.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Link
                href="/admin/services"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {isLoading ? 'Menyimpan...' : 'Simpan Service'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}