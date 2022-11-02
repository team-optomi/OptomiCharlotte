import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const SideMainMenu = () => (
    <MainMenu>
        <MenuItem>
            <Link
            to="/"
            >
            Home
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/jobs/"
            >
            Jobs
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/culture/"
            >
            Culture
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/community/"
            >
            Community
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/awards/"
            >
            Awards
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/success-stories/"
            >
            Success Stories
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
            to="/when-in-charlotte/"
            >
            When in Charlotte
            </Link>
        </MenuItem>
    </MainMenu>
  )

const MainMenu = styled.ul`
    list-style: none;
    padding: 30px;
    margin: 0;
`

const MenuItem = styled.li`
    margin: 0 0 10px;
    letter-spacing: 1px;
    font-size: 18px;
    font-family: "Helvetica Thin";
    a {
        letter-spacing: 1px;
        font-size: 18px;
        color: #61b1e8;
        text-decoration: none;
        transition-duration: .3s;
        &:hover {
            color: #fff;
        }
    }
`

export default SideMainMenu