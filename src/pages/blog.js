import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AllPosts from "../components/blog/AllPosts"
import styled from "@emotion/styled"

const StyledBLogPage = styled.div`
  max-width: 1400px;
  width: 92%;
  margin: 0 auto;
  h1{
    text-transform: uppercase;
    font-size: 40px;
    font-family: 'Oswald';
    padding: 30px 70px;
  }
`;


const BlogPage = () => (
  <StyledBLogPage>
    <SEO title="Blog" />
    <h1>
      Blog
    </h1>
    <AllPosts />
   
  </StyledBLogPage>
)

export default BlogPage
