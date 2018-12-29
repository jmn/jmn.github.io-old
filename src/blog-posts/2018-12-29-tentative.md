---
title: "the great Gatsby"
layout: "post"
tags: [blog, meta, gatsby]
---

I migrated my blog (from Jekyll) to [Gatsby](https://www.gatsbyjs.org/). Here are the details.

- Install the markdownRemark plugin
- configure `gatsby-node.js`

```javascript
const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`);
const slugify = require("slug");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    //const { categories } = node.frontmatter

    const filename = createFilePath({ node, getNode, basePath: `blog-posts` });

    // get the date and title from the file name
    const [, date, title] = filename.match(
      /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
    );

    // create a new slug concatenating everything
    const slug = `/${slugify([].concat([date]).join("-"), "/")}/${title}/`;

    createNodeField({ node, name: `slug`, value: slug });

    // save the date for later use
    createNodeField({ node, name: `date`, value: date });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/post.jsx"),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
```

- `post.jsx`

```jsx
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
```

All code available here: [https://github.com/jmn/jmn.github.io/tree/dev]().
