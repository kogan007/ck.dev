import Layout from "../components/layout"
import React from 'react';
import { graphql, Link } from 'gatsby';
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";


const POST_QUERY = gql`
    query POST_QUERY($id: ID!){
        post(id: $id){
            title
            content
            dateposted
            author{
                username
            }
        }
    }
`

const StyledBlogPost = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    h1{
        font-family: 'Oswald';
        font-size: 60px;
        text-transform: uppercase;
        padding: 30px 0px;
    }
    .writtenBy{
        margin-top: auto;
    }
`;


export default ({data: gData}) => {
    
    const postId = gData?.strapi?.post?.id;

    const {data, loading, error} = useQuery(POST_QUERY, {
        variables: {
            id: postId
        }
    })

    if (loading) return <p>Loading...</p>

    const {post} = data;

    console.log(gData.strapi.post.images[0].url)
    return (
        <StyledBlogPost>
            <h1>{post?.title}</h1>

            <div className="main-img">
                <StaticImage 
                    src="gData?.strapi?.post?.images[0].url"
                    alt="post?.title"
                    placeholder="blurred"
                />
            </div>

            <p>
                {post?.content}
            </p>

            <div className="writtenBy">
                <p>Written By: 
                <Link style={{marginLeft: '5px'}} to={`/users/${post?.author?.username}`}>
                    {post?.author?.username}
                </Link> 
                </p>
            </div>
           
         </StyledBlogPost>
    )
}

export const query = graphql`
    query BlogPost($postId: ID!) {
        strapi {
            post(id: $postId) {
                id
                images {
                    url
                }
            }
        }
    }
`