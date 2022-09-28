import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const HomeSectionTwo = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 6}) {
                homeSection {
                    homeS2Content
                    homeS2FontColor
                    homeS2BgColor
                }
            }
        }
    `)

    return(

        <MainSection style={{backgroundColor: data.queryContent.homeSection.homeS2BgColor, color: data.queryContent.homeSection.homeS2FontColor}}>
            <div 
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={"s2-content"} 
            dangerouslySetInnerHTML={{ __html: data.queryContent.homeSection.homeS2Content}} />
        </MainSection>
        
    )

}

const MainSection = styled.section`
    padding: 60px 20px;
    .s2-content {
        max-width: 1260px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
`

export default HomeSectionTwo