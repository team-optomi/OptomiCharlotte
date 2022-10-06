import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const FooterSocials = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 231}) {
                footerSections {
                    footerSocialIcons {
                        footerIconLink
                        footerIconImage {
                            title
                            localFile {
                              childImageSharp {
                                  gatsbyImageData (
                                      width: 45
                                      placeholder: TRACED_SVG
                                      formats: [AUTO, WEBP, AVIF]
                                  )
                              }
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        <SocialBox>
            {data.queryContent.footerSections.footerSocialIcons.map(icon => (
            <SocialIcon>
                <a href={icon.footerIconLink} target="_blank" rel="noopener noreferrer" aria-label="Link">
                    <GatsbyImage className={"social-icon"} image={icon.footerIconImage.localFile.childImageSharp.gatsbyImageData} alt={icon.footerIconImage.title} />
                </a>
            </SocialIcon>
            ))}
        </SocialBox>
        
    )
}

const SocialBox = styled.div`
    position: absolute;
    top: 200px;
    left: 240px;
    display: flex;
    width: 110px;
    flex-wrap: wrap;
    @media(max-width:1550px) {
        top: auto;
        bottom: 260px;
        left: 210px;
    }
    @media(max-width:1400px) {
        bottom: 340px;
        left: 180px;
    }
    @media(max-width:700px) {
        position: relative;
        bottom: auto;
        left: auto;
        justify-content: center;
    }
`

const SocialIcon = styled.div`
    width: 45px;
    height: 45px;
    margin: 5px;
    @media(max-width:1400px) {
        width: 30px;
        height: 30px;
    }
    .social-icon {
        width: 45px !important;
        height: 45px !important;
        img {
            width: 45px !important;
            height: 45px !important;
            margin-bottom: 0;
        }
        @media(max-width:1400px) {
            width: 30px !important;
            height: 30px !important;
            img {
                width: 30px !important;
                height: 30px !important;
            }
        }
    }
`

export default FooterSocials