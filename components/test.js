import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";

const USERS_QUERY = gql`
  {
    users {
      name
      email
    }
  }
`;

export const Test = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <div>Loading...</div>;
  if (!error) {
    return (
      <div className="bg-white">
        {data.users.map(user => (
          <Fragment key={user.email}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </Fragment>
        ))}
      </div>
    );
  }
};
