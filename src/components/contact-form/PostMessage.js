import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
    fieldset{
        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 0;
    }
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

    const [messageSent, setMessage] = useState('')

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

        setMessage("Your message has been sent")
    };

    

    return (
        <div>
            { messageSent && (
                <p>{messageSent}</p>
            )}
            
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={loading}>
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
                </fieldset>
            </StyledForm>
        </div>
    )
}