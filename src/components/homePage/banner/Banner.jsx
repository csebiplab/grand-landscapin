import React from 'react'
import Image from 'next/image'
import GetInTouchForm from '@/components/common/form/GetInTouchForm'

const Banner = () => {
  return (
    <div className='full__section_x relative w-full h-[750px]'>
      <Image
        src='/homePageBannerBg.webp'
        alt='Hero background'
        fill
        priority
        style={{ objectFit: 'cover' }}
        className='z-0'
      />
      <div className='absolute inset-0 bg-black/40 z-10'></div>{' '}
      {/* Optional dark overlay */}
      <div className='relative z-20 flex items-center justify-between h-full'>
        <div className='text-white'>
          <p className='text-[#E8D255]'>Landscaping</p>
          <h1 className='text-[52px] leading-[70px] font-bold'>
            Landscaping, <br /> interlocking & more!
          </h1>
          <p className='text-lg py-4'>
            Expert landscaping and interlocking for stunning, lasting outdoor
            spaces.
          </p>
          <hr className='' />
          <p className='font-bold pt-4 pb-2'>Trust Us:-</p>
          <Image
            src='/bannerHomeStarsBtn.webp'
            width={236}
            height={32}
            alt='bannerHomeStarsBtn'
          />
          <button className='text-white font-bold flex items-center gap-2 bg-[#7E3C07] px-5 py-2 rounded mt-8'>
            <Image
              src='/phoneIconNavbar.webp'
              width={26}
              height={26}
              alt='callIconNavbar'
            />
            Free Estimate
          </button>
        </div>
        <div>
          <GetInTouchForm />
        </div>
      </div>
    </div>
  )
}

export default Banner
