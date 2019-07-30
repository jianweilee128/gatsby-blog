import React from "react"
import { Link } from "gatsby"
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
  margin-right: 25rem;
`

const AboutContent = styled.p`
  font-size: 1.5rem;
  line-height: 1.3;
`

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <BackgroundContainer>
      <AboutContent>
        My name is Jian Wei and I'm a self-taught developer. <br />
        Drop me a message if you have any queries. <br />
        Mail: leejianweijw@gmail.com <br />
        GitHub:https://github.com/jianweilee128
        <br />
      </AboutContent>
    </BackgroundContainer>
  </Layout>
)

export default SecondPage
