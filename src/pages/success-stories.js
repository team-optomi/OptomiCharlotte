import React from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const SuccessStoriesPage = ({ data: { seoContent, posts } }) => {

    return(
        <Layout>
            <Seo 
            title={seoContent.seo.title} 
            description={seoContent.seo.metaDesc}
            />
            <MainSection>
                <div class="title-row">
                    <h1><span class="blue bonvivant">Success</span> Stories</h1>
                </div>
                <div class="post-grid">
                    {posts.edges.map(postSrc => {
                        return(
                            <div class="success-post">
                                <Link to={`/success-stories/${postSrc.node.slug}`}>
                                    <GatsbyImage className={"success-post-bg"} image={postSrc.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={postSrc.node.featuredImage.node.title} />
                                    <div class="success-post-overlay">
                                        <div class="success-post-content">
                                            <h3>{postSrc.node.title}</h3>
                                            <p>{postSrc.node.lastEditedBy.node.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </MainSection>
        </Layout>
    )

}

const MainSection = styled.section`
    .title-row {
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
    }
    .post-grid {
        display: flex;
        flex-wrap: wrap;
        .success-post {
            position: relative;
            width: 33.33%;
            height: 450px;
            a {
                display: flex !important;
                align-items: flex-end;
                height: 100%;
                width: 100%;
                text-decoration: none;
                background-color: transparent;
                transition-duration: .3s;
                z-index: 2;
                position: relative;
                &:hover {
                    .success-post-overlay {
                        background-color: rgba(0, 40, 85, .6);
                    }
                    .success-post-content {
                        opacity: 1;
                    }   
                }
            }
            .gatsby-image-wrapper {
                position: absolute;
                z-index: 1;
                height: 100%;
            }
            .success-post-overlay {
                background-color: rgba(0,0,0,.0);
                position: relative;
                z-index: 3;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: flex-end;
            }
            .success-post-content {
                position: relative;
                z-index: 3;
                padding: 20px 40px;
                opacity: 0;
                transition-duration: .3s;
                h3 {
                    font-family: "Helvetica Thin";
                    color: rgb(255,255,255);
                    font-size: 32px;
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
                }
            }
        }
    }
`

export default SuccessStoriesPage

export const pageQuery = graphql`
    query {
        seoContent: wpPage(databaseId: {eq: 506}) {
            seo {
                title
                metaDesc
            }
            
        }
        posts: allWpSuccessStory {
            edges {
                node {
                    title
                    slug
                    lastEditedBy {
                        node {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 800
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`