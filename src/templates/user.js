import Layout from "../components/layout"
import React from 'react';
import { graphql, Link } from 'gatsby';
import { gql, useQuery } from "@apollo/client";
import { render } from "react-dom";


const USER_QUERY = gql`
    query USER_QUERY($id: ID!){
        user(id: $id){
            username
            avatar{
                url
            }
            posts{
                title
                slug
            }
        }
    }
`
export default ({data: gData}) => {
    
    const userId = gData?.strapi?.user?.id;

    const {data, loading, error} = useQuery(USER_QUERY, {
        variables: {
            id: userId
        }
    })

    if (loading) return <p>Loading...</p>

    const {user} = data;

    
    const renderPosts = () => {
        if (user.posts.length) {
            return user.posts.map(post => (
                <li key={post.title}>
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </li>
            ))
        } 
        
        return <p>No posts found</p>
        
        
        
    }
    return (
        <div>
            <h2>{user.username}'s Profile</h2>
            {
                user.avatar && (
                    <img src={user.avatar.url} />
                )
            }
            
            <h4>{user.username}'s Blog Posts</h4>
            <ul>
                {renderPosts()}
            </ul>
         </div>
    )
}

export const query = graphql`
    query User($userId: ID!) {
        strapi {
            user(id: $userId) {
                id
            }
        }
    }
`