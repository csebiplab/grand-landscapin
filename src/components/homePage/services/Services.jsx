import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='container my-10'>
      <div className='full__section_x'>
        <div className=''>
          <HeadingIcon text={HeadingIconText.chooseUs} />
        </div>
        <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px]  leading-[35px] font-bold text-black pb-5'>
          Our Services
        </h2>
        <div>
          <div className='relative w-[400px] h-[300px] flex items-center justify-center'>
            {/* Background Image */}
            <Image
              src='/homePageServicesImage1.png'
              alt='Driveway'
              fill
              style={{ objectFit: 'cover' }}
              className='rounded-lg'
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black opacity-50 rounded-lg' />

            {/* Centered Text */}
            <div className='absolute text-orange-500 text-3xl md:text-5xl font-semibold z-10'>
              Driveways
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
