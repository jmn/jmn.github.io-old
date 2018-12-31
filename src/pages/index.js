import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Search from "../components/Search";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`jmn`, `blog`, `react`]} />
      <div style={{ margin: `1rem auto`, maxWidth: 600 }}>
        <Search searchIndex={data.siteSearchIndex.index} />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="article-box">
            <Link
              to={node.fields.slug}
              style={{ textDecoration: "none", color: "inherit" }}
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
    </Layout>
  );
};

export default IndexPage;

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
    siteSearchIndex {
      index
    }
  }
`;
