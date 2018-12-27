import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import 'prismjs/themes/prism-tomorrow.css'

/*
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo' */

/* const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
 */
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>jmn's blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="article-box">
          <Link
            to={node.fields.slug}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3 className="title">{node.frontmatter.title}</h3>
          </Link>
          <p className="date">
            {node.fields.date}, {node.timeToRead} min read
          </p>
          <p className="excerpt">{node.excerpt}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
            date
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
