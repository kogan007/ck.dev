import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Test from "../components/Test"
import AllPosts from "../components/blog/AllPosts"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    
    <AllPosts />
   
  </Layout>
)

export default BlogPage
