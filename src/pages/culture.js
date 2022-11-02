import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const CulturePage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageMain>
                <header>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{ __html: queryContent.culturePage.cultureTitle}} />
                </header>
                <RowOne>
                    <div class="content">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.culturePage.cultureRowOneContent}} />
                    </div>
                    {queryContent.culturePage.cultureRowOneGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                >
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowOne>
                <RowTwo>
                    {queryContent.culturePage.cultureRowTwoGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                >
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowTwo>
                <RowThree>
                    <div class="content">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.culturePage.cultureRowThreeContent}} />
                    </div>
                    {queryContent.culturePage.cultureRowThreeGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                >
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowThree>
                <RowFour>
                    <div class="content">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.culturePage.cultureRowFourContent}} />
                    </div>
                    {queryContent.culturePage.cultureRowFourGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                >
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowFour>
                <RowFive>
                    {queryContent.culturePage.cultureRowFiveGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                > 
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowFive>
                <RowSix>
                    <div class="content">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.culturePage.cultureRowSixContent}} />
                    </div>
                    {queryContent.culturePage.cultureRowSixGallery.map((imageSrc, i) => {
                        return(
                            <div id={"row_one_img_" + i} className={"culture-image culture-image-" + i}>
                                <div
                                 data-sal="fade"
                                 data-sal-duration="1000"
                                 data-sal-delay="300"
                                 data-sal-easing="ease"
                                >
                                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                                </div>
                            </div>
                        )
                    })}
                </RowSix>
            </PageMain>
        </Layout>
    )

}

const PageMain = styled.div`
    header {
        padding-top: 45px;
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
    }
`

const RowOne = styled.section`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    .content {
        grid-column: 4 / 11;
        grid-row: 4 / 6;
        display: flex;
        align-items: center;
        padding: 20px 80px;
        p {
            font-family: "Helvetica Thin";
            color: rgb(255,255,255);
            font-size: 24px;
            line-height: 1.3;
            max-width: 830px;
            span.blue {
                color: #298fc2;
            }
            span.bonvivant {
                font-family: BonVivant;
                font-size: 32px;
                line-height: 0;
            }
        }
    }
    .culture-image-0 {
        grid-column: 1 / 4;
        grid-row: 1 / 3;
    }
    .culture-image-1 {
        grid-column: 4 / 7;
        grid-row: 1 / 4;
    }
    .culture-image-2 {
        grid-column: 7 / 11;
        grid-row: 1 / 4;
    }
    .culture-image-3 {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

const RowTwo = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    .culture-image-0 {
        grid-column: 1 / 2;
        grid-row: 1 / 6;
    }
    .culture-image-1 {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    }
    .culture-image-2 {
        grid-column: 2 / 3;
        grid-row: 3 / 6;
    }
    .culture-image-3 {
        grid-column: 3 / 4;
        grid-row: 1 / 6;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

const RowThree = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
    margin-top: -50px;
    .content {
        grid-column: 1 / 9;
        grid-row: 1 / 3;
        padding: 20px 40px;
        padding-top: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            position: relative;
            font-family: "Helvetica Thin";
            color: rgb(255,255,255);
            font-size: 24px;
            line-height: 1.3;
            text-align: center;
            max-width: 600px;
            margin-bottom: 0;
            span.blue {
                color: #298fc2;
            }
            span.bonvivant {
                font-family: BonVivant;
                font-size: 32px;
                line-height: 0;
            } 
            span.quote-start {
                position: absolute;
                left: -10px;
                top: -15px;            
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
            }
            span.quote-end {
                position: absolute;
                right: -10px;
                top: -40px;
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
                transform: rotate(180deg);
            }
        }
    }
    .culture-image-0 {
        grid-column: 1 / 5;
        grid-row: 3 / 7;
    }
    .culture-image-1 {
        grid-column: 5 / 9;
        grid-row: 3 / 7;
    }
    .culture-image-2 {
        grid-column: 9 / 13;
        grid-row: 1 / 6;
    }
    .culture-image-3 {
        grid-column: 1 / 4;
        grid-row: 7 / 12;
    }
    .culture-image-4 {
        grid-column: 4 / 9;
        grid-row: 7 / 12;
    }
    .culture-image-5 {
        grid-column: 9 / 13;
        grid-row: 6 / 12;
        margin-bottom: -80px;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

const RowFour = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .content {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        display: flex;
        align-items: center;
        padding: 20px 40px;
        padding-top: 100px;
        p {
            position: relative;
            font-family: "Helvetica Thin";
            color: rgb(255,255,255);
            font-size: 24px;
            line-height: 1.3;
            text-align: center;
            margin-bottom: 0;
            max-width: 400px;
            span.blue {
                color: #298fc2;
            }
            span.bonvivant {
                font-family: BonVivant;
                font-size: 32px;
                line-height: 0;
            }  
            span.quote-start {
                position: absolute;
                left: -20px;
                top: -15px;            
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
            }
            span.quote-end {
                position: absolute;
                right: -25px;
                top: -40px;
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
                transform: rotate(180deg);
            }
        }
    }
    .culture-image-0 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }
    .culture-image-1 {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

const RowFive = styled.section`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    .culture-image-0 {
        grid-column: 1 / 4;
        grid-row: 1 / 3;
    }
    .culture-image-1 {
        grid-column: 1 / 4;
        grid-row: 3 / 6;
    }
    .culture-image-2 {
        grid-column: 4 / 8;
        grid-row: 1 / 6;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

const RowSix = styled.section`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(3, 1fr);
    .content {
        grid-column: 5 / 12;
        grid-row: 1 / 2;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: center;
        p {
            position: relative;
            font-family: "Helvetica Thin";
            color: rgb(255,255,255);
            font-size: 24px;
            line-height: 1.3;
            text-align: center;
            margin-bottom: 0;
            max-width: 600px;
            span.blue {
                color: #298fc2;
            }
            span.bonvivant {
                font-family: BonVivant;
                font-size: 32px;
                line-height: 0;
            }  
            span.quote-start {
                position: absolute;
                left: -10px;
                top: -15px;            
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
            }
            span.quote-end {
                position: absolute;
                right: -10px;
                top: -40px;
                font-size: 60px;
                font-family: Times New Roman;
                color: #298fc2;
                transform: rotate(180deg);
            }
        }
    }
    .culture-image-0 {
        grid-column: 1 / 5;
        grid-row: 1 / 4;
    }
    .culture-image-1 {
        grid-column: 5 / 8;
        grid-row: 2 / 4;
    }
    .culture-image-2 {
        grid-column: 8 / 12;
        grid-row: 2 / 4;
    }
    .culture-image {
        > div {
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
    }
`

export default CulturePage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 324}) {
            seo {
                title
                metaDesc
            }
            culturePage {
                cultureTitle
                cultureRowOneContent
                cultureRowOneGallery {
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
                cultureRowTwoGallery {
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
                cultureRowThreeContent
                cultureRowThreeGallery {
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
                cultureRowFourContent
                cultureRowFourGallery {
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
                cultureRowFiveGallery {
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
                cultureRowSixContent
                cultureRowSixGallery {
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
            }
        }
    }
`