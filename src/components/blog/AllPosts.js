import { Link } from 'gatsby';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export default function AllPosts() {
    const data = useStaticQuery(graphql`
        query ALL_POSTS {
            strapi {
                posts {
                title
                slug
                author {
                    username
                }
            }
            }
        }

    `);

    const posts = data?.strapi?.posts;
    
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