import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Three from "../Three/Three"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Three/>
  </Layout>
)

export default IndexPage
