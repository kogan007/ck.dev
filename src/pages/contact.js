import styled from '@emotion/styled';
import React from 'react';
import PostMessage from '../components/contact-form/PostMessage';


const StyledContactPage = styled.div`
    max-width: 1400px;
    width: 92%;
    margin: 0 auto;
    padding: 50px;
`;

export default function ContactPage(){
    return (
        <StyledContactPage>
            <PostMessage/>
        </StyledContactPage>
    )
}