import React from 'react'
import Banner from './banner/Banner'
import About from './about/About'
import ChooseUs from './chooseUs/ChooseUs'

const HomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <About />
      </section>
      <section>
        <ChooseUs />
      </section>
    </div>
  )
}

export default HomePage
