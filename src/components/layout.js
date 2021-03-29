import React from "react"
import Footer from "./footer"
import Header from "./header"
import Sidebar from "./sidebar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children, toggle, isOpen, click }) => {

  return (
    <>
      <GlobalStyle />
      <Header click={click} toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
