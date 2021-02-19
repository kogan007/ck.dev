import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Test from "../components/Test"
import AllPosts from "../components/blog/AllPosts"

const BlogPage = () => (
  <div>
    <SEO title="Blog" />
    
    <AllPosts />
   
  </div>
)

export default BlogPage
