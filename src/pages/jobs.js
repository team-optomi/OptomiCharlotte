import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const JobsPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageMain>
                <PageBackground>
                    <GatsbyImage className={"page-background"} image={queryContent.jobsPage.jobsPageBackground.localFile.childImageSharp.gatsbyImageData} alt={queryContent.jobsPage.jobsPageBackground.title} />
                </PageBackground>
                <SectionOne>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    class="jobs-intro" 
                    dangerouslySetInnerHTML={{ __html: queryContent.jobsPage.jobsIntroContent}} />
                </SectionOne>
                <SectionTwo>
                    <div class="flex-row">
                        {queryContent.jobsPage.jobsPageAddJobs.map(jobSrc => {
                            return(
                            <div 
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            class="job-col">
                                <GatsbyImage className={"job-icon"} image={jobSrc.jobPageJobIcon.localFile.childImageSharp.gatsbyImageData} alt={jobSrc.jobPageJobIcon.title} />
                                <div class="job-description" dangerouslySetInnerHTML={{ __html: jobSrc.jobPageJobDescription}} />
                                <a class="job-link" href={jobSrc.jobPageButtonLink} target="_blank">
                                    <GatsbyImage className={"job-link-img"} image={jobSrc.jobPageButtonImage.localFile.childImageSharp.gatsbyImageData} alt={jobSrc.jobPageButtonImage.title} />
                                </a>
                            </div>
                            )
                        })}
                    </div>
                </SectionTwo>
                <SectionThree>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease" 
                    class="bottom-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.jobsPage.jobsBottomContent}} />
                    </div>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                    data-sal-easing="ease" 
                    class="bottom-link"
                    >
                        <a href={queryContent.jobsPage.jobsBottomButtonLink} target="_blank">{queryContent.jobsPage.jobsBottomButtonContent}</a>
                    </div>
                </SectionThree>
            </PageMain>
        </Layout>
    )

}

const PageMain = styled.div`
    position: relative;
`

const PageBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    .gatsby-image-wrapper {
        height: 100%;
    }
`

const SectionOne = styled.section`
    position: relative;
    padding: 20px;
    padding-top: 80px;
    z-index: 2;
    border-bottom: 2px solid #298fc2;
    .jobs-intro {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        h1 {
            font-family: "Helvetica Regular";
            color: #898c8e;
            font-weight: 100;
            margin-bottom: 45px;
            span {
                font-family: BonVivant;
                color: #298fc2;
                font-size: 100px;
                position: relative;
                bottom: -17px;
                left: -62px;
            }
        }
        p {
            font-family: "Helvetica Thin";
            width: 100%;
            z-index: 1;
            font-size: 24px;
            color: #898c8e;
            line-height: 1.2;
            transition-duration: 0.3s;
        }
    }
`

const SectionTwo = styled.section`
    position: relative;
    padding: 50px 20px;
    z-index: 2;
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .job-col {
            position: relative;
            width: 50%;
            padding: 20px;
            padding-left: 120px;
            .job-icon {
                position: absolute;
                max-width: 200px;
                max-height: 150px;
                width: 100%;
                top: 30px;
                left: 0;
                img {
                    object-fit: contain !important;
                }
            }
            .job-description {
                h2 {
                    position: relative;
                    display: inline-block;
                    font-family: "Helvetica Thin";
                    color: #fff;
                    font-style: italic;
                    font-size: 24px;
                    letter-spacing: 2px;
                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -10px;
                        width: 100%;
                        height: 2px;
                        background-color: #fff;
                    }
                }
                p.bonvivant {
                    font-family: BonVivant;
                    color: #fff;
                    font-size: 36px;
                    margin-bottom: 0;
                }
                ul {
                    list-style: none;
                    margin-bottom: 0px;
                    li {
                        font-family: "Helvetica Thin";
                        color: #298fc2;
                        margin-bottom: 4px;
                        font-size: 24px;
                        font-weight: 700;
                        letter-spacing: 2px;
                    }
                }
            }
            .job-link {
                position: relative;;
                display: inline-block;
                left: -35px;
            }
        }
    }
`

const SectionThree = styled.section`
    position: relative;
    z-index: 2;
    .bottom-content {
        background-color: #63b0e6;
        padding: 60px 20px;
        > div {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
            p {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 20px;
                line-height: 1.3;
            }
        }
    }
    .bottom-link {
        padding: 60px 20px;
        text-align: center;
        a {
            font-family: "Helvetica Thin";
            background-color: rgb(41,143,194);
            padding: 15px 30px;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2px;
            display: inline-block;
        }
    }
`

export default JobsPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 286}) {
            seo {
                title
                metaDesc
            }
            jobsPage {
                jobsPageBackground {
                    title
                    localFile {
                      childImageSharp {
                          gatsbyImageData (
                              width: 1800
                              placeholder: TRACED_SVG
                              formats: [AUTO, WEBP, AVIF]
                          )
                      }
                    }
                }
                jobsIntroContent
                jobsPageAddJobs {
                    jobPageJobIcon {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 300
                                  placeholder: TRACED_SVG
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                    jobPageJobDescription
                    jobPageButtonImage {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 300
                                  placeholder: TRACED_SVG
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                    jobPageButtonLink
                }
                jobsBottomContent
                jobsBottomButtonContent
                jobsBottomButtonLink
            }
        }
    }
`