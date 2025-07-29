import React, { useState } from "react"
import { ChevronDown, ChevronUp, Calendar, User, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Ijaraga mashina olishning afzalliklari",
    excerpt:
      "Avtomobil ijarasi sizga qulaylik, erkinlik va xarajatlarni tejash imkonini beradi. Shu maqolada batafsil bilib oling.",
    content: `Avtomobil ijarasi zamonaviy hayotning ajralmas qismi bo'lib qoldi. Bu xizmat ko'plab afzalliklarni taqdim etadi:

**Moliyaviy tejamkorlik:**
- Katta miqdorda pul sarflamasdan kerakli vaqtda mashinaga ega bo'lish
- Kasko, texnik xizmat va ta'mirlash xarajatlaridan xalos bo'lish
- Yoqilg'i xarajatlarini nazorat qilish imkoniyati

**Qulaylik va erkinlik:**
- Istalgan vaqtda, istalgan joyga borish imkoniyati
- Jamoat transportidan qaram bo'lmaslik
- Shaxsiy rejangizni erkin tuzish

**Xavfsizlik:**
- Barcha avtomobillar muntazam texnik ko'rikdan o'tadi
- Kasko sug'urtasi mavjud
- 24/7 qo'llab-quvvatlash xizmati

**Turli xil tanlov:**
- Ekonom klassdan premium klassgacha
- Har xil o'lcham va turdagi avtomobillar
- Maxsus ehtiyojlar uchun transport vositalari`,
    author: "Aziz Karimov",
    date: "2024-01-15",
    readTime: "5 daqiqa",
    category: "Maslahatlar",
  },
  {
    id: 2,
    title: "Yo'lga chiqishdan oldin tayyorgarlik",
    excerpt:
      "Mashina ijaraga olganingizda yo'lga chiqishdan oldin tekshirish kerak bo'lgan muhim jihatlar haqida bilib oling.",
    content: `Ijaraga olingan avtomobil bilan yo'lga chiqishdan oldin quyidagi tekshiruvlarni amalga oshiring:

**Tashqi ko'rinishni tekshirish:**
- Avtomobilning barcha qismlarini diqqat bilan ko'zdan kechiring
- Tirnalgan yoki zararlangan joylarni qayd eting
- Fotosuratga oling va ijaraga beruvchi bilan kelishing

**Ichki qismni tekshirish:**
- O'rindiqlar va salon holatini tekshiring
- Barcha tugmalar va funksiyalar ishlaydimi?
- Konditsioner va isitish tizimi

**Texnik holatni tekshirish:**
- Yoqilg'i miqdorini qayd eting
- Shinalar holatini tekshiring
- Yorug'lik moslamalari ishlayaptimi?
- Tormoz tizimi

**Hujjatlarni tekshirish:**
- Texnik passport
- Sug'urta polisi
- Haydovchilik guvohnomasi talablari

**Qo'shimcha jihozlar:**
- Ehtiyot g'ildirak
- Asboblar to'plami
- Birinchi yordam to'plami`,
    author: "Dilshod Rahimov",
    date: "2024-01-10",
    readTime: "7 daqiqa",
    category: "Xavfsizlik",
  },
  {
    id: 3,
    title: "Ijaraga mashina olish bo'yicha maslahatlar",
    excerpt: "To'g'ri mashinani tanlash va uni qulay shartlarda ijaraga olish uchun amaliy tavsiyalar.",
    content: `Avtomobil ijarasini tanlashda quyidagi maslahatlarni hisobga oling:

**Kompaniyani tanlash:**
- Ishonchli va tajribali kompaniyalarni tanlang
- Mijozlar sharhlarini o'qing
- Litsenziya va ruxsatnomalarni tekshiring
- Narxlarni solishtiring

**Shartnoma shartlari:**
- Barcha shartlarni diqqat bilan o'qing
- Qo'shimcha to'lovlarni aniqlang
- Bekor qilish shartlarini bilib oling
- Sug'urta qamrovi haqida so'rang

**Mashina turini tanlash:**
- Maqsadingizga mos keladigan avtomobilni tanlang
- Yo'lovchilar sonini hisobga oling
- Yoqilg'i iste'moli muhimmi?
- Bagaj hajmi yetarlimi?

**Moliyaviy masalalar:**
- Garov miqdorini aniqlang
- To'lov usullarini bilib oling
- Qo'shimcha xizmatlar narxini so'rang
- Chegirmalar mavjudligini tekshiring

**Foydalanish qoidalari:**
- Kilometraj cheklovlari
- Yoqilg'i to'ldirish qoidalari
- Tozalash talablari
- Vaqtida qaytarish muhimligi`,
    author: "Nodira Tosheva",
    date: "2024-01-05",
    readTime: "6 daqiqa",
    category: "Maslahatlar",
  },
]

const BlogComponent = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 pt-[130px] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Blog Maqolalar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Avtomobil ijarasi haqida foydali ma'lumotlar va maslahatlar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                expandedCard === post.id ? "lg:col-span-2 xl:col-span-3" : "hover:scale-[1.02]"
              }`}
              onClick={() => toggleCard(post.id)}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  {expandedCard === post.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">{post.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-6">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("uz-UZ")}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>

                {expandedCard === post.id && (
                  <div className="border-t pt-6 mt-6 animate-in slide-in-from-top-2 duration-300">
                    <div className="prose prose-gray max-w-none">
                      {post.content.split("\n\n").map((paragraph, index) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          return (
                            <h4 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                              {paragraph.replace(/\*\*/g, "")}
                            </h4>
                          )
                        }
                        if (paragraph.startsWith("- ")) {
                          const items = paragraph.split("\n- ").map((item) => item.replace(/^- /, ""))
                          return (
                            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          )
                        }
                        return (
                          <p key={index} className="text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>

                    <div className="mt-8 pt-6 border-t bg-gray-50 -mx-8 px-8 py-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">Maqolani o'qish tugallandi</div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedCard(null)
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                        >
                          Yopish
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {expandedCard !== post.id && (
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Batafsil o'qish</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {expandedCard && (
          <div className="text-center mt-12">
            <button
              onClick={() => setExpandedCard(null)}
              className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 font-medium"
            >
              Barcha maqolalarni ko'rish
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default React.memo(BlogComponent)
