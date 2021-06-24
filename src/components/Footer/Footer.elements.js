import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBullseye } from 'react-icons/fa'

export const FooterContainer = styled.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FooterSub = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 2px;
    padding: 24px;
    color: #fff;
`

export const FooterSubHeading = styled.p`
    margin-bottom: 24px;
    font-size: 24px;
`

export const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`

export const FormInput = styled.input`
    border-radius: 2px;
    margin-right: 10px;
    padding: 10px 20px;
    outline: none;
    border: none;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder {
        color: #242424;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
        margin: 0 0 16px 0;
    }
`
export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 16px;
    width: 160px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h2`
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const SocialIcon = styled(FaBullseye)`
    margin-right: 10px;
`

export const WebsiteCopyright = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
