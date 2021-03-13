import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import { StaticImage } from 'gatsby-plugin-image';

const Header = (data) => {

  return (
    <header
    >
      <section className="relative py-2 bg-gray-700">
    <div className="flex items-center justify-between h-20 px-8 mx-auto max-w-7xl">

        <Link to="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none">
            <StaticImage
              src="../images/logo.png"
              placeholder="tracedSVG"
              width={200}
              alt="coreykogan.dev logo"
            />
        </Link>

        <nav className="items-center justify-center hidden space-x-8 text-gray-200 md:flex">
            <Link to="/"   className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                <span className="block">Home</span>
                
            </Link>
           
            <Link to="/blog"   className="relative inline-block text-base font-bold text-gray-200 uppercase transition duration-150 ease hover:text-white">
                <span className="block">Blog</span>
                
            </Link>
            <div className="w-0 h-5 border border-r border-gray-700"></div>
            
            <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-yellow-400 border border-yellow-500 shadow-sm focus:ring-offset-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 rounded-none rounded-2xl">
                Get in touch 
            </Link>
        </nav>

       
        <div className="flex items-center justify-center h-full text-white md:hidden">

        </div>

    </div>
</section>
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