import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://example.com/graphql', // Your GraphQL endpoint address
  cache: new InMemoryCache(),
});

export default client;
