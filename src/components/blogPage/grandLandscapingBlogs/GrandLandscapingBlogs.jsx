import React from 'react'
import Image from 'next/image'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'

const GrandLandscapingBlogs = () => {
  return (
    <div className='full__section_x my-10'>
      <div>
        <div className='flex justify-center items-center'>
        <HeadingIcon text={HeadingIconText.blogs} />
      </div>
      <h1 className='text-4xl font-bold text-center mb-7'>
        Grand Landscaping Blogs
      </h1>
      </div>
      <div className='grid grid-cols-3 gap-7'>
        <div className='bg-[#E9E9E9] rounded-2xl'>
          <Image
            className='w-full'
            src='/blogPageGrandLandscapingBlogsImage1.webp'
            width={330}
            height={205}
            alt='blogPageGrandLandscapingBlogsImage1'
          />
          <div className='px-5 py-6'>
            <h2 className='font-bold text-[20px] mb-2'>Driveways</h2>
            <p className='mb-6'>
              Concrete interlocking is the perfect driveway material because it
              is versatile, durable, easy to repair and comes in a wide variety
              of textures, sizes and colours. We build beautiful and durable
              interlock driveways that will add instant curb appeal and value to
              your home.
            </p>
            <a className='pt-5' href='#'>
              Click Here
            </a>
          </div>
        </div>
        <div className='bg-[#E9E9E9] rounded-2xl'>
          <Image
            className='w-full'
            src='/blogPageGrandLandscapingBlogsImage2.webp'
            width={330}
            height={205}
            alt='blogPageGrandLandscapingBlogsImage2'
          />
          <div className='px-5 py-6'>
            <h2 className='font-bold text-[20px] mb-2'>Patios & Walkways</h2>
            <p className='mb-6'>
              Let us help you make the most of your yard, by building a
              beautiful and functional outdoor patio using concrete interlocking
              or natural stone. Both concrete interlocking and natural stone are
              available in a wide array of sizes, textures and colours.
            </p>
            <a className='pt-5' href='#'>
              Click Here
            </a>
          </div>
        </div>
        <div className='bg-[#E9E9E9] rounded-2xl'>
          <Image
            className='w-full'
            src='/blogPageGrandLandscapingBlogsImage3.webp'
            width={330}
            height={205}
            alt='blogPageGrandLandscapingBlogsImage3'
          />
          <div className='px-5 py-6'>
            <h2 className='font-bold text-[20px] mb-2'>Stairs</h2>
            <p className='mb-6'>
              Stairs allows for a smooth transition between the different
              elevations of your home and yard. They are also an important focal
              point in your landscape. We build stairs whose material and design
              are aesthetically pleasing, as well as being safe and durable.
            </p>
            <a className='pt-5' href='#'>
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrandLandscapingBlogs
