import React from "react";

const footer = (props) => {
  return (
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
      <a style={{ color: `#C0CC42` }} href="https://www.gatsbyjs.com">
        Gatsby
      </a>{" "}
      by{" "}
      <a
        style={{ color: `#C0CC42` }}
        href="https://www.linkedin.com/in/brianaruff/"
      >
        Brian Ruff
      </a>
    </p>
  </footer>
  )
}

export default footer;