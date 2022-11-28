import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

class JobsSection extends Component {

    constructor(props) {
        super(props);
        this.state = { activeJob: 99 };
    }

    clickSelector(index) {
        let num = index;
        this.setState({ activeJob: num});
    }

    render() {
        const { data } = this.props; 

        return(
            <JobsMain>
                {data.wpPage.jobsCharlottePage.charlotteJob.map((jobSrc, i) => {
                    return(
                        <div className= {i === this.state.activeJob ? "job-row active" : "job-row inactive"}>
                            <div class="job-tab">
                                <button onClick={() => this.clickSelector(i)} >
                                    {jobSrc.jobTitle}
                                </button>
                            </div>
                            <div className= {i === this.state.activeJob ? "job-description active" : "job-description inactive"}>
                                <div id={"job_description_" + i} dangerouslySetInnerHTML={{ __html: jobSrc.jobDescription}} />
                            </div>
                        </div>
                    )
                })}
            </JobsMain>
        )
    }

}

const JobsMain = styled.div`
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    .job-row {
        border: 2px solid #fff;
        border-radius: 10px;
        margin-bottom: 35px;
        button {
            background: transparent;
            border: none;
            color: #fff;
            font-family: "Helvetica Thin";
            font-size: 32px;
            padding: 15px 20px;
            width: 100%;
            text-align: left;
            &:hover {
                cursor: pointer;
            }
        }
        .job-description {
            height: 0;
            max-height: 0px;
            opacity: 0;
            visibility: hidden;
            padding-left: 20px;
            padding-right: 20px;
            transition-duration: .5s;
            &.active {
                height: 100%;
                max-height: 1500px;
                opacity: 1;
                visibility: visible;
                padding-bottom: 20px;
            }
            h3 {
                margin-top: 0;
                margin-bottom: 0;
                color: #fff;
                font-family: "Helvetica Thin";
                font-size: 24px;
            }
            p, li {
                color: #fff;
                font-family: "Helvetica Thin";
                font-size: 20px;
            }
            li {
                margin-bottom: 5px;
            }
            ul {
                padding-left: 20px;
            }
        }
    }
    
`


export default props => (
    <StaticQuery
      query={graphql`
        query {
            wpPage(databaseId: {eq: 544}) {
                jobsCharlottePage {
                    charlotteJob {
                      jobTitle
                      jobDescription
                    }
                }
            }
        }
      `}
      render={data => <JobsSection data={data} {...props} />}
    />
  );