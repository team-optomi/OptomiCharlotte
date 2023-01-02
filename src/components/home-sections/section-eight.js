import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const HomeSectionEight = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS8Content
                    homeS8ButtonLink
                    homeS8ButtonContent
                    homeWordImages {
                        homeWordImage {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 1200
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

        <MainSection>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="800"
            data-sal-easing="ease"
            className={"s8-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS8Content}} />
            <div class="s8-values">
                {data.queryContent.homeSection.homeWordImages.map(imgSrc => {
                    return(
                        <div class="s8-value">
                            <div
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                                <GatsbyImage className={"s8-icon"} image={imgSrc.homeWordImage.localFile.childImageSharp.gatsbyImageData} alt={imgSrc.homeWordImage.title} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div class="s8-button">
                <Link to={data.queryContent.homeSection.homeS8ButtonLink}>{data.queryContent.homeSection.homeS8ButtonContent}</Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    padding: 50px 20px;
    .s8-content {
        text-align: center;
        margin-bottom: 80px;
        h2 {
            span.bonvivant {
                font-size: 80px;
            }
        }
    }
    .s8-values {
        position: relative;
        max-width: 1120px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        .s8-value {
            position: absolute;
            &:nth-child(1) {
                max-width: 671px;
                width: 100%;
                top: -150px;
                left: 0;
            }
            &:nth-child(2) {
                max-width: 700px;
                width: 100%;
                right: 114px;
                top: -61px;
            }
            &:nth-child(3) {
                max-width: 700px;
                width: 100%;
                top: 66px;
                left: -44px;
            }
            &:nth-child(4) {
                max-width: 700px;
                width: 100%;
                right: -52px;
                top: 38px;
            }
            &:nth-child(5) {
                max-width: 700px;
                width: 100%;
                top: 191px;
                right: 24px;
            }
            &:nth-child(6) {
                max-width: 414px;
                width: 100%;
                top: 222px;
                left: 0;
            }
            &:nth-child(7) {
                max-width: 750px;
                width: 100%;
                top: 271px;
                left: 236px;
            }
            &:nth-child(8) {
                max-width: 700px;
                width: 100%;
                top: 403px;
                left: 96px;
            }
        }
    }
    .s8-button {
        text-align: center;
        a {
            font-family: "Helvetica Thin";
            background-color: rgb(41,143,194);
            padding: 15px 30px;
            color: rgb(255,255,255);
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2px;
            display: inline-block;
        }
    }
`

export default HomeSectionEight