import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { HTTP_URL, WS_URL } from './config';

const wsLink = new GraphQLWsLink(createClient({ url: `${WS_URL}/sub` }));

const httpLink = new HttpLink({
  uri: `${HTTP_URL}/graphql`,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: splitLink,
  defaultOptions: {
    watchQuery: {
      pollInterval: 3000,
    },
  },
  cache: new InMemoryCache(),
});
