import React from 'react'
import { TbCarSuv } from "react-icons/tb";
import { LiaCarSideSolid } from "react-icons/lia";
import Hatchback from '../../assets/Hatchback.svg'
import Coupe from '../../assets/Coupe.svg'
import Hybrid from '../../assets/Hybrid.svg'
import Convertible from '../../assets/Convertible.svg'

const types = [
  { icon: <TbCarSuv className="text-[28px]" />, label: 'SUV' },
  { icon: <LiaCarSideSolid className="text-[28px]" />, label: 'Sedan' },
  { icon: <img src={Hatchback} alt="Hatchback" className="w-[28px] h-[28px]" />, label: 'Hatchback' },
  { icon: <img src={Coupe} alt="Coupe" className="w-[28px] h-[28px]" />, label: 'Coupe' },
  { icon: <img src={Hybrid} alt="Hybrid" className="w-[28px] h-[28px]" />, label: 'Hybrid' },
  { icon: <img src={Convertible} alt="Convertible" className="w-[28px] h-[28px]" />, label: 'Convertible' },
];

const CarType = () => {
  return (
    <section className='mt-[80px]'>
      <div className='containerL'>
        <h2 className='text-[36px] font-bold mb-[40px]'>Browse by Type</h2>

        <div className='grid grid-cols-6 gap-[30px]'>
          {types.map((item, index) => (
            <div
              key={index}
              className='border border-[#E9E9E9] w-[209px] h-[120px] rounded-2xl grid place-items-center text-center hover:bg-gray-100 duration-150 cursor-pointer'
            >
              <div className='grid place-items-center'>
                {item.icon}
                <h2 className='text-[18px] font-medium mt-2'>{item.label}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(CarType)
