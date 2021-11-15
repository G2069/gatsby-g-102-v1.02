import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Three from "../Three/Three"
import Email from "../components/Email"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Three />
    <Email />
    <Footer />
  </Layout>
)

export default IndexPage
