import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog
  //dataのなかのblogからcontent,title,descを撮ってくる
  //ReactMarkdownという便利な代物。。。なんぞこれ
  
  return <Layout>
    <SEO title={title} description={desc} />
    <div className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content} />
        </article>
        <Link to="/blog" className="btn center-btn">Blog</Link>
      </div>
    </div>
  </Layout>
}

//$slugはnode.jsから送られてくる。それをもとにstrapiBlogsを持ってくる
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
