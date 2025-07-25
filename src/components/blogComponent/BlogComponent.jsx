import React from 'react'

const BlogComponent = () => {
  return (
    <section className="py-16 bg-gray-50 pt-[260px] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Blog Maqolalar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Ijaraga mashina olishning afzalliklari</h3>
            <p className="text-gray-600">
              Avtomobil ijarasi sizga qulaylik, erkinlik va xarajatlarni tejash imkonini beradi. Shu maqolada batafsil bilib oling.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Yoʻlga chiqishdan oldin tayyorgarlik</h3>
            <p className="text-gray-600">
              Mashina ijaraga olganingizda yoʻlga chiqishdan oldin tekshirish kerak boʻlgan muhim jihatlar haqida bilib oling.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:scale-105 duration-200">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Ijaraga mashina olish boʻyicha maslahatlar</h3>
            <p className="text-gray-600">
              Toʻgʻri mashinani tanlash va uni qulay shartlarda ijaraga olish uchun amaliy tavsiyalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(BlogComponent)
