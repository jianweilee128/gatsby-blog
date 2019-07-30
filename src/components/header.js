import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const HeaderContainer = styled.div`
  background: none;
`

const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #eae7dc;
  padding: 20px 30px;

  &:hover {
    background: black;
    opacity: 0.9;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderLinksContainer>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/about">About</HeaderLink>
      <HeaderLink to="/blog">Blog</HeaderLink>
    </HeaderLinksContainer>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
