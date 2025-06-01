import GetInTouchForm from '@/components/common/form/GetInTouchForm'
import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='full__section_x my-12'>
      <div className='grid grid-cols-5'>
        <div className='col-span-3 flex items-center'>
          <div>
            <div className='flex justify-center lg:justify-normal items-center'>
              <HeadingIcon text={HeadingIconText.aboutUs} />
            </div>
            <h1 className='text-4xl font-bold'>About Grand Landscaping & Interlocking</h1>
            <p className='leading-9 mr-7'>
              Grand Landscaping & Interlocking is a boutique contracting company
              specializing in landscape construction services. We pride
              ourselves on building durable and beautiful landscapes, at fair
              and affordable prices. 
              <br />
              We offer a range of landscape construction services, making us a
              one-stop shop for all our clients' landscaping needs. We
              build driveways, patios, walkways, stairs, decks, fencing, and
              specialty features like outdoor kitchens, planters and retaining
              walls. We also do repairs and demolition. 
              <br />
              We communicate with our clients throughout the construction
              process to ensure the completed landscape surpasses their
              expectations. Our commitment to our clients is reflected in our
              10/10 average customer rating on Homestars. <br /> Our small team
              of experienced craftsmen are ready to help you build the landscape
              of your dreams. Contact us today!
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

export default AboutUs
