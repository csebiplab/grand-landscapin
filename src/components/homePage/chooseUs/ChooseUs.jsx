'use client'

import Image from 'next/image'

import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/virtual'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  767: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1536: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1736: {
    slidesPerView: 3,
    spaceBetween: 20
  }
}

const services = [
  {
    id: '01',
    img: '/homePageChooseUsImage1.webp',
    title: 'Excellent Reviews',
    para: 'People love working with us! How do we know? Because they told us so! Check out all our 10/10 reviews on Homestar.com.'
  },
  {
    id: '02',
    img: '/homePageChooseUsImage2.webp',
    title: 'Free, At Home Consultations',
    para: "Curious about how much a project will cost? Book a free consultation. We'll come to your house, take measurements and get back to you quickly with an estimate."
  },
  {
    id: '03',
    img: '/homePageChooseUsImage3.webp',
    title: 'Quality Craftmanship',
    para: 'Our small team has decades of experience in landscape construction. Our work is beautifully detailed and durable - adding beauty and value to your home.'
  },
  {
    id: '04',
    img: '/homePageChooseUsImage4.webp',
    title: 'Affordable',
    para: 'We offer very competitive rates. Our team is small and skilled, so we can complete projects with maximum efficiency.'
  },
]

const ChooseUs = () => {
  return (
    <div className='container full__section_x'>
      <div className='py-5'>
        <div className=''>
          <div className='container'>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex justify-center lg:justify-normal items-center'>
                <HeadingIcon text={HeadingIconText.chooseUs} />
              </div>
              <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px]  leading-[35px] font-bold text-black text-center pb-5'>
                Why Choose Us
              </h2>
            </div>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false
              }}
              speed={3000}
              allowTouchMove={false}
              breakpoints={breakpoints}
              spaceBetween={12}
            >
              {services.map(({ img, title, para }, index) => (
                <SwiperSlide key={index} className={`!h-auto !md:h-full`}>
                  {/* cart info  */}
                  <div className='border border-[#e0dfdf] rounded-2xl bg-white relative mt-10 h-60'>
                    <div className='space-y-2 px-6 py-7 '>
                      <Image
                        src={img}
                        width={57}
                        height={57}
                        alt='Experience'
                      />
                      <p className='text-lg font-bold'>{title}</p>
                      <p className='leading-6'>{para}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
