import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

const HomeSectionTen = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeTwitterImage {
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
                    homeTweets {
                        homeTweet
                    }
                }
            }
        }
    `)

    const settings = {
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    }

    return(

        <MainSection>
            <div class="flex-row">
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease"
                className={"s10-image"}>
                    <GatsbyImage className={"s10-twitter"} image={data.queryContent.homeSection.homeTwitterImage.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.homeSection.homeTwitterImage.title} />
                </div>
                <div class="s10-slider">
                    <Slider {...settings}>
                    {data.queryContent.homeSection.homeTweets.map(tweet => {
                        return(
                            <div class="s10-tweet" dangerouslySetInnerHTML={{ __html: tweet.homeTweet}} />
                        )
                    })}
                    </Slider>
                </div>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    background-color: #003a5c;
    padding: 50px 20px;
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .s10-image {
            width: 50%;
            padding-right: 100px;
        }
        .s10-slider {
            width: 50%;
            .s10-tweet {
                text-align: center;
                p {
                    font-size: 20px;
                    margin-bottom: 10px;
                    a {
                        color: #2aa9e0;
                        text-decoration: none;
                    }
                }
            }
            .slick-prev {
                left: -50px;
                top: 50px;
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
                right: -50px;
                top: 50px;
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
    }
    @media(max-width:680px) {
        .flex-row {
            .s10-image {
                display: none;
            }
            .s10-slider {
                width: 100%;
                .slick-prev,
                .slick-next {
                    display: none;
                }
            }
        }
    }
`

export default HomeSectionTen