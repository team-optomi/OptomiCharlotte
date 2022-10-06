import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SpinningSocials = () => {
  const data = useStaticQuery(graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 231}) {
            footerSections {
                socialsBackground {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 730
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

  return(
    <GatsbyImage className={"rotating"} image={data.queryContent.footerSections.socialsBackground.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.footerSections.socialsBackground.title} />
  ) 
}

export default SpinningSocials