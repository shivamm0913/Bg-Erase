import BgSlider from '@/components/BgSlider'
import Header from '@/components/Header'
import Steps from '@/components/Steps'
import Testimonial from '@/components/Testimonial'
import Upload from '@/components/UploadImage'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonial/>
      <Upload/>
    </div>
  )
}

export default Home