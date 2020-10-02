import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p style=
    {{ fontFamily: "Fredoka One",
                fontSize: "32px",
                color: "#fffb0e",
                textAlign: "center",
                webkitTextStroke: "2px #020102" }}>
    You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
