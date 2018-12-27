import React, { Component } from "react";
import { Index } from "elasticlunr";
import { graphql } from "gatsby";

// Graphql query used to retrieve the serialized search index.
export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`;

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: []
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map(page => (
            <li>
              {page.title}: {page.keywords.join(`,`)}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.data.siteSearchIndex.index);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    });
  };
}
