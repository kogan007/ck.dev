import Layout from "../components/layout"
import React from 'react';
import { graphql } from 'gatsby';
import { gql, useQuery } from "@apollo/client";


const POST_QUERY = gql`
    query POST_QUERY($id: ID!){
        post(id: $id){
            title
            content
            Author{
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
        <Layout>
            <h2>{post?.title}</h2>

            <p>
                {post?.content}
            </p>

            <p>
                Written By: {post?.Author?.username}
            </p>
        </Layout>
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