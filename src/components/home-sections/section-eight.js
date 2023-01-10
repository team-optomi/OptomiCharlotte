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
    @media(max-width:1200px) {
        .s8-content {
            margin-bottom: 0;
        }
        .s8-values {
            max-width: 820px;
            height: 470px;
            .s8-value {
                &:nth-child(1) {
                    max-width: 471px;
                    top: -90px;
                    left: 35px;
                }
                &:nth-child(2) {
                    max-width: 500px;
                    right: 73px;
                    top: -37px;
                }
                &:nth-child(3) {
                    max-width: 500px;
                    top: 52px;
                    left: -5px;
                }
                &:nth-child(4) {
                    max-width: 500px;
                    right: -38px;
                    top: 44px;
                }
                &:nth-child(5) {
                    max-width: 500px;
                    top: 152px;
                    right: 13px;
                }
                &:nth-child(6) {
                    max-width: 314px;
                    top: 165px;
                    left: 40px;
                }
                &:nth-child(7) {
                    max-width: 550px;
                    top: 207px;
                    left: 222px;
                }
                &:nth-child(8) {
                    max-width: 500px;
                    top: 306px;
                    left: 134px;
                }
            }
        }
    }
    @media(max-width:991px) {
        .s8-values {
            max-width: 620px;
            height: 370px;
            .s8-value {
                &:nth-child(1) {
                    max-width: 371px;
                    top: -86px;
                    left: 24px;
                }
                &:nth-child(2) {
                    max-width: 400px;
                    right: 28px;
                    top: -43px;
                }
                &:nth-child(3) {
                    max-width: 400px;
                    top: 31px;
                    left: -10px;
                }
                &:nth-child(4) {
                    max-width: 400px;
                    right: -56px;
                    top: 21px;
                }
                &:nth-child(5) {
                    max-width: 400px;
                    top: 109px;
                    right: -14px;
                }
                &:nth-child(6) {
                    max-width: 264px;
                    top: 126px;
                    left: 40px;
                }
                &:nth-child(7) {
                    max-width: 450px;
                    top: 161px;
                    left: 195px;
                }
                &:nth-child(8) {
                    max-width: 400px;
                    top: 241px;
                    left: 130px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .s8-values {
            max-width: 440px;
            height: 280px;
            .s8-value {
                &:nth-child(1) {
                    max-width: 271px;
                    top: -75px;
                    left: 5px;
                }
                &:nth-child(2) {
                    max-width: 300px;
                    right: 17px;
                    top: -43px;
                }
                &:nth-child(3) {
                    max-width: 300px;
                    top: 19px;
                    left: -28px;
                }
                &:nth-child(4) {
                    max-width: 300px;
                    right: -46px;
                    top: 10px;
                }
                &:nth-child(5) {
                    max-width: 300px;
                    top: 79px;
                    right: -14px;
                }
                &:nth-child(6) {
                    max-width: 214px;
                    top: 88px;
                    left: -12px;
                }
                &:nth-child(7) {
                    max-width: 350px;
                    top: 119px;
                    left: 116px;
                }
                &:nth-child(8) {
                    max-width: 300px;
                    top: 183px;
                    left: 73px;
                }
            }
        }
    }
    @media(max-width:500px) {
        .s8-values {
            max-width: 440px;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .s8-value {
                position: relative;
                top: auto !important;
                left: auto !important;
                right: auto !important;
            }
        }
    }
`

export default HomeSectionEight