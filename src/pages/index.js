import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

import HomeSectionHero from "../components/home-sections/hero-section"
import HomeSectionTwo from "../components/home-sections/section-two"
import HomeSectionThree from "../components/home-sections/section-three"
import HomeSectionFour from "../components/home-sections/section-four"
import HomeSectionFive from "../components/home-sections/section-five"
import HomeSectionSix from "../components/home-sections/section-six"
import HomeSectionSeven from "../components/home-sections/section-seven"
import HomeSectionEight from "../components/home-sections/section-eight"
import HomeSectionNine from "../components/home-sections/section-nine"
import HomeSectionTen from "../components/home-sections/section-ten"
import HomeSectionEleven from "../components/home-sections/section-eleven"
import HomeSectionTwelve from "../components/home-sections/section-twelve"
import HomeSectionThirteen from "../components/home-sections/section-thirteen"

const IndexPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            />
            <PageStyles>
                <HomeSectionHero />
                <HomeSectionTwo />
                <HomeSectionThree />
                <HomeSectionFour />
                <HomeSectionFive />
                <HomeSectionSix />
                <HomeSectionSeven />
                <HomeSectionEight />
                <HomeSectionNine />
                <HomeSectionTen />
                <HomeSectionEleven />
                <HomeSectionTwelve />
                <HomeSectionThirteen />
            </PageStyles>
        </Layout>
    )

}

const PageStyles = styled.div`
    background-color: #000;
    h1 {
        font-family: "Helvetica Thin";
        color: rgb(255, 255, 255);
        font-size: 44px;
        font-weight: 100;
        line-height: 1.3;
        margin-top: 0px;
        margin-bottom: 10px;
        span.bonvivant {
            font-size: 60px;
            position: relative;
            bottom: 3px;
        }
    }
    h2 {
        font-family: "Helvetica Thin";
        color: rgb(255, 255, 255);
        font-size: 38px;
        font-weight: 100;
        line-height: 1.3;
        margin-top: 0px;
        margin-bottom: 10px;
        span.bonvivant {
            font-size: 52px;
            position: relative;
            bottom: 3px;
        }
    }
    h3 {
        font-family: "Helvetica Thin";
        color: rgb(255, 255, 255);
        font-size: 18px;
        letter-spacing: 3px;
        line-height: 1.3;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    p {
        font-family: "Helvetica Thin";
        color: rgb(255, 255, 255);
        font-size: 24px;
        line-height: 1.3;
    }
    .blue {
        color: #298fc2;
    }
    .bonvivant {
        font-family: BonVivant;
    }
`

export default IndexPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 6}) {
            seo {
                title
                metaDesc
            }
        }
    }
`