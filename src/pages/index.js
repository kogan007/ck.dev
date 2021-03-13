import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/hero"
import LatestPosts from "../components/blog/LatestPosts"


const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Hero />
    <LatestPosts />
    
  </div>
)

export default IndexPage
