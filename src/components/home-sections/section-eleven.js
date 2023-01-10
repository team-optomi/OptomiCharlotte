import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"

const HomeSectionEleven = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS11Content
                    homeSliderPosts {
                        ... on WpSuccessStory {
                          title
                          slug
                          lastEditedBy {
                            node {
                              name
                            }
                          }
                          featuredImage {
                            node {
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
                          }
                        }
                      }
                    homeS11ButtonLink
                    homeS11Button {
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

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    }

    return(

        <MainSection>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s11-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS11Content}} />
            <div class="s11-slider">
                <Slider {...settings}>
                {data.queryContent.homeSection.homeSliderPosts.map(postSrc => {
                    return(
                        <div class="s11-post">
                            <Link to={`/success-stories/${postSrc.slug}`}>
                                <GatsbyImage className={"s11-post-bg"} image={postSrc.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={postSrc.featuredImage.node.title} />
                                <div class="s11-post-content">
                                    <h3>{postSrc.title}</h3>
                                    <p>{postSrc.lastEditedBy.node.name}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
                </Slider>
            </div>
            <div class="s11-button">
                <Link to={data.queryContent.homeSection.homeS11ButtonLink}>
                    <GatsbyImage className={"s11-button-icon"} image={data.queryContent.homeSection.homeS11Button.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.homeSection.homeS11Button.title} />
                </Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    margin: 50px 0px;
    .s11-content {
        text-align: center;
    }
    .s11-slider {
        height: 450px;
        .s11-post {
            position: relative;
            height: 450px;
            a {
                display: flex !important;
                align-items: flex-end;
                height: 100%;
                width: 100%;
                text-decoration: none;
                background-color: transparent;
                transition-duration: .3s;
                &:hover {
                    background-color: rgba(0, 40, 85, .6);
                    .s11-post-content {
                        opacity: 1;
                    }   
                }
            }
            .gatsby-image-wrapper {
                position: absolute;
                z-index: -1;
                height: 100%;
            }
            .s11-post-content {
                position: relative;
                z-index: 2;
                padding: 20px 40px;
                opacity: 0;
                transition-duration: .3s;
                h3 {
                    font-family: "Helvetica Thin";
                    color: rgb(255,255,255);
                    font-size: 32px;
                    font-weight: 100;
                    line-height: 1.3;
                    text-transform: uppercase;
                    margin-top: 0px;
                    margin-bottom: 10px;
                }
                p {
                    font-family: BonVivant;
                    color: #298fc2;
                    font-size: 42px;
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
    .s11-button {
        text-align: center;
    }
`

export default HomeSectionEleven