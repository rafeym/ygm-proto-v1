import React from 'react'

import {
  FooterContainer,
  FooterSub,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIcon,
  WebsiteCopyright,
  SocialIcons,
  SocialIconLink,
} from './Footer.elements'

import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSub>
        <FooterSubHeading>
          Join our mailing list for updates and offers.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form onSubmit={(e) => e.preventDefault()}>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSub>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='#'>How it works</FooterLink>
            <FooterLink to='#'>Testimonials</FooterLink>
            <FooterLink to='#'>Careers</FooterLink>
            <FooterLink to='#'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='#'>How it works</FooterLink>
            <FooterLink to='#'>Testimonials</FooterLink>
            <FooterLink to='#'>Careers</FooterLink>
            <FooterLink to='#'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='#'>How it works</FooterLink>
            <FooterLink to='#'>Testimonials</FooterLink>
            <FooterLink to='#'>Careers</FooterLink>
            <FooterLink to='#'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to='/'>
            <SocialIcon />
            YGM
          </SocialLogo>
          <WebsiteCopyright>YGM @ 2021</WebsiteCopyright>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
