import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";

const Specials = () => {
  return (
    <section className='mt-[120px]'>
        <div className='containerL'>
        <div className='flex items-center justify-between'>
            <h2 className="text-[36px] font-bold mb-[40px]">Specials</h2>
            <a className='flex items-center gap-2 text-[15px] hover:text-blue-500 hover:underline' href="">View all <CgArrowTopRight /></a>
        </div>

            <h2 className='text-center'>Apidan keladi Explore qismi orqali ishlaydigan qilinadi</h2>
        </div>
    </section>
  )
}

export default React.memo(Specials)