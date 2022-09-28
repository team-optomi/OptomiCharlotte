import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const HomeSectionNine = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS9Content
                    homeS9Gallery {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 800
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    homeS9ButtonLinks
                    homeS9ButtonImage {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 600
                                    placeholder: TRACED_SVG
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
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s9-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS9Content}} />
            <div class="s9-gallery">
                {data.queryContent.homeSection.homeS9Gallery.map(imgSrc => {
                    return(
                        <div class="s9-image">
                            <Link to={data.queryContent.homeSection.homeS9ButtonLinks}>
                                <GatsbyImage className={"s9-image-main"} image={imgSrc.localFile.childImageSharp.gatsbyImageData} alt={imgSrc.title} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div class="s9-button">
                <Link to={data.queryContent.homeSection.homeS9ButtonLinks}>
                    <GatsbyImage className={"s9-button-icon"} image={data.queryContent.homeSection.homeS9ButtonImage.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.homeSection.homeS9ButtonImage.title} />
                </Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    margin-top: 50px;
    margin-bottom: 50px;
    .s9-content {
        text-align: center;
    }
    .s9-gallery {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(7, 1fr);
        .s9-image {
            .gatsby-image-wrapper {
                width: 100%;
                height: 100%;
            }
            &:nth-child(1) {
                grid-area: 1 / 1 / 4 / 5;
            }
            &:nth-child(2) {
                grid-area: 1 / 5 / 5 / 8;
            }
            &:nth-child(3) {
                grid-area: 1 / 8 / 5 / 12;
            }
            &:nth-child(4) {
                grid-area: 4 / 1 / 8 / 5;
            }
            &:nth-child(5) {
                grid-area: 5 / 5 / 8 / 9;
            }
            &:nth-child(6) {
                grid-area: 5 / 9 / 8 / 12;
            }
        }
    }
    .s9-button {
        text-align: center;
    }
`

export default HomeSectionNine