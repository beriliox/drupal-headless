import React from "react";
import "../styles/styles.scss";

const Article = ({ pageContext }) => {
  const { title, body, tags } = pageContext;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.processed }} />
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Article;
