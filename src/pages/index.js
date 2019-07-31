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
  text-align: center;
  @media (min-width: 1240px) {
    margin-right: 25rem;
  }
`

const HomeContent = styled.h2`
  font-size: 2rem;
  padding-bottom: 20px;
  font-weight: lighter;

  @media (max-width: 420px) {
    text-align: center;
  }
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled(props => <Link {...props} />)`
  background: #416478;
  color: #eae7dc;
  padding: 5px 20px;
  margin: 0 20px;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.8rem;
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
        <HomeContent>WELCOME TO MY BLOG</HomeContent>
        <ButtonContainer>
          <Button to="/about">ABOUT ME</Button>
          <Button to="/blog">MY POSTS</Button>
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
