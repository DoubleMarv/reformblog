import * as React from "react"
import {graphql } from "gatsby"


import Navbar from "../../components/navbar"
import Reformfooter from "../../components/footer"
import Bookaclass from "../../components/bookaclass"
import Internalbanner from "../../components/internalbanner"
import Internalmaincopy from "../../components/internalmaincopy"
import Sectiona from "../../homepage/sectiona"
import Sectionb from "../../homepage/sectionb"
import Findus from "../../homepage/findus"
import Homeswiper from "../../homepage/homeswiper"
import Swipage from "../../components/swiper"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Improvers_reformer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Improvers Reformer`


  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Improvers Reformer" />
     <Navbar />
     <Internalbanner title="Improvers Reformer" subtitle="This is the subtitle"/>
          <Internalmaincopy/>
     <Findus />
     <Homeswiper />
     <Reformfooter />
    </Layout>
  )
}

export default Improvers_reformer

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
