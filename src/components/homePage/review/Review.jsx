import HeadingIcon from '@/components/common/HeadingIcon'
import { HeadingIconText } from '@/components/common/HeadingIconText'
import React from 'react'
import Image from 'next/image'

const reviewData = [
  {
    id: 1,
    sort_name: 'L',
    name: 'Lisa',
    star: '/fiveStarsImages.webp',
    date: 'Review on 05 March, 2025',
    review:
      'Vlad and Hamid did a wonderful job. The work was done with high quality and in the shortest possible time. I am very pleased with the guys. I recommend Grand Landscaping Interlocking to everyone.',
    g: '/homePageReviewIcon.webp'
  },
  {
    id: 2,
    sort_name: 'W',
    name: 'Waleed Zoghby',
    star: '/fiveStarsImages.webp',
    date: 'Review on 24 February, 2025',
    review:
      'They discussed with us adjustments, modifications and troubleshooting at every major step. They had great suggestions and the design turned out to be even better than expected.',
    g: '/homePageReviewIcon.webp'
  },
  {
    id: 3,
    sort_name: 'S',
    name: 'Samaneh Navabpour',
    star: '/fiveStarsImages.webp',
    date: 'Review on 12 March 2025',
    review:
      'We have been extremely happy and satisfied with Hamid and Vlad. Their work is precise, clean and very modern. They were extremely polite and punctual.',
    g: '/homePageReviewIcon.webp'
  }
]

const Review = () => {
  return (
    <div className='container full__section_x my-10'>
      <div>
        <div className='flex justify-center items-center'>
          <HeadingIcon text={HeadingIconText.chooseUs} />
        </div>
        <h2 className='text-center text-[25px] md:text-3xl lg:text-[32px] xl:text-[35px]  leading-[35px] font-bold text-black pb-5'>
          Satisfied Customers
        </h2>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {reviewData.map(data => (
          <div
            key={data.id}
            className={`border rounded-lg px-[12px] md:px-0 py-[15px] !h-auto !md:h-full`}
          >
            <div className='px-2'>
              <div className='flex items-center gap-[10px]'>
                <p className='font-family-secondary bg-primary-200 py-[6px] px-[14px] rounded-[50px] text-white text-xl 4xl:text-2xl 5xl:text-[25px] font-normal leading-normal'>
                  {data.sort_name}
                </p>
                <div>
                  <p className='font-family-secondary text-base 4xl:text-[17px] 5xl:text-lg font-bold text-black leading-normal'>
                    {data.name}
                  </p>
                  <div className='flex items-center gap-[10px]'>
                    <Image
                      src={data.star}
                      alt='star icon'
                      width={102}
                      height={15}
                    />
                    <p className='font-family-secondary text-xs text-dark-50 font-bold leading-normal'>
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>

              <p className='font-family-secondary py-[15px] text-base font-normal text-black leading-normal'>
                {data.review}
              </p>
              <Image src={data.g} alt='Logo' width={236} height={32} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
