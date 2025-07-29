import React, { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, User, Calendar, MessageCircle } from "lucide-react"

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ fullname: "", age: "", phone: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+998 90 123 45 67", "+998 91 234 56 78"],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@autodeals.uz", "support@autodeals.uz"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: MapPin,
      title: "Manzil",
      details: ["Toshkent sh., Chilonzor tumani", "Bunyodkor ko'chasi, 12-uy"],
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      details: ["Dushanba - Juma: 9:00 - 18:00", "Shanba: 9:00 - 15:00"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen py-20 pt-[140px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Bog'lanish
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Biz bilan bog'laning</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Savollaringiz bormi? Avtomobil ijarasi haqida ma'lumot olishni xohlaysizmi? Biz sizga yordam berishga
            tayyormiz!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Biz bilan aloqa</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                    >
                      <div
                        className={`${info.bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className={`w-7 h-7 ${info.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nima uchun bizni tanlaysiz?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">24/7 mijozlarga xizmat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Tezkor javob berish</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Professional maslahat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-blue-100">Bepul konsultatsiya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Xabar yuborish</h2>
              <p className="text-gray-600">Ma'lumotlaringizni qoldiring, biz tez orada siz bilan bog'lanamiz</p>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
                <div className="text-green-600 font-medium">✅ Xabaringiz muvaffaqiyatli yuborildi!</div>
                <div className="text-green-500 text-sm mt-1">Tez orada siz bilan bog'lanamiz</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300 text-base"
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  placeholder="Ismingiz va familiyangiz"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300 text-base"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Yoshingiz"
                  min="18"
                  max="80"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300 text-base"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+998 90 123 45 67"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-4 text-gray-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <textarea
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition duration-300 text-base resize-none"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Qo'shimcha xabar (ixtiyoriy)"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Yuborilmoqda...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Xabar yuborish</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                Xabar yuborish orqali siz bizning{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  maxfiylik siyosati
                </a>
                ga rozilik bildirasiz
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Bizning joylashuvimiz</h3>
              <p className="text-gray-600 mb-8">Toshkent shahrida joylashgan ofisimizga tashrif buyuring</p>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Auto Deals Ofisi</h4>
                <p className="text-gray-600">Toshkent sh., Chilonzor tumani</p>
                <p className="text-gray-600">Bunyodkor ko'chasi, 12-uy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ContactComponent)
