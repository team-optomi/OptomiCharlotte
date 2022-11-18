import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

class AwardsSection extends Component {

    constructor(props) {
        super(props);
        this.state = { activeAward: 99 };
    }

    clickSelector(index) {
        let num = index;
        this.setState({ activeAward: num});
    }

    render() {
        const { data } = this.props; 

        return(
            <AwardsMain>
                {data.wpPage.awardsPage.awardsPageAwards.map((awardSrc, i) => {
                    return(
                        <div className= {i === this.state.activeAward ? "award-col active" : "award-col inactive"}>
                            <div 
                            data-sal="fade"
                            data-sal-duration="1000"
                            data-sal-delay="300"
                            data-sal-easing="ease"
                            class="award-image">
                                <button onClick={() => this.clickSelector(i)} >
                                    <GatsbyImage id={"award_image_" + i} image={awardSrc.pageAwardImage.localFile.childImageSharp.gatsbyImageData} alt={awardSrc.pageAwardImage.title} />
                                </button>
                            </div>
                            <div className= {i === this.state.activeAward ? "award-description active" : "award-description inactive"}>
                                <div id={"award_description_" + i} dangerouslySetInnerHTML={{ __html: awardSrc.pageAwardDescription}} />
                            </div>
                        </div>
                    )
                })}
            </AwardsMain>
        )
    }

}

const AwardsMain = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .award-col {
        background-color: #000;
        width: 33.33%;
        margin-bottom: 0px;
        transition-duration: .5s;
        .award-image {
            height: 400px;
            width: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                background-color: transparent;
                border: none;
                position: relative;
                height: 100%;
                &:before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: calc(50% - 25px);
                    width: 50px;
                    height: 50px;
                    border-right: 25px solid transparent;
                    border-bottom: 40px solid #aaa;
                    border-left: 25px solid transparent;
                    opacity: 0;
                    visibility: hidden;
                    transition-duration: .5s;
                }
            }
            .gatsby-image-wrapper {
                max-height: 350px;
                max-width: 350px;
                img {
                    max-height: 350px;
                    max-width: 350px;
                    object-fit: contain !important;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
        &.active {
            margin-bottom: 300px;
            button {
                &:before {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        .award-description {
            position: absolute;
            left: 0;
            background-color: #898c8e;
            transition-duration: .5s;
            h2 {
                font-family: "Helvetica Thin";
                font-size: 24px;
                letter-spacing: 2px;
                color: #fff;
            }
            p {
                font-family: "Helvetica Thin";
                color: #fff;
                font-size: 16px;
            }
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: -1000px;
                height: 100%;
                max-height: 0px;
                width: 1000px;
                background-color: #898c8e;
                transition-duration: .5s;
            }
            &:after {
                content: '';
                position: absolute;
                top: 0;
                right: -1000px;
                height: 100%;
                max-height: 0px;
                width: 1000px;
                background-color: #898c8e;
                transition-duration: .5s;
            }
            &.inactive {
                height: 0%;
                max-height: 0px;
                opacity: 0;
                visibility: hidden;
            }
            &.active {
                height: 100%;
                max-height: 300px;
                opacity: 1;
                visibility: visible;
                &:before {
                    max-height: 300px;
                }
                &:after {
                    max-height: 300px;
                }
            } 
        }
    }
`


export default props => (
    <StaticQuery
      query={graphql`
        query {
            wpPage(databaseId: {eq: 203}) {
                awardsPage {
                    awardsPageAwards {
                        pageAwardDescription
                        pageAwardImage {
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
        }
      `}
      render={data => <AwardsSection data={data} {...props} />}
    />
  );