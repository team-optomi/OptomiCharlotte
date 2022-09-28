import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const HomeSectionThirteen = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS13Content
                    homeS13Gallery {
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
                    homeS13ButtonLink
                    homeS13ButtonContent {
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
            className={"s13-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS13Content}} />
            <div class="s13-gallery">
                {data.queryContent.homeSection.homeS13Gallery.map(imgSrc => {
                    return(
                        <div class="s13-image">
                            <Link to={data.queryContent.homeSection.homeS13ButtonLink}>
                                <GatsbyImage className={"s13-image-main"} image={imgSrc.localFile.childImageSharp.gatsbyImageData} alt={imgSrc.title} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div class="s13-button">
                <Link to={data.queryContent.homeSection.homeS13ButtonLink}>
                    <GatsbyImage className={"s13-button-icon"} image={data.queryContent.homeSection.homeS13ButtonContent.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.homeSection.homeS13ButtonContent.title} />
                </Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    margin-top: 50px;
    .s13-content {
        text-align: center;
    }
    .s13-gallery {
        height: 450px;
        display: flex;
        align-items: stretch;
        .s13-image {
            width: 33.33%;
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
    .s13-button {
        text-align: center;
    }
`

export default HomeSectionThirteen