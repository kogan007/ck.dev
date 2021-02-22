import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"


const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Link to="/blog">Blog</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    
  </div>
)

export default IndexPage
