import { Link } from 'gatsby';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Card from './Card';
import styled from 'styled-components';


const Grid = styled.div`
    padding: 0 70px;
    grid-gap: 32px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
`;
export default function AllPosts() {
    const data = useStaticQuery(graphql`
        query ALL_POSTS {
            strapi {
                posts {
                title
                slug
                id
                content
                categories {
                    name
                }
                author {
                    username
                }
                images {
                    url
                }
            }
        }
    }


    `);

    const posts = data?.strapi?.posts;
    
    return (
        <div>
            <Grid>
                {posts && posts.map((post) => (
                    <Card key={post.id} otherProps={post} />
                ))}
            </Grid>
        </div>
    )
}