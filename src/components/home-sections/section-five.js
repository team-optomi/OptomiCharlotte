import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

const HomeSectionFive = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS5Content
                    homeS5ButtonContent
                    homeS5ButtonLink
                    homeJobSlides {
                        homeS5SlideContent
                        homeS5SlideBg {
                            title
                            localFile {
                              childImageSharp {
                                  gatsbyImageData (
                                      width: 600
                                      placeholder: BLURRED
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

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    return(

        <MainSection>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s5-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS5Content}} />
            <div class="s5-slider">
                <Slider {...settings}>
                    {data.queryContent.homeSection.homeJobSlides.map(slideSrc => {
                        return(
                            <div className={"s5-slide"}>
                                <GatsbyImage className={"s5-slide-bg"} image={slideSrc.homeS5SlideBg.localFile.childImageSharp.gatsbyImageData} alt={slideSrc.homeS5SlideBg.title} />
                                <div className={"s5-slide-content"} dangerouslySetInnerHTML={{ __html: slideSrc.homeS5SlideContent}} />
                            </div> 
                        )
                    })}
                </Slider>
            </div>
            <div class="s5-button">
                <Link to={data.queryContent.homeSection.homeS5ButtonLink}>{data.queryContent.homeSection.homeS5ButtonContent}</Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    padding-top: 50px;
    padding-bottom: 0px;
    h2 {
        line-height: 1.8;
    }
    .s5-content {
        text-align: center;
    }
    .s5-slider {
        height: 350px;
        .s5-slide {
            position: relative;
            height: 350px;
            display: flex !important;
            align-items: center;
            .gatsby-image-wrapper {
                position: absolute;
                z-index: 1;
                height: 100%;
            }
            .s5-slide-content {
                position: relative;
                z-index: 2;
                text-align: center;
                padding: 20px 40px;
                p {
                    font-size: 14px;
                }
            }
        }
        .slick-prev {
            left: 10px;
            width: 35px;
            height: 35px;
            border-top: 5px solid #fff;
            border-left: 5px solid #fff;
            z-index: 10;
            transform: rotate(-45deg);
            opacity: .3;
            color: transparent;
            transition-duration: .3s;
            &:before {
                display: none;
            }
            &:hover {
                opacity: .7;
            }
        }
        .slick-next {
            right: 10px;
            width: 35px;
            height: 35px;
            border-top: 5px solid #fff;
            border-right: 5px solid #fff;
            z-index: 10;
            transform: rotate(45deg);
            opacity: .3;
            color: transparent;
            transition-duration: .3s;
            &:before {
                display: none;
            }
            &:hover {
                opacity: .7;
            }
        }
    }
    .s5-button {
        a {
            font-family: "Helvetica Thin";
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 1px;
            display: block;
            width: 100%;
            text-align: center;
            padding: 15px 30px;
            background-color: #298fc2;
            color: #fff;
            text-decoration: none;
        }
    }
`

export default HomeSectionFive