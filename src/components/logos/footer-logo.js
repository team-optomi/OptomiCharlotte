import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const FooterLogo = () => {
  const data = useStaticQuery(graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 231}) {
            footerSections {
                footerLogo {
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
            }
        }
    }
  `)

  return(
    <GatsbyImage className={"footer-logo"} image={data.queryContent.footerSections.footerLogo.localFile.childImageSharp.gatsbyImageData} alt={data.queryContent.footerSections.footerLogo.title} />
  ) 
}

export default FooterLogo