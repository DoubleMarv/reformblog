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

const Classes = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Classes`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Classes" />
     <Navbar />
     <Internalbanner title="Classes" subtitle="Go to a class"/>
     <Sectiona />
     <Sectionb />
     <Findus />
     <Homeswiper />
     <Reformfooter />
    </Layout>
  )
}

export default Classes

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
