import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const SuccessStoryTemplate = ({ data: { post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo 
      title={post.seo.title} 
      description={post.seo.metaDesc}
      />

      <Article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
          <div class="header-content">
            <h1 itemProp="headline">{parse(post.title)}</h1>
            <p>{post.lastEditedBy.node.name}</p>
          </div>
          
        </header>

        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content)}</section>
        )}

      </Article>

    </Layout>
  )
}

const Article = styled.article`
  header {
    height: 350px;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    align-items: flex-end;
    .gatsby-image-wrapper {
      position: absolute;
      height: 350px;
      width: 100%;
      img {
        object-fit: cover;
        object-position: center;
      }
    }
    .header-content {
      position: relative;
      max-width: 1240px;
      width: 100%;
      padding: 0 20px;
      padding-bottom: 0px;
      margin: 0 auto;
      h1 {
        font-family: "Helvetica Thin";
        color: rgb(255,255,255);
        font-size: 40px;
        font-weight: 100;
        line-height: 1.3;
        text-transform: uppercase;
        margin-top: 0px;
        margin-bottom: 10px;
      }
      p {
          font-family: BonVivant;
          color: #298fc2;
          font-size: 42px;
          position: relative;
          top: -40px;
      }
    }
  }
  section {
    max-width: 1240px;
    width: 100%;
    padding: 0 20px;
    padding-bottom: 50px;
    margin: 0 auto;
    p, li {
      font-family: "Helvetica Thin";
      color: #898c8e;
      font-size: 16px;
      line-height: 1.3;
    }
  }
`

export default SuccessStoryTemplate

export const pageQuery = graphql`
  query SuccessStoryById(
    $id: String!
  ) {
    post: wpSuccessStory(id: { eq: $id }) {
      seo {
        title
        metaDesc
      }
      id
      content
      title
      lastEditedBy {
        node {
          name
        }
      }
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`