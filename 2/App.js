import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

const ADD_ITEM = gql`
  mutation AddItem($name: String!, $description: String!) {
    addItem(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  const [addItem] = useMutation(ADD_ITEM);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({ variables: { name, description } });
    setName('');
    setDescription('');
  };

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;
