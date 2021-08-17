import * as React from "react"
import {graphql } from "gatsby"


import Navbar from "../components/navbar"
import Reformfooter from "../components/footer"
import Bookaclass from "../components/bookaclass"
import Internalbanner from "../components/internalbanner"
import Sectiona from "../homepage/sectiona"
import Sectionb from "../homepage/sectionb"
import Findus from "../homepage/findus"
import Homeswiper from "../homepage/homeswiper"
import Swipage from "../components/swiper"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Aboutus = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `About Us`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
     <Navbar />
     <Internalbanner title="About Us" subtitle="Get to know us or some shit"/>
     <Sectiona />
     <Sectionb />
     <Findus />
     <Reformfooter />
    </Layout>
  )
}

export default Aboutus

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
