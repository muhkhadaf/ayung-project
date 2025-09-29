'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  HelpCircle,
  LogOut,
  Eye,
  Plus
} from 'lucide-react'

interface DashboardStats {
  services: number
  portfolios: number
  faqs: number
}

export default function AdminDashboard() {
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [stats, setStats] = useState<DashboardStats>({ services: 0, portfolios: 0, faqs: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    loadStats()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        router.push('/admin')
      }
    } catch (error) {
      router.push('/admin')
    } finally {
      setIsLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      const [servicesRes, portfoliosRes, faqsRes] = await Promise.all([
        fetch('/api/services?limit=1'),
        fetch('/api/portfolios?limit=1'),
        fetch('/api/faqs?limit=1')
      ])

      const [servicesData, portfoliosData, faqsData] = await Promise.all([
        servicesRes.json(),
        portfoliosRes.json(),
        faqsRes.json()
      ])

      setStats({
        services: servicesData.pagination?.total || 0,
        portfolios: portfoliosData.pagination?.total || 0,
        faqs: faqsData.pagination?.total || 0
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      toast.success('Logout berhasil')
      router.push('/admin')
    } catch (error) {
      toast.error('Gagal logout')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
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
              <LayoutDashboard className="w-8 h-8 text-blue-500 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Services</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.services}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Portfolio</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.portfolios}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <HelpCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total FAQs</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.faqs}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/services" className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  Kelola Services
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tambah, edit, dan hapus layanan
                </p>
              </div>
              <Settings className="w-8 h-8 text-gray-400 group-hover:text-blue-500" />
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-600">
              <Plus className="w-4 h-4 mr-1" />
              Kelola Services
            </div>
          </Link>

          <Link href="/admin/portfolios" className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600">
                  Kelola Portfolio
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tambah, edit, dan hapus portfolio
                </p>
              </div>
              <FileText className="w-8 h-8 text-gray-400 group-hover:text-green-500" />
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <Plus className="w-4 h-4 mr-1" />
              Kelola Portfolio
            </div>
          </Link>

          <Link href="/admin/faqs" className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-purple-600">
                  Kelola FAQs
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Tambah, edit, dan hapus FAQ
                </p>
              </div>
              <HelpCircle className="w-8 h-8 text-gray-400 group-hover:text-purple-500" />
            </div>
            <div className="mt-4 flex items-center text-sm text-purple-600">
              <Plus className="w-4 h-4 mr-1" />
              Kelola FAQs
            </div>
          </Link>

          <Link href="/" target="_blank" className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                  Lihat Website
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Preview website publik
                </p>
              </div>
              <Eye className="w-8 h-8 text-gray-400 group-hover:text-indigo-500" />
            </div>
            <div className="mt-4 flex items-center text-sm text-indigo-600">
              <Eye className="w-4 h-4 mr-1" />
              Buka Website
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}