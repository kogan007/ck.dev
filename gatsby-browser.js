import React from 'react';
import client from './client';
import {ApolloProvider} from '@apollo/client';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);

