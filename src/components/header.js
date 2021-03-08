import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import { StaticImage } from 'gatsby-plugin-image';

const Header = (data) => {

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
            <StaticImage 
              src="../images/logo.png" 
              alt="Header Logo"
              height={150} 
              placeholder="tracedSVG"
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