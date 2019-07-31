import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const PostContainer = styled.div`
  text-align: center;
  color: #eae7dc;
`
const Title = styled.h1`
  color: #eae7dc;
  font-weight: lighter;
  padding: 20px 0;
  border: black solid 1px;
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
