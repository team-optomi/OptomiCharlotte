import React, { Component} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'

import "../css/slick.css"
import "../css/slick-theme.css"

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          isOpen: false
        };
        this.container = null;
        this.trigger = null;
    }

    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const children = this.props.children
        let headerName = "mainLayout";
        if (this.state.isOpen) {
          headerName += ' mobileOpen';
        }
        return (
            <FullPage>
                <MainLayout className={headerName}>

                    <HeaderMain>
                        <MobileLogo>
                            <Link
                            to="/"
                            >
                            <p>logo here</p>
                            </Link>
                        </MobileLogo>
                        <MenuRight>
                            <button onClick={() => this.toggleMenu()} aria-label="Open">
                                <p>Menu</p>
                                <Hamburger>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Hamburger>
                            </button> 
                        </MenuRight>
                    </HeaderMain>

                    <PageTransition transitionTime={1000}>
                        <MainContent>
                            <main>{children}</main>
                        </MainContent>
                    </PageTransition>

                    <SidebarMenu>
                        <button onClick={() => this.toggleMenu()} aria-label="Close">X</button>
                        <p>Sidebar menu here</p>
                    </SidebarMenu>

                    <FooterSection>
                        <p>Footer content here</p>
                    </FooterSection>

                </MainLayout>
            </FullPage>
        )
    }

}

const FullPage = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #000;
`

const HeaderMain = styled.div`
  position: fixed;
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  @media(max-width:768px) {
    background-color: #000;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
  }
`

const MobileLogo = styled.div`
  opacity: 0;
  visibility: hidden;
  padding-right: 15px;
  .gatsby-image-wrapper {
    width: 100px;
    height: 72px;
    img {
      margin-bottom: 0;
    }
  }
  @media(max-width:768px) {
    opacity: 1;
    visibility: visible;
  }
`

const MenuRight = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    &:focus {
      outline: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
  p {
    font-family: "Bodoni Classic";
    font-size: 15px;
    line-height: 1.3;
    font-weight: 700;
    color: #896d49;
    margin-bottom: 0;
    margin-left: -1px;
  }
`

const Hamburger = styled.div`
  width: 32px;
  height: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  div {
    width: 100%;
    height: 1px;
    background-color: #896d49;
  }
`

const MainContent = styled.div`
    width: 100%;
    position: relative;
    top:0;
    left:0;
    transition-duration: .3s;
`

const SidebarMenu = styled.div`
    position: fixed;
    width: 270px;
    height: 100vh;
    top: 0;
    right: -270px;
    background-color: #1b1b1b;
    transition-duration: .3s;
    z-index: 10;
    button {
      font-family: "Kessel Heavy";
      position: absolute;
      top: 29px;
      right: 25px;
      background: transparent;
      border: none;
      outline: 0 !important;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      transition-duration: .5s;
      &:hover {
        cursor: pointer;
        transform: rotate(180deg);
      }
    }
`

const MainLayout = styled.div`
  &.mobileOpen {
    ${MainContent} {
      left: -270px;
    }
    ${SidebarMenu} {
      right: 0;
    }
  }
`

const FooterSection = styled.footer``

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout