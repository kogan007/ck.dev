import React from 'react';
import client from './client';
import {ApolloProvider} from '@apollo/client';
import Layout from './src/components/layout';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element, props}) => (
  <ApolloProvider client={client}>
    <Layout {...props}>
      {element}
    </Layout>
    </ApolloProvider>
);

