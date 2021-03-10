import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const cache = new InMemoryCache();

await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
});

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: `${process.env.GATSBY_BACKEND_URL}/graphql`,
    fetch
  })
});


  
export default client;