import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import JobsSection from "../components/jobs-section"

const CharlotteJobsPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageMain>
                <div class="title-row">
                    <GatsbyImage
                    image={queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    alt={queryContent.featuredImage.node.localFile.title}
                    />
                    <h1>CHARLOTTE JOB OPENINGS</h1>
                </div>
                <JobsSection/>
            </PageMain>
        </Layout>
    )

}

const PageMain = styled.section`
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
`

export default CharlotteJobsPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 544}) {
            seo {
                title
                metaDesc
            }
            featuredImage {
                node {
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1800
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