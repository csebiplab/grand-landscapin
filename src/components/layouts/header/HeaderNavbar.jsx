import React from 'react'
import Image from 'next/image'

const HeaderNavbar = () => {
  return (
    <div className='container relative z-10'>
      <div className='absolute w-[1183px] mx-auto left-[368px] -top-7 px-4 py-3 bg-white flex items-center justify-between'>
        <Image
          src='/grandLandscapingLogoNavbar.webp'
          width={248}
          height={53}
          alt='callIconNavbar'
        />
        <ul className='flex gap-6 items-center font-bold text-[17px]'>
          <li>
            <a className='text-black' href='/about'>
              About
            </a>
          </li>
          <li>Services</li>
          <li><a className='text-black' href='/work'>
              Work
            </a></li>
          <li><a className='text-black' href='/projects'>
              Projects
            </a></li>
          <li><a className='text-black' href='/blog'>
              Blog
            </a></li>
          <li>
            <a className='text-black' href='/contactUs'>
              Contact Us
            </a>
          </li>
        </ul>
        <button className='text-white font-bold flex items-center gap-2 bg-[#7E3C07] px-5 py-2 rounded'>
          <Image
            src='/phoneIconNavbar.webp'
            width={26}
            height={26}
            alt='callIconNavbar'
          />
          Free Estimate
        </button>
      </div>
    </div>
  )
}

export default HeaderNavbar
