import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const WhenInCharlottePage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageMain>
                <div class="title-row">
                    <h1>WHEN IN <span class="blue bonvivant">Charlotte</span></h1>
                    <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenIntroduction}} />
                </div>
                <div class="row-one">
                    <div class="gallery">
                    {queryContent.whenInCharlottePage.whenRowOneGallery.map(imageSrc => {
                        return(
                            <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                        )
                    })}
                    </div>
                    <div class="description">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenRowOneDescription}} />
                    </div>
                </div>
                <div class="row-two">
                    <div class="image">
                        <GatsbyImage image={queryContent.whenInCharlottePage.whenRowTwoImage.localFile.childImageSharp.gatsbyImageData} alt={queryContent.whenInCharlottePage.whenRowTwoImage.title} />
                    </div>
                    <div class="description">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenRowTwoDescription}} />
                    </div>
                </div>
                <div class="row-three">
                    <div class="left-col">
                        <div class="image">
                            <GatsbyImage image={queryContent.whenInCharlottePage.whenRowThreeLeftImage.localFile.childImageSharp.gatsbyImageData} alt={queryContent.whenInCharlottePage.whenRowThreeLeftImage.title} />
                        </div>
                        <div class="description">
                            <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenRowThreeLeftDescription}} />
                        </div>
                    </div>
                    <div class="right-col">
                        <div class="image">
                            <GatsbyImage image={queryContent.whenInCharlottePage.whenRowThreeRightImage.localFile.childImageSharp.gatsbyImageData} alt={queryContent.whenInCharlottePage.whenRowThreeRightImage.title} />
                        </div>
                        <div class="description">
                            <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenRowThreeRightDescription}} />
                        </div>
                    </div>
                </div>
                <div class="row-four">
                    <div class="image">
                        <GatsbyImage image={queryContent.whenInCharlottePage.whenRowFourImage.localFile.childImageSharp.gatsbyImageData} alt={queryContent.whenInCharlottePage.whenRowFourImage.title} />
                    </div>
                    <div class="description">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.whenInCharlottePage.whenRowFourDescription}} />
                    </div>
                </div>
            </PageMain>
        </Layout>
    )

}

const PageMain = styled.section`
    .title-row {
        max-width: 1240px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        h1 {
            font-family: "Helvetica Regular";
            color: #898c8e;
            font-weight: 100;
            margin-bottom: 45px;
            text-align: center;
            span {
                display: block;
                font-family: BonVivant;
                color: #298fc2;
                font-size: 100px;
                position: relative;
                bottom: 12px;
            }
        }
        p {
            font-family: "Helvetica Thin";
            color: #898c8e;
            font-size: 16px;
            line-height: 1.3;
        }
    }
    .description {
        background-color: #298fc2;
        padding: 10px 20px;
        p {
            font-family: "Helvetica Thin";
            color: #fff;
            font-size: 16px;
            line-height: 1.3;
            text-align: center;
            margin-bottom: 0;
        }
    }
    .row-one {
        .gallery {
            display: flex;
        }
    }
    .row-three {
        display: flex;
        .left-col {
            width: 50%;
        }
        .right-col {
            width: 50%;
        }
    }
`

export default WhenInCharlottePage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 508}) {
            seo {
                title
                metaDesc
            }
            whenInCharlottePage {
                whenIntroduction
                whenRowOneGallery {
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
                whenRowOneDescription
                whenRowTwoImage {
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
                whenRowTwoDescription
                whenRowThreeLeftImage {
                    title
                    localFile {
                      childImageSharp {
                          gatsbyImageData (
                              width: 1200
                              placeholder: BLURRED
                              formats: [AUTO, WEBP, AVIF]
                          )
                      }
                    }
                }
                whenRowThreeLeftDescription
                whenRowThreeRightImage {
                    title
                    localFile {
                      childImageSharp {
                          gatsbyImageData (
                              width: 1200
                              placeholder: BLURRED
                              formats: [AUTO, WEBP, AVIF]
                          )
                      }
                    }
                }
                whenRowThreeRightDescription
                whenRowFourImage {
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
                whenRowFourDescription
            }
        }
    }
`