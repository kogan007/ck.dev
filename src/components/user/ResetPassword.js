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


const RESET_PASSWORD_MUTATION = gql`
    mutation RESET_PASSWORD_MUTATION(
        $password: String!
        $confirmPass: String!
        $code: String!
    ) {
        resetPassword(password: $password, passwordConfirmation: $confirmPass, code: $code){
            user{
                username
            }
        }
    }

`;

export default function ResetPassword({code}) {
    const { register, handleSubmit, errors } = useForm()


    const [reset, {data, loading, error}] = useMutation(RESET_PASSWORD_MUTATION);

    const onSubmit = ({password, confirmPass}, e) => {
        reset({
            variables: {
                password,
                confirmPass,
                code
                
            }
        })
    };

    if (data) console.log(data)
    if (error) console.log(error)
    return (
        <div>
             {
                 !error && (
                     <div>
                         <p>Successfully reset password</p>
                    </div>
                 )
             }

            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="password">
                        Enter Your Password
                        <input name="password" type="password" ref={register({ required: true })} />
                    </label>
                    <label htmlFor="confirmPass">
                        Confirm Your Password
                        <input name="confirmPass" type="password" ref={register({ required: true })} />
                    </label>

                    <button type="submit">Submit</button>
                </fieldset>
            </StyledForm>
        </div>
    )
}