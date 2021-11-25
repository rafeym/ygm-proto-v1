import React from 'react'
import { Container } from '../../globalStyles'

import {
  ClientSection,
  ClientInfoRow,
  ClientInfoCol,
  ClientTextWrapper,
  ClientTopHeading,
  Heading,
  SubHeading,
  HeroImgWrapper,
  Img,
} from '../Client/Client.elements'

const Client = ({
  bgLight,
  imgStart,
  lightHeading,
  topLine,
  lightTxt,
  headline,
  lightTxtDesc,
  description,

  start,
  img,
  alt,
}) => {
  return (
    <>
      <ClientSection bgLight={bgLight} id='client'>
        <Container>
          <ClientInfoRow imgStart={imgStart}>
            <ClientInfoCol>
              <ClientTextWrapper>
                <ClientTopHeading lightHeading={lightHeading}>
                  {topLine}
                </ClientTopHeading>
                <Heading lightTxt={lightTxt}>{headline}</Heading>
                <SubHeading lightTxtDesc={lightTxtDesc}>
                  {description}
                </SubHeading>
              </ClientTextWrapper>
            </ClientInfoCol>
            <ClientInfoCol>
              <HeroImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </HeroImgWrapper>
            </ClientInfoCol>
          </ClientInfoRow>
        </Container>
      </ClientSection>
    </>
  )
}

export default Client
