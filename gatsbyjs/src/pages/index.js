import React from "react";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ul>
        {data.allNodeArticle.nodes.map((node) => (
          <li key={node.id}>
            <Link to={`/article/${node.id}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  {
    allNodeArticle {
      nodes {
        id
        title
      }
    }
  }
`;

export default IndexPage;
