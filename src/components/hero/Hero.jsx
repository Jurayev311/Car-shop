import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import mercedes from '../../assets/Mercedes.jpg';
import fast from '../../assets/Fast.jpg';
import lifestyle from '../../assets/lifestyle.jpg';
import Perfect from '../../assets/Perfect.jpg';
import Ranger from '../../assets/Ranger.jpg';
import { CgArrowTopRight } from "react-icons/cg";

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
          
          <div className='absolute top-[50%] left-[20%] translate-x-[-15%] translate-y-[-50%] z-20'>
            <p className='font-bold text-[40px]'>$35,000</p>
            <h2 className='font-medium text-[70px]'>Mercedes-Benz, C Class</h2>
            <button className='flex items-center justify-center w-[165px] h-[48px] rounded-[16px] bg-white text-black cursor-pointer mt-[5px]'>Learn More <CgArrowTopRight /> </button>
          </div>

          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-[90vh] object-cover' src={mercedes} alt="Mercedes-Benz, C Class" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-[90vh] object-cover' src={fast} alt="Fast car view" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-[90vh] object-cover' src={lifestyle} alt="Lifestyle image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-[90vh] object-cover' src={Perfect} alt="Perfect car scenery" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-full h-[80vh] md:h-[90vh] object-cover' src={Ranger} alt="Ranger car" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default React.memo(Hero);
