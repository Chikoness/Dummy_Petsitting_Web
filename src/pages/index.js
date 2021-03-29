import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Sitting from "../components/sitting"
import Book from "../components/book"

const IndexPage = () => {
  const [click, setClick] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleAndHandleClick = () => {
    setIsOpen(!isOpen)
    setClick(!click)
  }

  return (
    <Layout toggle={toggleAndHandleClick} isOpen={isOpen} click={click}>
      <SEO title="Home" />
      <Hero />
      <Services heading="What We Offer" />
      <Sitting />
      <Book />
    </Layout>
  )
}

export default IndexPage
