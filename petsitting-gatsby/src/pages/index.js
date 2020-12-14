import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services heading="What We Offer"/>
  </Layout>
)

export default IndexPage
