import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetData {
    items {
      id
      name
      description
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {data.items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
