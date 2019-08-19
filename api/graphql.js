const { ApolloServer, gql } = require('apollo-server-lambda');
const { prisma } = require('./prisma/client');

const typeDefs = gql`
  type Query {
    hello: String!
    getUsers: [User!]!
  }

  type User {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    getUsers: () => prisma.users()
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
