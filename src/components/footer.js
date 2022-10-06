import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import FooterLogo from "../components/logos/footer-logo"
import FooterAwards from "../components/logos/footer-awards"
import SpinningSocials from "../components/logos/spinning-socials"
import FooterSocialBox from "../components/footer-socials"

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 231}) {
                footerSections {
                    footer1ColumnTitle
                    footer1ColumnContent
                    footer2ColumnTitle
                    footer2ColumnContent
                    footer3ColumnTitle
                    footer3ColumnContent
                    footer4ColumnTitle
                    footerInstagramLink
                    copyrightContent
                    instagramImages {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 150
                                  placeholder: BLURRED
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                }
            }
        }
    `)

    return(
        <FooterMain>
        
            <FooterLogoCol>
                <FooterLogo/>
            </FooterLogoCol>
            <FooterRow>
                <FooterCol className={"col-one"}>
                    <h4>{data.queryContent.footerSections.footer1ColumnTitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: data.queryContent.footerSections.footer1ColumnContent }}/>
                </FooterCol> 
                <FooterCol className={"col-two"}>
                    <h4>{data.queryContent.footerSections.footer2ColumnTitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: data.queryContent.footerSections.footer2ColumnContent }}/>
                </FooterCol> 
                <FooterCol className={"col-three"}>
                    <h4>{data.queryContent.footerSections.footer3ColumnTitle}</h4>
                    <div dangerouslySetInnerHTML={{ __html: data.queryContent.footerSections.footer3ColumnContent }}/>
                </FooterCol> 
                <FooterCol className={"col-four"}>
                    <h4>{data.queryContent.footerSections.footer4ColumnTitle}</h4>
                    <InstaFlex>
                        {data.queryContent.footerSections.instagramImages.map(imgSrc => (
                        <InstaImage>
                            <a href={data.queryContent.footerSections.footerInstagramLink} target="_blank" rel="noopener noreferrer" aria-label="Link">
                                <GatsbyImage image={imgSrc.localFile.childImageSharp.gatsbyImageData} alt={imgSrc.title} />
                            </a>
                        </InstaImage>
                        ))}
                    </InstaFlex>
                </FooterCol>
            </FooterRow>
            <FooterSocials>
                <SpinningSocials/>
                <FooterSocialBox/>
            </FooterSocials>
            <FooterAwardsCol>
                <FooterAwards/>
            </FooterAwardsCol>
            <FooterBottom dangerouslySetInnerHTML={{ __html: data.queryContent.footerSections.copyrightContent }} />
        </FooterMain>
    )

}

const FooterMain = styled.div`
    background-color: #000;
    padding-top: 50px;
    position: relative;
    z-index: 2;
    border-top: 1px solid #333;
    overflow: hidden;
`

const FooterSocials = styled.div`
    position: absolute;
    left: -200px;
    bottom: -115px;
    width: 600px;
    height: 600px;
    background-color: transparent;
    overflow: hidden;
    .gatsby-image-wrapper {
        width: 580px;
        height: 580px;
        margin-bottom: 0px;
    }
    @media(max-width:1550px) {
        bottom: -175px;
        .gatsby-image-wrapper {
            width: 500px;
            height: 500px;
        }
    }
    @media(max-width:1400px) {
        bottom: -260px;
        left: -150px;
        .gatsby-image-wrapper {
            width: 400px;
            height: 400px;
        }
    }
    @media(max-width:700px) {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 400px;
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        > .gatsby-image-wrapper {
            position: absolute !important;
        }
    }
`

const FooterRow = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
    margin: 0 auto;
    display: flex;
    position: relative;
    z-index: 2;
    @media(max-width:1750px) {
        max-width: 940px;
    }
    @media(max-width:1300px) {
        max-width: 790px;
    }
    @media(max-width:1150px) {
        max-width: 740px;
    }
    @media(max-width:980px) {
        max-width: 540px;
        flex-wrap: wrap;
    }
    @media(max-width:800px) {
        max-width: 440px;
    }
`

const FooterLogoCol = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    .gatsby-image-wrapper {
        width: 135px;
        height: 51px;
        margin-bottom: 15px;
        @media(max-width:700px) {
            margin: 0 auto;
            margin-bottom: 15px;
        }
    }
    @media(max-width:1750px) {
        max-width: 940px;
    }
    @media(max-width:1300px) {
        max-width: 790px;
    }
    @media(max-width:1150px) {
        max-width: 740px;
    }
    @media(max-width:980px) {
        max-width: 540px;
    }
    @media(max-width:800px) {
        max-width: 440px;
        .gatsby-image-wrapper {
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const FooterCol = styled.div`
    &.col-one {
        width: 23%;
    }
    &.col-two {
        width: 20%;
    }
    &.col-three {
        width: 30%;
    }
    &.col-four {
        width: 27%;
        position: relative;
    }
    h4 {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        font-size: 15px;
        line-height: 1;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
    }
    a {
        font-family: "Helvetica Thin";
        color: #a6aaab;
        text-decoration: none !important;
        transition-duration: .3s;
        font-weight: 600;
        &:hover {
            color: #fff;
        }
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin-left: 0;
        li {
            font-family: "Helvetica Thin";
            font-size: 14px;
            margin-bottom: 0px;
            line-height: 1.5;
        }
    }
    @media(max-width:980px) {
        width: 50% !important;
        margin-bottom: 20px;
    }
    @media(max-width:700px) {
        text-align: center;
        width: 100% !important;
    }
`

const FooterAwardsCol = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .bottom-links {
        a {
            font-family: "Helvetica Thin";
            font-size: 14px;
            margin-bottom: 0px;
            line-height: 1;
            text-decoration: none;
            color: #a6aaab;
            margin-left: 20px;
            &:hover {
                color: #fff;
            }
        }
    }
    .gatsby-image-wrapper {
        width: 380px;
        height: 30px;
        margin-bottom: 50px;
        @media(max-width:700px) {
            margin: 0 auto;
            margin-bottom: 15px;
        }
    }
    @media(max-width:1750px) {
        max-width: 940px;
    }
    @media(max-width:1300px) {
        max-width: 790px;
    }
    @media(max-width:1150px) {
        max-width: 740px;
    }
    @media(max-width:980px) {
        max-width: 540px;
        margin-top: 50px;
    }
    @media(max-width:800px) {
        justify-content: center;
        .gatsby-image-wrapper {
            max-width: 380px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            img {
                object-fit: contain !important;
            }
        }
    }
    @media(max-width:700px) {
        margin-top: 0;
    }
`

const FooterBottom = styled.div`
    background-color: #1b1b1b;
    padding: 10px 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    p {
        font-family: "Helvetica Thin";
        font-size: 12px;
        line-height: 22px;
        color: #818181;
        margin-bottom: 0;
        a {
            color: #818181;
            text-decoration: none;
            padding-left: 3px;
        }
        a:first-child {
            color: #5ab3e8;
            font-weight: 600;
            text-decoration: none !important;
            padding-left: 0;
        }
    }
`

const InstaFlex = styled.div`
    position: absolute;
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    @media(max-width:1550px) {
        width: 300px;
    }
    @media(max-width:700px) {
        position: relative;
        max-width: 350px;
        margin: 0 auto;
        justify-content: center;
    }
`

const InstaImage = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    margin-bottom: 10px;
    .gatsby-image-wrapper {
        width: 75px !important;
        height: 75px !important;
        overflow: hidden;
        img {
            object-fit: cover;
            margin-bottom: 0; 
        }
    }
`

export default Footer