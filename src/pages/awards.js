import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import AwardsSection from "../components/award-section"

const AwardsPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageMain>
                <div class="title-row">
                    <h1>OUR <span class="blue bonvivant">Awards</span></h1>
                </div>
                <AwardsSection/>
            </PageMain>
        </Layout>
    )

}

const PageMain = styled.section`
    padding: 50px 20px;
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

export default AwardsPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 203}) {
            seo {
                title
                metaDesc
            }
        }
    }
`