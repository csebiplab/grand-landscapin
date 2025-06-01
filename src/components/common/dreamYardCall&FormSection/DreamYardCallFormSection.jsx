import React from 'react'
import Image from 'next/image'

const DreamYardCallFormSection = () => {
  return (
    <div className='container my-10 relative w-full h-[240px] md:h-[300px] overflow-hidden flex items-center justify-center'>
      {/* Background Image */}
      <Image
        src='/dreamYardCall&FormSection.webp'
        alt='Banner Background'
        fill
        className='object-cover'
        priority
      />

      {/* Lighter Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-4xl'>
        <h2 className='text-white text-lg md:text-3xl font-semibold leading-snug'>
          Create your dream yard.
          <br />
          <span className='relative inline-block'>
            <span className='relative z-10'>
              <strong>Tell us about your project today.</strong>
            </span>
          </span>
        </h2>

        {/* Buttons */}
        <div className='mt-4 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <a
            href='tel:6477063642'
            className='bg-white text-black text-sm md:text-base px-5 py-2 rounded shadow-md font-medium'
          >
            (647) 706-3642
          </a>
          <button className='bg-orange-800 hover:bg-orange-700 text-white text-sm md:text-base px-5 py-2 rounded shadow-md font-medium'>
            Free Estimate
          </button>
        </div>
      </div>
    </div>
  )
}

export default DreamYardCallFormSection
