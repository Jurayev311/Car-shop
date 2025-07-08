import React from 'react'

const AboutComponent = () => {
  return (
    <section className="flex items-center justify-center mt-[30px] bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
          Biz haqimizda
        </h2>
        <p className="text-center text-gray-700 text-xl leading-relaxed max-w-4xl mx-auto">
          Auto Deals — bu sizning qulay, ishonchli va professional avtomobil ijarasi bo‘yicha eng yaqin hamkoringiz.
          Bizning kompaniyamiz ko‘p yillik tajribaga ega bo‘lib, har bir mijozga individual yondashuvni taklif qiladi.
          Parkimizda barcha ehtiyojlarga mos, zamonaviy va texnik jihatdan mukammal avtomobillar mavjud.
          Biz sifatli xizmat, tezkor rasmiylashtirish va qulay narx siyosatini kafolatlaymiz.
          Sizning ishonchingiz biz uchun eng katta qadriyat va eng yaxshi xizmat ko‘rsatish bizning ustuvor vazifamizdir.
        </p>
      </div>
    </section>
  )
}

export default React.memo(AboutComponent)
