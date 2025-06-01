import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/common/contactForm/ContactForm'

const ContactUs = () => {
  return (
    <div className='container mt-10 grid grid-cols-2'>
      <div className='ml-[285px] flex items-center'>
        <div>
          <div>
            <div>
              <HeadingIcon text={HeadingIconText.contactUs} />
            </div>
            <h2 className='text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px] font-bold mb-4'>
              Let's Discuss
              <br />
              Your Next Project
            </h2>
            <p className='text-lg mb-4'>
              Fill out the form, or call us to set up a free at-home
              consultation.
            </p>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/locationIcon.webp'
                width={28}
                height={28}
                alt='Location Icon'
              />
              <p>43 Rachel Crescent , Markham, ON, L6C 1R8</p>
            </div>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/phoneIcon.webp'
                width={28}
                height={28}
                alt='Phone Icon'
              />
              <p>(647) 786-9642</p>
            </div>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/emailIcon.webp'
                width={28}
                height={28}
                alt='Email Icon'
              />
              <p className='underline'>
                grandlandscapinginterlocking@gmail.com
              </p>
            </div>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/clockIcon.webp'
                width={28}
                height={28}
                alt='Clock Icon'
              />
              <p>Mon & SUN by Appointment TUE - SAT (10am - 7pm)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black pr-[285px]'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
