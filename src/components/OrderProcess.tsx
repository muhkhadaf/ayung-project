'use client';

import { useState } from 'react';

const OrderProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Konsultasi",
      description: "Diskusikan kebutuhan dan visi kreatif Anda dengan tim ahli kami",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Proposal",
      description: "Terima proposal detail dengan timeline dan estimasi biaya",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Desain",
      description: "Tim kreatif mulai mengerjakan konsep dan desain sesuai brief",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Review",
      description: "Review hasil desain dan berikan feedback untuk penyempurnaan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Finalisasi",
      description: "Selesaikan proyek dan terima hasil akhir yang sempurna",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cara Pemesanan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses yang mudah dan transparan untuk mewujudkan visi kreatif Anda
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative min-w-0 flex-shrink-0">
                {/* Step Circle */}
                <div
                  className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg transition-all duration-300 cursor-pointer ${
                    currentStep >= step.id
                      ? 'bg-teal-500 shadow-lg scale-110'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  {step.id}
                </div>
                
                {/* Step Label */}
                <span className={`mt-2 text-xs sm:text-sm font-medium text-center px-1 ${
                  currentStep >= step.id ? 'text-teal-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>

                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-4 sm:top-6 left-8 sm:left-12 w-full h-1 -z-10 hidden sm:block">
                    <div className="w-full h-full bg-gray-200 rounded">
                      <div
                        className={`h-full bg-teal-500 rounded transition-all duration-500 ${
                          currentStep > step.id ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Animated Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div
              className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Details */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
            <div className="text-teal-500 mb-2 sm:mb-0 sm:mr-4 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-teal-50 rounded-full">
              {steps[currentStep - 1]?.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Langkah {currentStep}: {steps[currentStep - 1]?.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {steps[currentStep - 1]?.description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ← Sebelumnya
            </button>
            
            <div className="flex space-x-2 order-first sm:order-none">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                    currentStep === step.id
                      ? 'bg-teal-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
              disabled={currentStep === steps.length}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                currentStep === steps.length
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600'
              }`}
            >
              Selanjutnya →
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none">
            Mulai Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;