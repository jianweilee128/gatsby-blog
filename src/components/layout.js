/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import image from "../images/backlit-beautiful-dawn-884788.jpg"

import Header from "./header"
import "./layout.css"

const MainContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  font-family: "Roboto Condensed", sans-serif;
  margin: 0;
  padding: 0;
  background: url(${image}) center;
  max-height: 100vh;
  overflow: hidden;
`

const OverlayBackground = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 100vh;
  overflow: auto;
`

const Footer = styled.h4`
  color: #eae7dc;
  text-align: center;
  font-weight: lighter;
  background: none;
  position: absolute;
  margin: 15px;
  left: 0;
  bottom: 0;
`

const MainContent = styled.div`
  max-height: 1000px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MainContainer>
        <OverlayBackground>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainContent>{children}</MainContent>
          <Footer>© {new Date().getFullYear()}, Jian Wei</Footer>
        </OverlayBackground>
      </MainContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
