import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'

import {
  InfoSection,
  InfoRow,
  InfoCol,
  TextWrapper,
  TopHeading,
  Heading,
  SubHeading,
  HeroImgWrapper,
  Img,
  ServicesContainer,
  Services,
} from '../Info/Info.elements'

const Service = ({
  bgLight,
  imgStart,
  lightHeading,
  topLine,
  lightTxt,
  headline,
  lightTxtDesc,
  description,
  services,
  start,
  img,
  alt,
  primary,
  buttonTxt,
}) => {
  console.log(services)
  return (
    <>
      <InfoSection bgLight={bgLight} id='services'>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopHeading lightHeading={lightHeading}>{topLine}</TopHeading>
                <Heading lightTxt={lightTxt}>{headline}</Heading>
                <SubHeading lightTxtDesc={lightTxtDesc}>
                  {description}
                </SubHeading>
                <ServicesContainer>
                  {services.map((item) => (
                    <Services>{item}</Services>
                  ))}
                </ServicesContainer>
                <Link to='/'>
                  {buttonTxt ? (
                    <Button big fontBig primary={primary}>
                      {buttonTxt}
                    </Button>
                  ) : null}
                </Link>
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <HeroImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </HeroImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  )
}

export default Service
