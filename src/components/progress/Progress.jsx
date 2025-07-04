import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Progress = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <section className='mt-[120px]' ref={ref}>
            <div className='containerL'>
                <div className='bg-[#EEF1FB] py-[90px] px-[90px] rounded-2xl'>
                    <div className='grid grid-cols-4 gap-[124px] place-items-center text-center text-[#405FF2]'>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={100} suffix='+' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>Ijara uchun mashinalar</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={98} suffix='%' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>Mamnun mijozlar</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={200} suffix='+' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>Kunlik tashriflar</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={25} suffix='+' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>Hamkor dilerlar</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Progress)
