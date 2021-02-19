import { gql, useQuery } from '@apollo/client';
import { Link } from 'gatsby';
import React from 'react';

const ALL_POSTS_QUERY = gql`
    query ALL_POSTS_QUERY{
        posts{
            title
            content
          	slug
            categories{
                name
            }
            author {
                username
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
                    <li key={post.title}>
                        <Link to={`/blog/${post?.slug}`}>
                        {post.title}
                        </Link>
                        <span style={{display: "block"}}>
                            Posted by: 
                            <Link to={`/users/${post?.author?.username}`}>
                            {post?.author?.username}
                            </Link>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}