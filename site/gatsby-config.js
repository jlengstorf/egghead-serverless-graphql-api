require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        url: process.env.GATSBY_GRAPHQL_API,
        typeName: 'API',
        fieldName: 'api'
      }
    }
  ]
};
