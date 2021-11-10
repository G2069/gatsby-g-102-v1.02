import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Three from "../Three/Three"
import Presale from "../components/Presale"
import About from "../components/About"
import Roadmap from "../components/Roadmap"
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
