import React from 'react'
import {
  ClientSection,
  HeroSection,
  InfoSection,
  ServicesSection,
} from '../../components'
import {
  homePageObjFour,
  homePageObjOne,
  homePageObjThree,
  homePageObjTwo,
} from './Data'

const Home = () => {
  return (
    <>
      <HeroSection {...homePageObjOne} />
      <InfoSection {...homePageObjTwo} />
      <ClientSection {...homePageObjThree} />
      <ServicesSection {...homePageObjFour} />
    </>
  )
}

export default Home
