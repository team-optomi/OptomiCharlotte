import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

const HomeSectionSix = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS6Content
                    homeS6BgColor
                    homeS6AwardGallery {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 400
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

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    }

    return(

        <MainSection style={{backgroundColor: data.queryContent.homeSection.homeS6BgColor}}>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s6-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS6Content}} />
            <div class="s6-slider">
                <Slider {...settings}>
                    {data.queryContent.homeSection.homeS6AwardGallery.map(awardSrc => {
                        return(
                            <div className={"s6-award-slide"}>
                                <Link to="/awards/">
                                    <GatsbyImage className={"s6-award"} image={awardSrc.localFile.childImageSharp.gatsbyImageData} alt={awardSrc.title} />
                                </Link>
                            </div> 
                        )
                    })}
                </Slider>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    .s6-content {
        text-align: center;
    }
    .s6-slider {
        .s6-award-slide {
            padding: 40px;
            height: 280px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            .gatsby-image-wrapper {
                max-height: 200px;
                img {
                    max-height: 200px;
                }
            }
        }
    }
`

export default HomeSectionSix