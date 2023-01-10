import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"


const HomeSectionFour = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS4Content
                    homeS4Cols {
                        homeS4ColIcon {
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
                        homeS4ColContent
                        homeS4ButtonContent
                        homeS4ButtonLink
                    }
                }
            }
        }
    `)

    return(

        <MainSection>
            <div 
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s4-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS4Content}} />
            <div className={"s4-flex-row"}>
                {data.queryContent.homeSection.homeS4Cols.map(colSrc => {
                    return(
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        className={"s4-flex-col"}>
                            <GatsbyImage className={"s4-icon"} image={colSrc.homeS4ColIcon.localFile.childImageSharp.gatsbyImageData} alt={colSrc.homeS4ColIcon.title} />
                            <div dangerouslySetInnerHTML={{ __html: colSrc.homeS4ColContent}} />
                            <Link to={colSrc.homeS4ButtonLink}>{colSrc.homeS4ButtonContent}</Link>
                        </div> 
                    )
                })}
            </div>
        </MainSection>
        
    )

}

const MainSection = styled.section`
    padding: 50px 20px;
    .s4-content {
        text-align: center;
        margin-bottom: 35px;
        h2 {
            font-family: BonVivant;
            color: rgb(255, 255, 255);
            text-align: center;
            font-size: 72px;
            font-weight: 100;
            margin-bottom: 0px;
        }
    }
    .s4-flex-row {
        max-width:1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .s4-flex-col {
            width: 30%;
            padding: 0px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .gatsby-image-wrapper {
                max-width: 200px;
                max-height: 120px;
                margin: 0px auto 15px;
                img {
                    max-width: 200px;
                    max-height: 120px;
                    object-fit: contain !important;
                }
            }
            h3 {
                font-family: "Helvetica Thin";
                color: rgb(255, 255, 255);
                font-size: 18px;
                letter-spacing: 3px;
                line-height: 1.3;
                text-align: center;
                text-transform: uppercase;
                text-decoration: none;
                margin-bottom: 5px;
            }
            p {
                font-family: "Helvetica Thin";
                color: #898c8e;
                font-size: 16px;
                line-height: 1.3;
                text-align: center;
            }
            a {
                font-family: "Helvetica Thin";
                background-color: rgb(41, 143, 194);
                padding: 15px 30px;
                color: rgb(255, 255, 255);
                text-decoration: none;
                text-transform: uppercase;
                font-size: 14px;
                letter-spacing: 2px;
                display: inline-block;
                margin-top: auto;
            }
            &:nth-child(1) {
                transition-delay: .3s;
            }
            &:nth-child(2) {
                transition-delay: .6s;
            }
            &:nth-child(3) {
                transition-delay: .9s;
            }
        }
    }
    @media(max-width:767px) {
        .s4-flex-row {
            flex-wrap: wrap;
            justify-content: center;
            .s4-flex-col {
                width: 50%;
                padding: 0 20px;
                margin-bottom: 30px;
            }
        }
    }
    @media(max-width:600px) {
        .s4-flex-row {
            .s4-flex-col {
                width: 100%;
                padding: 0;
            }
        }
    }
`

export default HomeSectionFour