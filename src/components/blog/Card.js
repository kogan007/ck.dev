import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';


const StyledCard = styled.div`
    display: grid;
    grid-column-gap: 5px;
    background-color: #f5f9fb;
    border-radius: 14px;
    grid-template-rows: auto 1fr;
    min-height: 150px;
    overflow: hidden;
    line-height: 1.5;
    position: relative;
    padding: 10px;
    transition: top .2s ease-in-out;
    flex-grow: 1;
    max-width: 520px;
    width: 250px;
    .post-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .post-type {
        background-color: transparent;
        border: 2px solid #677983;
        color: #677983;
        text-transform: uppercase;
        border-radius: 8px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        padding: 3px 6px;
        font-size: .7rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .type-category{
        display: flex;
        margin-top: 10px;
    }
    .category{
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        padding: 3px 6px;
        font-size: .7rem;
        font-weight: 700;
        margin-bottom: 10px;
        background-color: #da3654;
        border: 2px solid #da3654;
        color: #fff;
        text-transform: capitalize;
        border-radius: 8px;
        margin-left: 5px;
    }
    .post-title{
        font-size: 1.1rem;
        margin-bottom: .3rem;
        color: #2e3748;
        a{
            text-decoration: none;
            color: inherit;
        }
    }
    .post-link{
        color: #242729;
        text-decoration: none;
    }
    .post-meta{
        color: grey;
        margin-bottom: 0;
        font-weight: 400;
        font-size: .8rem;
    }
    .blue-grey-text{
        color: #718097;
    }
    .bold{
        font-weight: 700;
    }
    .fill{
        padding: 15px 0 0;
        position: relative;
        &:after{
            display: block;
            content: "";
            padding-bottom: 56.25%;
        }
        img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            margin: 0;
        }
        a{
            color: #da3654;
            text-decoration: none;
        }
    }
`;
const Card = ({otherProps: post}) => {
   
    return (
        <StyledCard>
        <div className="fill">
            {
                post?.images[0]?.url && (
                    <Link to={`/blog/${post?.slug}`}>
                        <img className="card-image" src={post?.images[0]?.url} alt={post.title} />
                    </Link>
                )
            }
            
        </div>
        <div className="post-details">
            <div className="type-category">
                <div className="post-type">
                    Article
                </div>
                {
                    post?.categories[0] && (
                        <div className="category">
                            {post.categories[0].name}
                        </div>
                    )
                }
               
            </div>
            <h2 className="post-title blue-grey-heading">
                <Link to={`/blog/${post?.slug}`}>
                    {post.title}
                </Link>
            </h2>
            <div className="post-meta">
                {post.content}
            </div>
        </div>
    </StyledCard>
    )
}

export default Card;