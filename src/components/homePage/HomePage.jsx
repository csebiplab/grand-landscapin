import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
    </div>
  )
}

export default HomePage
