import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>{post.frontmatter.title}</h1>
      <h4 style={{ color: "rgb(165, 164, 164)" }}>
        <span style={{ fontSize: "0.8em" }}>{post.fields.date}</span>
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        date
      }
    }
  }
`;
