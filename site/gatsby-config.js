module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // url: 'https://api.graphcms.com/simple/v1/swapi',
        url: 'http://localhost:8888/.netlify/functions/graphql',
        typeName: 'API',
        fieldName: 'api'
      }
    }
  ]
};
