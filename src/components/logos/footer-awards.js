import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const FooterAwards = () => {
  const data = useStaticQuery(graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 231}) {
            footerSections {
                footerAwards {
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
            }
        }
    }
  `)

  return(
    <GatsbyImage className={"footer-awards"} image={data.queryContent.footerSections.footerAwards.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.footerSections.footerAwards.title} />
  ) 
}

export default FooterAwards