import React from "react"
import { Users, Award, Clock, Shield, Star, CheckCircle } from "lucide-react"

const AboutComponent = () => {
  const stats = [
    { number: "5000+", label: "Mamnun mijozlar", icon: Users },
    { number: "10+", label: "Yillik tajriba", icon: Award },
    { number: "24/7", label: "Qo'llab-quvvatlash", icon: Clock },
    { number: "100%", label: "Ishonchlilik", icon: Shield },
  ]

  const features = [
    "Zamonaviy va toza avtomobillar",
    "Maqbul narxlar va chegirmalar",
    "Tezkor rasmiylashtirish jarayoni",
    "Professional mijozlarga xizmat",
    "Barcha hujjatlar bilan ta'minlash",
    "24/7 texnik yordam",
  ]

  const values = [
    {
      title: "Sifat",
      description: "Har bir avtomobil yuqori standartlarga javob beradi",
      icon: Star,
    },
    {
      title: "Ishonchlilik",
      description: "Mijozlarimiz bizga to'liq ishonch bildiradilar",
      icon: Shield,
    },
    {
      title: "Innovatsiya",
      description: "Zamonaviy texnologiyalar va yechimlar",
      icon: Award,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen py-20 pt-[140px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Auto Deals haqida
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Biz haqimizda</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Auto Deals — bu sizning qulay, ishonchli va professional avtomobil ijarasi bo'yicha eng yaqin hamkoringiz.
            Bizning kompaniyamiz ko'p yillik tajribaga ega bo'lib, har bir mijozga individual yondashuvni taklif qiladi.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Nima uchun aynan Auto Deals?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Parkimizda barcha ehtiyojlarga mos, zamonaviy va texnik jihatdan mukammal avtomobillar mavjud. Biz sifatli
              xizmat, tezkor rasmiylashtirish va qulay narx siyosatini kafolatlaymiz.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Bizning missiyamiz</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Sizning ishonchingiz biz uchun eng katta qadriyat va eng yaxshi xizmat ko'rsatish bizning ustuvor
                vazifamizdir. Har bir mijozga individual yondashuv va professional xizmat ko'rsatishga intilamiz.
              </p>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Mijozlar mamnuniyati</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Bizning qadriyatlarimiz</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Biz har doim mijozlarimizning ehtiyojlarini birinchi o'ringa qo'yamiz va eng yuqori standartlarga amal
            qilamiz.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Bizga qo'shiling!</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Eng yaxshi avtomobil ijarasi xizmatidan foydalaning va bizning professional jamoamiz bilan ishlashning
            qulayligini his eting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Bog'lanish
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Avtomobillarni ko'rish
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(AboutComponent)
