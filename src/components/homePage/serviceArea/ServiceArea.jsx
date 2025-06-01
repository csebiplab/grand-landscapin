import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'

const ServiceArea = () => {
  return (
    <div className='container full__section_x my-10'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex justify-center lg:justify-normal items-center'>
          <HeadingIcon text={HeadingIconText.serviceArea} />
        </div>
        <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px]  leading-[35px] font-bold text-black text-center pb-3'>
          Service Area
        </h2>
        <p className='text-center text-lg'>
          We provide landscaping and construction services
        </p>
      </div>
      <div className='bg-black flex justify-center gap-16 px-[14px] py-[24px]  mt-4'>
        <div className='flex items-center gap-16'>
          <h3 className='text-base xl:text-lg 3xl:text-[21px] 5xl:text-[22px] font-bold text-white'>
            Toronto
          </h3>
          <div className='h-4 w-[1px] bg-gray-400' />
        </div>
        <div className='flex  items-center gap-16'>
          <h3 className='text-base xl:text-lg 3xl:text-[21px] 5xl:text-[22px] font-bold text-white'>
            Vaughan
          </h3>
          <div className='h-4 w-[1px] bg-gray-400' />
        </div>
        <div className='flex items-center gap-16'>
          <h3 className='text-base xl:text-lg 3xl:text-[21px] 5xl:text-[22px] font-bold text-white'>
            Markham
          </h3>
          <div className='h-4 w-[1px] bg-gray-400' />
        </div>
        <div className='flex items-center gap-16'>
          <h3 className='text-[15px] md:text-base xl:text-lg 3xl:text-[21px] 5xl:text-[22px] font-bold text-white'>
            Richmond Hill
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ServiceArea
