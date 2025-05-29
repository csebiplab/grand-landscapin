'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const Gallery = () => {
  // Images with different aspect ratios
  const images = [
    {
      id: 1,
      src: '/galleryImage1.png',
      width: 871,
      height: 365
    },
    {
      id: 2,
      src: '/galleryImage2.png',
      width: 457,
      height: 365
    },

    {
      id: 5,
      src: '/galleryImage5.png',
      width: 801,
      height: 580
    },
    {
      id: 3,
      src: '/galleryImage3.png',
      width: 527,
      height: 279
    },
    {
      id: 4,
      src: '/galleryImage4.png',
      width: 527,
      height: 279
    },
    {
      id: 6,
      src: '/galleryImage6.png',
      width: 871,
      height: 365
    },
    {
      id: 7,
      src: '/galleryImage7.png',
      width: 457,
      height: 365
    }
  ]

  // State for column count based on screen size
  const [columnCount, setColumnCount] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setColumnCount(4)
      } else if (window.innerWidth >= 768) {
        setColumnCount(3)
      } else {
        setColumnCount(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Organize images into columns for masonry layout
  const organizeImages = () => {
    const columns = Array.from({ length: columnCount }, () => [])
    const columnHeights = Array(columnCount).fill(0)

    images.forEach(image => {
      // Find the column with the smallest height
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      )
      columns[shortestColumnIndex].push(image)
      // Update column height (approximate based on image aspect ratio)
      columnHeights[shortestColumnIndex] += image.height / image.width
    })

    return columns
  }

  const columns = organizeImages()

  return (
    <div className='container full__section_x'>
      <div className=''>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Pinterest-Style Gallery
        </h1>
        <div className='flex gap-4'>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className='space-y-4'>
              {column.map(image => (
                <div
                  key={image.id}
                  className='overflow-hidden w-[{image.width}] h-[{image.height}] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <Image
                    src={image.src}
                    alt={`Gallery Image ${image.id}`}
                    width={image.width}
                    height={image.height}
                    className='w-full h-full object-cover'
                    // Optional: Add priority for above-the-fold images
                    priority={image.id <= 4}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
