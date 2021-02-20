import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from 'gatsby';
import Img from "gatsby-image"

const Header = (data) => {
  const {file} = useStaticQuery(
    graphql`
    query MyQuery {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `
  )
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Img
              fluid={file.childImageSharp.fluid}
            />
          </Link>
        
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header