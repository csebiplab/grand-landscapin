import React from 'react'
import Banner from './banner/Banner'
import Blogs from './blogsSection/Blogs'

const BlogPage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Blogs />
      </section>
    </div>
  )
}

export default BlogPage
