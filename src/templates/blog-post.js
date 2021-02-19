import Layout from "../components/layout"
import React from 'react';
import { graphql, Link } from 'gatsby';
import { gql, useQuery } from "@apollo/client";


const POST_QUERY = gql`
    query POST_QUERY($id: ID!){
        post(id: $id){
            title
            content
            author{
                username
            }
        }
    }
`
export default ({data: gData}) => {
    
    const postId = gData?.strapi?.post?.id;

    const {data, loading, error} = useQuery(POST_QUERY, {
        variables: {
            id: postId
        }
    })

    if (loading) return <p>Loading...</p>

    const {post} = data;

    return (
        <div>
            <h2>{post?.title}</h2>

            <p>
                {post?.content}
            </p>

            <p>
                Written By: 
                <Link to={`/users/${post?.author?.username}`}>
                    {post?.author?.username}
                </Link> 
            </p>
         </div>
    )
}

export const query = graphql`
    query BlogPost($postId: ID!) {
        strapi {
            post(id: $postId) {
            id
            }
        }
    }
`