import React, { useEffect, useState } from "react"
import { request } from "../../api"
import { useParams } from "react-router-dom"
import TopScroll from "../../components/top-scroll/top-scroll"
import { Spin } from "antd"
import {
  FaCar,
  FaCalendarAlt,
  FaPalette,
  FaCogs,
  FaGasPump,
  FaDollarSign,
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaPhoneAlt,
} from "react-icons/fa"

const DetailPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    request
      .get(`/autodeals/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      <TopScroll />
      {loading ? (
        <div className="containerL">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Spin size="large" />
              <p className="mt-4 text-gray-600 text-lg">Ma'lumotlar yuklanmoqda...</p>
            </div>
          </div>
        </div>
      ) : (
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-[120px] pb-16">
          <div className="containerL mx-auto px-4 max-w-7xl">
            <div className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Bosh sahifa</span>
                <span>/</span>
                <span>Avtomobillar</span>
                <span>/</span>
                <span className="text-blue-600 font-medium">{data?.name}</span>
              </nav>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-3/5 w-full">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-6">
                  <div className="relative">
                    <div className="h-[500px] lg:h-[500px]">
                      <img
                        src={data?.image || "/placeholder.svg"}
                        alt={data?.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>

                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Premium
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 w-[250px]">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 indent-1">
                        <h2 className="text-[18px] font-bold text-gray-900">{data?.name}</h2>
                        <p className="text-gray-600 text-[13px] mt-1">Professional avtomobil ijarasi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <FaShieldAlt className="text-xl text-blue-600" />,
                      title: "Kafolat",
                      description: "100% xavfsiz to'lov va kafolat",
                      bgColor: "bg-blue-50",
                    },
                    {
                      icon: <FaTruck className="text-xl text-green-600" />,
                      title: "Yetkazib berish",
                      description: "Tez va ishonchli yetkazib berish",
                      bgColor: "bg-green-50",
                    },
                    {
                      icon: <FaPhoneAlt className="text-xl text-purple-600" />,
                      title: "Qo'llab-quvvatlash",
                      description: "24/7 mijozlar xizmati",
                      bgColor: "bg-purple-50",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`${service.bgColor} rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="text-center space-y-2">
                        <div className="flex justify-center">{service.icon}</div>
                        <h4 className="font-semibold text-gray-800 text-sm">{service.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/5 w-full">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 h-full">
                  <div className="mb-8">
                    <h1 className="text-3xl lg:text-[32px] font-bold text-gray-900 mb-4">{data?.name}</h1>
                    <p className="text-gray-600 leading-relaxed text-[17px]">{data?.description}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                      <FaCogs className="mr-2 text-blue-600" />
                      Texnik xususiyatlari
                    </h3>

                    <div className="space-y-4">
                      {[
                        { label: "Brend", value: data?.brand, icon: <FaCar className="text-blue-600" /> },
                        { label: "Yili", value: data?.year, icon: <FaCalendarAlt className="text-green-600" /> },
                        { label: "Rangi", value: data?.color, icon: <FaPalette className="text-purple-600" /> },
                        {
                          label: "Transmission",
                          value: data?.transmission,
                          icon: <FaCogs className="text-gray-600" />,
                        },
                        { label: "Yoqilg'i", value: data?.fuel_type, icon: <FaGasPump className="text-red-600" /> },
                      ].map((spec, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{spec.icon}</span>
                            <span className="font-medium text-gray-700">{spec.label}:</span>
                          </div>
                          <span className="font-semibold text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-2 indent-1 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100 text-sm font-medium">Kunlik narx</p>
                          <p className="text-3xl font-bold">${data?.price_per_day}</p>
                          <p className="text-blue-200 text-sm mt-1">Eng yaxshi narx kafolati</p>
                        </div>
                        <FaDollarSign className="text-4xl text-blue-200" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl">
                      <span className="flex items-center justify-center space-x-2">
                        <FaCar />
                        <span>Xarid qilish</span>
                      </span>
                    </button>

                    <button className="w-full border-2 border-blue-600 text-blue-600 px-8 py-2 rounded-xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-[1.02] transition-all duration-200">
                      <span className="flex items-center justify-center space-x-2">
                        <FaHeart />
                        <span>Wishlistga qo'shish</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default React.memo(DetailPage)
