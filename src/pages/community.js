import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import ModalImage from "react-modal-image";

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const CommunityPage = ({ data: { queryContent } }) => {

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
                    dangerouslySetInnerHTML={{ __html: queryContent.communityPage.communityPageHeader}} />
                </header>
                <TopRow>
                    {queryContent.communityPage.communityTopSectionGallery.map((imageSrc, i) => {
                        return(
                        <div className={"community-image community-image-" + i}>
                            <div
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <ModalImage
                                small={imageSrc.smallThumb.childImageSharp.gatsbyImageData.images.fallback.src}
                                large={imageSrc.largeThumb.childImageSharp.original.src}
                                alt={imageSrc.title}
                                />
                            </div>
                        </div>
                        )
                    })}
                </TopRow>
                <MiddleRow>
                    <div class="flex-row">
                        <div
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        >
                        <GatsbyImage image={queryContent.communityPage.communitySectionLogos.localFile.childImageSharp.gatsbyImageData} alt={queryContent.communityPage.communitySectionLogos.title} />
                        </div>
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.communityPage.communitySectionContent}} />
                    </div>
                </MiddleRow>
                <BottomRow>
                    {queryContent.communityPage.communityBottomGallery.map((imageSrc, i) => {
                        return(
                        <div className={"community-image community-image-" + i}>
                            <div
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <ModalImage
                                small={imageSrc.smallThumb.childImageSharp.gatsbyImageData.images.fallback.src}
                                large={imageSrc.largeThumb.childImageSharp.original.src}
                                alt={imageSrc.title}
                                />
                            </div>
                        </div>
                        )
                    })}
                    {queryContent.communityPage.communityBottomIcons.map((iconSrc, i) => {
                        return(
                        <div className={"community-icon community-icon-" + i}>
                            <div
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            >
                                <GatsbyImage image={iconSrc.communityIcon.localFile.childImageSharp.gatsbyImageData} alt={iconSrc.communityIcon.title} />
                                <GatsbyImage image={iconSrc.communityHoverIcon.localFile.childImageSharp.gatsbyImageData} alt={iconSrc.communityHoverIcon.title} />
                            </div>
                        </div>
                        )
                    })}
                </BottomRow>
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

const TopRow = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    .community-image-0 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }
    .community-image-1 {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
    }
    .community-image-2 {
        grid-column: 3 / 4;
        grid-row: 2 / 4;
    }
    .community-image-3 {
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }
    .community-image-4 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;
        margin-bottom: -80px;
    }
    .community-image-5 {
        grid-column: 1 / 2;
        grid-row: 5 / 6;
    }
    .community-image-6 {
        grid-column: 2 / 3;
        grid-row: 5 / 6;
    }
    .community-image-7 {
        grid-column: 3 / 4;
        grid-row: 5 / 6;
        margin-top: 80px;
    }
    .community-image {
        > div {
            height: 100%;
            > div {
                height: 100%;
                img {
                    height: 100%;
                    object-fit: cover !important;
                }
            }
        }
    }
    @media(max-width:767px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .community-image-1 {
            max-width: 300px;
        }
        .community-image-4 {
            margin-bottom: 0;
        }
        .community-image-7 {
            margin-top: 0;
        }
    }
`

const MiddleRow = styled.section`
    padding: 50px 20px;
    .flex-row {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        > div {
            width: 50%;
            &:first-child {
                padding: 0 30px;
            }
            &:last-child {
                p {
                    font-family: "Helvetica Thin";
                    color: rgb(255,255,255);
                    font-size: 18px;
                    line-height: 1.3;
                    margin-bottom: 0px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            flex-wrap: wrap;
            > div {
                width: 100%;
            }
        }
    }
`

const BottomRow = styled.section`
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(40, 1fr);
    .community-image {
        > div {
            height: 100%;
            > div {
                height: 100%;
                img {
                    height: 100%;
                    object-fit: cover !important;
                }
            }
        }
    }
    .community-icon {
        position: relative;
        > div {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 100%;
            > .gatsby-image-wrapper {
                &:first-child {
                    position: absolute;
                    opacity: 1;
                    transition-duration: .3s;
                }
                &:last-child {
                    position: absolute;
                    opacity: 0;
                    transition-duration: .3s;
                }
                &:hover {
                    cursor: pointer;
                    &:first-child {
                        opacity: 0;
                    }
                    &:last-child {
                        opacity: 1;
                    }
                }
            }
        }
    }
    .community-image-0 {
        grid-column: 1 / 6;
        grid-row: 1 / 4;
    }
    .community-image-1 {
        grid-column: 6 / 11;
        grid-row: 1 / 4;
    }
    .community-image-2 {
        grid-column: 11 / 15;
        grid-row: 1 / 5;
    }
    .community-image-3 {
        grid-column: 1 / 7;
        grid-row: 4 / 7;
        margin-bottom: -80px;
    }
    .community-icon-0 {
        grid-column: 7 / 11;
        grid-row: 4 / 7;
    }
    .community-image-4 {
        grid-column: 11 / 15;
        grid-row: 5 / 7;
        margin-bottom: -80px;
    }
    .community-image-5 {
        grid-column: 1 / 7;
        grid-row: 7 / 11;
        padding-top: 80px;
    }
    .community-image-6 {
        grid-column: 7 / 11;
        grid-row: 7 / 11;
    }
    .community-image-7 {
        grid-column: 11 / 15;
        grid-row: 7 / 11;
        padding-top: 80px;
    }
    .community-image-8 {
        grid-column: 1 / 5;
        grid-row: 11 / 15;
        margin-bottom: -40px;
    }
    .community-icon-1 {
        grid-column: 5 / 10;
        grid-row: 11 / 14;
        padding-bottom: 40px;
    }
    .community-image-9 {
        grid-column: 10 / 15;
        grid-row: 11 / 15;
        margin-bottom: -60px;
    }
    .community-image-10 {
        grid-column: 5 / 10;
        grid-row: 14 / 17;
        margin-top: -40px;
        padding-bottom: 40px;
    }
    .community-image-11 {
        grid-column: 1 / 5;
        grid-row: 15 / 17;
        padding-top: 40px;
        margin-bottom: -40px;
    }
    .community-image-12 {
        grid-column: 5 / 10;
        grid-row: 17 / 19;
        margin-top: -40px;
    }
    .community-image-13 {
        grid-column: 10 / 15;
        grid-row: 15 / 18;
        padding-top: 60px;
    }
    .community-icon-2 {
        grid-column: 1 / 5;
        grid-row: 17 / 20;
        padding-top: 40px;
    }
    .community-image-14 {
        grid-column: 10 / 15;
        grid-row: 18 / 22;
    }
    .community-image-15 {
        grid-column: 5 / 10;
        grid-row: 19 / 22;
    }
    .community-image-16 {
        grid-column: 1 / 5;
        grid-row: 20 / 24;
        padding-bottom: 60px;
    }
    .community-image-17 {
        grid-column: 1 / 5;
        grid-row: 24 / 27;
        margin-top: -60px;
    }
    .community-image-18 {
        grid-column: 5 / 11;
        grid-row: 22 / 27;
        padding-bottom: 40px;
    }
    .community-icon-3 {
        grid-column: 11 / 15;
        grid-row: 22 / 24;
    }
    .community-image-19 {
        grid-column: 11 / 15;
        grid-row: 24 / 28;
    }
    .community-image-20 {
        grid-column: 1 / 5;
        grid-row: 27 / 31;
        padding-bottom: 60px;
    }
    .community-image-21 {
        grid-column: 5 / 11;
        grid-row: 27 / 30;
        margin-top: -40px;
    }
    .community-image-22 {
        grid-column: 11 / 15;
        grid-row: 28 / 33;
    }
    .community-image-23 {
        grid-column: 1 / 5;
        grid-row: 31 / 35;
        margin-top: -60px;
        padding-bottom: 20px;
    }
    .community-image-24 {
        grid-column: 5 / 11;
        grid-row: 30 / 35;
    }
    .community-image-25 {
        grid-column: 11 / 15;
        grid-row: 33 / 36;
    }
    .community-image-26 {
        grid-column: 1 / 5;
        grid-row: 35 / 39;
        margin-top: -20px;
    }
    .community-image-27 {
        grid-column: 5 / 11;
        grid-row: 35 / 38;
    }
    .community-image-28 {
        grid-column: 11 / 15;
        grid-row: 36 / 38;
    }
    .community-image-29 {
        grid-column: 1 / 5;
        grid-row: 39 / 41;
    }
    .community-image-30 {
        grid-column: 5 / 8;
        grid-row: 38 / 41;
    }
    .community-image-31 {
        grid-column: 8 / 11;
        grid-row: 38 / 41;
    }
    .community-image-32 {
        grid-column: 11 / 15;
        grid-row: 38 / 41;
    }
    @media(max-width:767px) {
        display: flex;
        flex-wrap: wrap;
        .community-image-3 {
            margin-bottom: 0px;
        }
        .community-image-4 {
            margin-bottom: 0px;
        }
        .community-image-5 {
            padding-top: 0px;
        }
        .community-image-7 {
            padding-top: 0px;
        }
        .community-image-8 {
            margin-bottom: 0px;
        }
        .community-image-9 {
            margin-bottom: 0px;
        }
        .community-image-10 {
            margin-top: 0px;
            padding-bottom: 0px;
        }
        .community-image-11 {
            padding-top: 0px;
            margin-bottom: 0px;
        }
        .community-image-12 {
            margin-top: 0px;
        }
        .community-image-13 {
            padding-top: 0px;
        }
        .community-image-16 {
            padding-bottom: 0px;
        }
        .community-image-17 {
            margin-top: 0px;
        }
        .community-image-18 {
            padding-bottom: 0px;
        }
        .community-image-20 {
            padding-bottom: 0px;
        }
        .community-image-21 {
            margin-top: 0px;
        }
        .community-image-23 {
            margin-top: 0px;
            padding-bottom: 0px;
        }
        .community-image-26 {
            margin-top: 0px;
        }
    }
`

export default CommunityPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 392}) {
            seo {
                title
                metaDesc
            }
            communityPage {
                communityPageHeader
                communityTopSectionGallery {
                    title
                    smallThumb: localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 1000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    largeThumb: localFile {
                        childImageSharp {
                            original {
                                src
                            }
                        }
                    }
                }
                communitySectionContent
                communitySectionLogos {
                    title
                    localFile {
                      childImageSharp {
                          gatsbyImageData (
                              width: 800
                              placeholder: TRACED_SVG
                              formats: [AUTO, WEBP, AVIF]
                          )
                      }
                    }
                }
                communityBottomGallery {
                    title
                    smallThumb: localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 800
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                    largeThumb: localFile {
                        childImageSharp {
                            original {
                                src
                            }
                        }
                    }
                }
                communityBottomIcons {
                    communityIcon {
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
                    communityHoverIcon {
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
    }
`