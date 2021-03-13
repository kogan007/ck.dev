import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import React from 'react';
import { graphql, Link } from 'gatsby';
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import SEO from "../components/seo";

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination]);


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
    width: 92%;
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

    
    return (
        <StyledBlogPost>
            <SEO title={post?.title} />
            <h1>{post?.title}</h1>

            <div className="max-w-md main-img">
                <Swiper
                    pagination={{clickable: true}}
                    navigation
                >
                    {
                        gData?.strapi?.post.images.map((postImage, index) => (
                            <SwiperSlide key={index}> 
                                <img src={postImage.url} alt={postImage.caption}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                
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
                    caption
                }
            }
        }
    }
`