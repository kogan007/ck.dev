import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';


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


const CONFIRM_EMAIL_MUTATION = gql`
    mutation CONFIRM_EMAIL_MUTATION( $code: String! ){
        emailConfirmation(confirmation: $code) {
            user {
            username
            }
        }
    }
    

`;

export default function ConfirmEmail({code}) {
    const { register, handleSubmit, errors } = useForm()


    const [confirm, {data, loading, error}] = useMutation(CONFIRM_EMAIL_MUTATION);

    const onSubmit = (e) => {
        confirm({
            variables: {
                code
            }
        })
    };

    
    return (
        <div>
             {
                 !error && data && (
                     <div>
                         <p>Successfully confirmed email</p>
                    </div>
                 )
             }

            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <button type="submit">Click to confirm your email</button>
                </fieldset>
            </StyledForm>
        </div>
    )
}