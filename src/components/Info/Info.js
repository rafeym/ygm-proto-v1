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
} from './Info.elements'

const Info = ({
  primary,
  bgLight,
  imgStart,
  lightHeading,
  topLine,
  lightTxt,
  headline,
  lightTxtDesc,
  description,
  buttonTxt,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSection bgLight={bgLight} id='about'>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopHeading lightHeading={lightHeading}>{topLine}</TopHeading>
                <Heading lightTxt={lightTxt}>{headline}</Heading>
                <SubHeading lightTxtDesc={lightTxtDesc}>
                  {description}
                </SubHeading>
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

export default Info
