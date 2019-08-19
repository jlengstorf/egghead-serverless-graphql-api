import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    api {
      getUsers {
        id
        name
      }
    }
  }
`;

const Index = ({ data }) => {
  return (
    <>
      {data.api.getUsers.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default Index;
