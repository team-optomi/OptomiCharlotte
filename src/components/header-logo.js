import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Logo-noTag.png" }) {
        childImageSharp {
          gatsbyImageData (
              width: 90
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const mainLogo = getImage(data.placeholderImage.childImageSharp.gatsbyImageData)

  return <GatsbyImage image={mainLogo} alt="Optomi Charlotte" />
}

export default HeaderLogo