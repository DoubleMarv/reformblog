import * as React from "react"
import {graphql } from "gatsby"


import Navbar from "../components/navbar"
import Reformfooter from "../components/footer"
import Bookaclass from "../components/bookaclass"
import Sectiona from "../homepage/sectiona"
import Sectionb from "../homepage/sectionb"
import Findus from "../homepage/findus"
import Homeswiper from "../homepage/homeswiper"
import Swipage from "../components/swiper"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MainHome = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
     <Navbar />
     <Swipage />
     <Sectiona />
     <Sectionb />
     <Findus />
     <Homeswiper />
     <Bookaclass />
     <Reformfooter />
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
