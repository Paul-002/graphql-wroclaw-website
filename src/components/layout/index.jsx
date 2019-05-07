import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Navbar from "../navbar"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
