import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { name, email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
