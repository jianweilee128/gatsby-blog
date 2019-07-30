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
  margin: 0;
  padding: 0;
  background: url(${image}) center;
  height: 100vh;
  opacity: 0.9;
  overflow: hidden;
`

const Footer = styled.div`
  color: #eae7dc;
  text-align: center;
  background: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContent>{children}</MainContent>
        <Footer>© {new Date().getFullYear()}, Jian Wei</Footer>
      </MainContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
