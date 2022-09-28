import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const HomeSectionTwelve = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS12Content
                    homeS12ButtonLink
                    homeS12ButtonContent
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
            className={"s12-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS12Content}} />
            <div class="s12-button">
                <Link to={data.queryContent.homeSection.homeS12ButtonLink}>{data.queryContent.homeSection.homeS12ButtonContent}</Link>
            </div>
        </MainSection>

    )

}

const MainSection = styled.section`
    padding: 50px 20px;
    .s12-content {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        .home-logos {
            display: flex;
            justify-content: center;
            align-items: center;
            .gatsby-image-wrapper {
                max-width: 450px;
                max-height: 300px;
            }
            img {
                max-width: 450px;
                max-height: 200px;
            }
        }
    }
    .s12-button {
        text-align: center;
        a {
            font-family: "Helvetica Thin";
            background-color: rgb(41,143,194);
            padding: 15px 30px;
            color: rgb(255,255,255);
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2px;
            display: inline-block;
        }
    }
`

export default HomeSectionTwelve