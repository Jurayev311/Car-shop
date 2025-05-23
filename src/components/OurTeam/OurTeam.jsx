import React from 'react'
import test from '../../assets/test.jpg'

const OurTeam = () => {
  return (
    <section className='mt-[120px]'>
        <div className='containerL'>
            <h2 className="text-[36px] font-bold mb-[40px]">Our Team</h2>

            <div className='grid grid-cols-4 gap-[30px]'>
                <div>
                    <img className='mb-[15px]' src={test} alt="Development Manager" />
                    <h2 className='text-[20px] font-medium text-[#050B20]'>Courtney Henry</h2>
                    <p className='text-[14px] font-normal'>Development Manager</p>
                </div>
                <div>
                    <img className='mb-[15px]' src={test} alt="Development Manager" />
                    <h2 className='text-[20px] font-medium text-[#050B20]'>Courtney Henry</h2>
                    <p className='text-[14px] font-normal'>Development Manager</p>
                </div>
                <div>
                    <img className='mb-[15px]' src={test} alt="Development Manager" />
                    <h2 className='text-[20px] font-medium text-[#050B20]'>Courtney Henry</h2>
                    <p className='text-[14px] font-normal'>Development Manager</p>
                </div>
                <div>
                    <img className='mb-[15px]' src={test} alt="Development Manager" />
                    <h2 className='text-[20px] font-medium text-[#050B20]'>Courtney Henry</h2>
                    <p className='text-[14px] font-normal'>Development Manager</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default React.memo(OurTeam)