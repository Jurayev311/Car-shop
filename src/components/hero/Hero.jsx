import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import malibu from '../../assets/malibu.jpg'
import cobalt from '../../assets/cobalt.png'
import onix from '../../assets/onix.png'
import kia from '../../assets/kia.jpg'
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full text-white">
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper relative"
        >
          
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-screen object-cover' src={malibu} alt="Mercedes-Benz, C Class" />
          <div className='absolute top-[50%] left-[15%] translate-x-[-15%] translate-y-[-50%] z-20'>
            <h2 className='font-medium text-[70px]'>Chevrolet Malibu 2</h2>
            <Link to={'/listing'} className='flex items-center justify-center w-[165px] h-[48px] rounded-[16px] bg-white text-black cursor-pointer mt-[5px]'>Barcha mashinalar <CgArrowTopRight /> </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-screen object-cover' src={cobalt} alt="Fast car view" />
            <div className='absolute top-[50%] left-[15%] translate-x-[-15%] translate-y-[-50%] z-20'>
            <h2 className='font-medium text-[70px]'>Chevrolet Cobalt</h2>
            <Link to={'/listing'} className='flex items-center justify-center w-[165px] h-[48px] rounded-[16px] bg-white text-black cursor-pointer mt-[5px]'>Barcha mashinalar <CgArrowTopRight /> </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-screen object-cover' src={onix} alt="Perfect car scenery" />
            <div className='absolute top-[50%] left-[15%] translate-x-[-15%] translate-y-[-50%] z-20'>
            <h2 className='font-medium text-[70px]'>Chevrolet Onix</h2>
            <Link to={'/listing'} className='flex items-center justify-center w-[165px] h-[48px] rounded-[16px] bg-white text-black cursor-pointer mt-[5px]'>Barcha mashinalar <CgArrowTopRight /> </Link>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-screen object-cover' src={kia} alt="Ranger car" />
            <div className='absolute top-[50%] left-[15%] translate-x-[-15%] translate-y-[-50%] z-20'>
            <h2 className='font-medium text-[70px]'>KIA K5</h2>
            <Link to={'/listing'} className='flex items-center justify-center w-[165px] h-[48px] rounded-[16px] bg-white text-black cursor-pointer mt-[5px]'>Barcha mashinalar <CgArrowTopRight /> </Link>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(Hero);
