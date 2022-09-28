import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"


const HomeSectionHero = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeHeroContent
                    homeHeroBackground {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 1800
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

        <MainSection>
            <GatsbyImage className={"hero-background"} image={data.queryContent.homeSection.homeHeroBackground.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.homeSection.homeHeroBackground.title} />
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"hero-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeHeroContent}} />
        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    .hero-background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .hero-content {
        position: relative;
        z-index: 2;
        padding: 100px 20px 50px;
        text-align: center;
        .gatsby-image-wrapper {
            max-width: 650px;
            width: 100%;
            height: auto;
        }
        img {
            max-width: 650px;
            width: 100%;
            height: auto;
            object-fit: contain;
        }
        p {
            color: #898c8e;
            letter-spacing: 1px;
        }
    }
`

export default HomeSectionHero