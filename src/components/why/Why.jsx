import React from 'react'
import special from '../../assets/special.svg'
import dealer from '../../assets/Dealer.svg'
import price from '../../assets/price.svg'
import service from '../../assets/service.svg'

const Why = () => {
  return (
    <section className='mt-[120px]'>
        <div className='containerL'>
            <h2 className="text-[36px] font-bold mb-[40px]">Nega aynan biz?</h2>

            <div className='grid grid-cols-4 place-items-center gap-[40px]'>
                <div>
                    <img className='w-[51px] h-[60px] mb-[20px]' src={special} alt="Special Financing Offers" />
                    <h2 className='mb-[14px] text=[20px] font-medium text-[#050B20]'>Keng tanlov</h2>
                    <p className='text-[15px] font-normal text-[#050B20]'>Har qanday ehtiyoj va byudjet uchun sedan, krossover va biznes klass avtomobillar.</p>
                </div>
                <div>
                    <img className='w-[51px] h-[60px] mb-[20px]' src={dealer} alt="Trusted Car Dealership" />
                    <h2 className='mb-[14px] text=[20px] font-medium text-[#050B20]'>Shaffof narxlar</h2>
                    <p className='text-[15px] font-normal text-[#050B20]'>Hech qanday yashirin to‘lovlar – to‘lovlar va shartlar to‘liq ochiq va tushunarli.</p>
                </div>
                <div>
                    <img className='w-[51px] h-[60px] mb-[20px]' src={price} alt="Transparent Pricing" />
                    <h2 className='mb-[14px] text=[20px] font-medium text-[#050B20]'>Tez va oson ijara</h2>
                    <p className='text-[15px] font-normal text-[#050B20]'>Minimal hujjatlar bilan avtomobilni bir necha daqiqada ijaraga oling.</p>
                </div>
                <div>
                    <img className='w-[51px] h-[60px] mb-[20px]' src={service} alt="Expert Car Service" />
                    <h2 className='mb-[14px] text=[20px] font-medium text-[#050B20]'>Yuqori sifatli xizmat</h2>
                    <p className='text-[15px] font-normal text-[#050B20]'>Har bir mashina texnik ko‘rikdan o‘tkazilgan va toza holda taqdim etiladi.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default React.memo(Why)