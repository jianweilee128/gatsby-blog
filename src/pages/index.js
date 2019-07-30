import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BackgroundContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-right: 45rem;
`

const HomeContent = styled.h2`
  font-size: 2rem;
  padding: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled(props => <Link {...props} />)`
  background: #416478;
  color: #eae7dc;
  padding: 20px;
  margin: 0 20px;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background: black;
    opacity: 0.9;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundContainer>
        <HomeContent>JIAN WEI'S BLOG</HomeContent>
        <ButtonContainer>
          <Button to="/about">ABOUT ME</Button>
          <Button to="/blog">MY BLOG</Button>
        </ButtonContainer>
      </BackgroundContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
