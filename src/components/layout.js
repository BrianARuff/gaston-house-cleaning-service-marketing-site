/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: ``,
            background: `#333333`,
            color: `#fff`,
            height: `75px`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            paddingTop: `30px`,
          }}
        >
          <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{color: `#C0CC42`}} href="https://www.gatsbyjs.com">Gatsby</a> by <a style={{color: `#C0CC42`}} href="https://www.linkedin.com/in/brianaruff/">Brian Ruff</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
