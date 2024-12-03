exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          body {
            processed
          }
          relationships {
            field_tags {
              name
            }
          }
        }
      }
    }
  `);

  result.data.allNodeArticle.nodes.forEach((node) => {
    createPage({
      path: `/article/${node.id}`,
      component: require.resolve(`./src/templates/article.js`),
      context: {
        id: node.id,
        title: node.title,
        body: node.body,
        tags: node.relationships.field_tags,
      },
    });
  });
};
