import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogTitle = styled.h2`
  text-decoration: none;
  text-align: center;
`

const BlogDate = styled.p`
  position: absolute;
  text-align: left;
  bottom: 0;
`

const Button = styled(Link)`
  position: absolute;

  margin: 20px;
  right: 0;
  bottom: 0;
  padding: 5px 20px;

  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background: #416478;
  color: #eae7dc;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    background: black;
    opacity: 0.9;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const CardView = styled.div`
  box-sizing: border-box;
  border: black dotted 1px;
  background: rgba(234, 231, 220, 0.7);
  width: 800px;
  height: 300px;
  margin: 20px 0;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 420px) {
    width: 300px;
    text-align: center;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <CardContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <CardView key={node.id}>
            <BlogTitle>{node.frontmatter.title}</BlogTitle>

            <p>{node.excerpt}</p>
            <BlogDate>{node.frontmatter.date}</BlogDate>
            <Button to={node.fields.slug}>VIEW MORE</Button>
          </CardView>
        ))}
      </CardContainer>
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
