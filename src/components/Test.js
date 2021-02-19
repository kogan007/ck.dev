import { gql, useQuery } from '@apollo/client';
import React from 'react';

const TEST_QUERY = gql`
    query {
  posts{
    name
  }
}
`;
export default function Test() {
    const {data, loading, error} = useQuery(TEST_QUERY)

    const posts = data?.posts;

    if (loading) return <p>Loading...</p>

    return (
        <div>
           <ul>
               {posts.map((post) => (
                   <li key={post.name}>
                       {post.name}
                   </li>
               ))}
           </ul>
        </div>
    )
}