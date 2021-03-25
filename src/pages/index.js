import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import Sitting from "../components/sitting"
import Book from "../components/book"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services heading="What We Offer"/>
    <Sitting />
    <Book />
  </Layout>
)

export default IndexPage
