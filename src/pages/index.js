import * as React from "react"
import { Link, graphql } from "gatsby"


import Navbar from "../components/navbar"
import Swipage from "../components/swiper"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MainHome = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
     <Navbar />
     <Swipage />
    </Layout>
  )
}

export default MainHome

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
