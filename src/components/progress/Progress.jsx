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
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={830} suffix='M' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>CARS FOR SALE</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={738} suffix='M' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>DEALER REVIEWS</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={100} suffix='M' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>VISITORS PER DAY</h2>
                        </div>
                        <div>
                            {inView && <CountUp className='font-bold text-[26px]' start={0} end={238} suffix='M' />}
                            <h2 className='mt-[4px] text-[15px] font-normal'>VERIFIED DEALERS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Progress)
