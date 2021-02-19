import { gql, useQuery } from '@apollo/client';
import React from 'react';

const ALL_POSTS_QUERY = gql`
    query ALL_POSTS_QUERY{
        posts{
            name
            content
            categories{
            name
        }
    }
}

`;
export default function AllPosts() {
    const {data, loading, error} = useQuery(ALL_POSTS_QUERY)

    const posts = data?.posts;

    if (loading) return <p>Loading...</p>
    return (
        <div>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.name}>
                        {post.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}