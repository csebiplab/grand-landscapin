import GetInTouchForm from '@/components/common/form/GetInTouchForm'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'

const Blogs = () => {
  return (
    <div className='full__section_x my-12'>
      <div className='grid grid-cols-5'>
        <div className='col-span-3 flex items-center'>
          <div>
            <div className='flex justify-center lg:justify-normal items-center'>
              <HeadingIcon text={HeadingIconText.blogs} />
            </div>
            <h1 className='text-4xl font-bold'>
              Discover Expert Tips & Inspiration on Our Landscaping Blog
            </h1>
            <p className='leading-9 mr-7'>
              Stay informed and inspired with the Grand Landscaping &
              Interlocking blog—your go-to resource for expert advice, design
              ideas, seasonal maintenance tips, and the latest trends in
              landscape construction. Whether you're planning a new patio,
              looking for driveway care advice, or exploring creative outdoor
              living features, our blog offers valuable insights to help you
              make the most of your outdoor space. Updated regularly by our
              experienced team, it’s designed to guide homeowners through every
              step of their landscaping journey.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='border border-gray-200 rounded-lg shadow-inner p-6 bg-white'>
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
