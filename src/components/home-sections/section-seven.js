import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

const HomeSectionSeven = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS7Content
                    homeTestimonialSlides {
                        homeTestimonialSlide
                    }
                }
            }
            optomiReview: file(relativePath: { eq: "optomi-reviews.png" }) {
                childImageSharp {
                  gatsbyImageData (
                      width: 420
                      placeholder: TRACED_SVG
                      formats: [AUTO, WEBP, AVIF]
                  )
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
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s7-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS7Content}} />
            <div class="s7-slider">
                <Slider {...settings}>
                    {data.queryContent.homeSection.homeTestimonialSlides.map(testSrc => {
                        return(
                            <div className={"s7-testimonial"} dangerouslySetInnerHTML={{ __html: testSrc.homeTestimonialSlide}} />
                        )
                    })}
                </Slider>
            </div>
            <div class="s7-image">
                <GatsbyImage className={"s7-reviews"} image={data.optomiReview.childImageSharp.gatsbyImageData} alt={"Optomi Reviews on Comparably and Glassdoor"} />
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    padding: 50px 20px;
    .s7-content {
        text-align: center;
    }
    .s7-slider {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        p {
            margin-bottom: 0px;
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
    .s7-image {
        text-align: center;
    }
`

export default HomeSectionSeven