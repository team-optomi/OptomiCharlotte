import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"


const HomeSectionThree = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS3Content
                    homeS3IconCols {
                        homeS3Icon {
                            title
                            localFile {
                              childImageSharp {
                                  gatsbyImageData (
                                      width: 400
                                      placeholder: TRACED_SVG
                                      formats: [AUTO, WEBP, AVIF]
                                  )
                              }
                            }
                        }
                        homeS3Label
                        homeS3Link
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
            className={"s3-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS3Content}} />
            <div className={"s3-flex-row"}>
                {data.queryContent.homeSection.homeS3IconCols.map(colSrc => {
                    return(
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        className={"s3-flex-col"}>
                            <Link to={colSrc.homeS3Link}>
                                <GatsbyImage className={"s3-icon"} image={colSrc.homeS3Icon.localFile.childImageSharp.gatsbyImageData} alt={colSrc.homeS3Icon.title} />
                                <h3>{colSrc.homeS3Label}</h3>
                            </Link>
                        </div> 
                    )
                })}
            </div>
        </MainSection>
        
    )

}

const MainSection = styled.section`
    padding: 50px 20px;
    border-bottom: 2px solid #298fc2;
    .s3-content {
        text-align: center;
        margin-bottom: 35px;
        h2 {
            color: #898c8e;
        }
    }
    .s3-flex-row {
        max-width:1400px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        .s3-flex-col {
            width: 14.28%;
            padding: 0 15px;
            text-align: center;
            .gatsby-image-wrapper {
                max-height: 115px;
                max-width: 168px;
                margin-bottom: 20px;
                img {
                    max-height: 115px;
                    max-width: 168px;
                    object-fit: contain;
                }
            }
            a {
                text-decoration: none;
            }
            h3 {
                font-size: 14px;
                color: #298fc2;
            }
            &:nth-child(1) {
                transition-delay: .2s;
            }
            &:nth-child(2) {
                transition-delay: .4s;
            }
            &:nth-child(3) {
                transition-delay: .6s;
            }
            &:nth-child(4) {
                transition-delay: .8s;
            }
            &:nth-child(5) {
                transition-delay: 1s;
            }
            &:nth-child(6) {
                transition-delay: 1.2s;
            }
            &:nth-child(7) {
                transition-delay: 1.4s;
            }
        }
    }
`

export default HomeSectionThree