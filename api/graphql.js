const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world!'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
