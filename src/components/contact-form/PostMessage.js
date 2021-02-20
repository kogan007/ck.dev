import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    label {
        padding: 20px;
        input {
            margin-left: 10px;
        }
    }
`;


const CONTACT_MUTATION = gql`
    mutation CONTACT_MUTATION(
        $title: String!
        $message: String!
        $email: String!
    ){
        createMessage(
            input: {
                data: {
                    Title: $title,
                    message: $message,
                    email: $email
                }
            }
        ) {
            message {
                Title
                message
                email
            }
        }
    }
`;

export default function PostMessage(){
    const { register, handleSubmit, errors } = useForm()

    const [sendMessage, { data, loading }] = useMutation(CONTACT_MUTATION)

    const onSubmit = ({title, email, content: message}) => {
        sendMessage({
            variables: {
                title,
                email,
                message
            }
        })
    };

    if (loading) return <p>Loading...</p>
    
    return (
        <div>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">
                    Message Title
                    <input name="title" id="title" ref={register} /> 
                </label>
                
                <label htmlFor="content">
                    Message Body
                    <textarea name="content" id="content" ref={register({ required: true })} /> 
                </label>
                
                <label htmlFor="email">
                    Your Email
                    <input name="email" type="email" ref={register({ required: true })} />
                </label>
                
                <input type="submit" />
            </StyledForm>
        </div>
    )
}