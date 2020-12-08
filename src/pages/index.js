import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects },
          allStrapiBlogs: { nodes: blogs }
  } = data
  //別名つけてる:
  return <>
    <Layout>
      <SEO title="Home" description="this is home"/>
      <Hero />
      <Navbar />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="blog" showLink />
      {/* //showLinkは定義されてないけど、リンクを付けるかつけないかを決めるやつ */}
      {/* //trueかfalseを決めるやつですよ */}
    </Layout>
  </>
}


//ここでフィルターを掛けて表示件数をコントロールしている
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  
  
  //こっち。。。はフィルターかけましょうね。はい
  allStrapiBlogs(sort:{fields:date,order:DESC},limit:3) {
    nodes {
      slug
      content
      desc
      date(formatString: "MMMM Do,YYYY")
      id
      title
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
  `
