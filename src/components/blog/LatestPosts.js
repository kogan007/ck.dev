import styled from '@emotion/styled';
import { useStaticQuery, graphql } from "gatsby"
import React from 'react';
import Card from './Card';

const StyledLatestPosts = styled.div`
    padding: 50px 0px;
    h2{
        font-family: 'Oswald';
        font-size: 40px;
        text-transform: uppercase;
        color: #fff;
        padding-bottom: 50px;
        text-align: center;
    }

    .blog-wrap{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
        
    }

    .blog-wrap > div {
        max-width: 300px;
    }
`;

const LatestPosts = () => {
    const data = useStaticQuery(graphql`
        query LatestPosts {
            strapi {
                posts(limit: 4) {
                    slug
                    title
                    dateposted
                    author {
                        username
                    }
                    images {
                        url
                    }
                    categories {
                        name
                    }
                }
            }
        }
    `)

    const posts = data?.strapi?.posts;
    return (
        <StyledLatestPosts className="bg-gray-900">
            <div className="max-w-6xl px-10 mx-auto lg:flex-row">
                <h2>
                    Latest Blog Posts
                </h2>

                <div className="blog-wrap">
                    {posts && posts.map((post) => (
                    <Card key={post.id} otherProps={post} />
                    ))}
                </div>
            </div>
        </StyledLatestPosts>
    )
}

export default LatestPosts;