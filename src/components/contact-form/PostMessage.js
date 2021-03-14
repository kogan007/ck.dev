import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const StyledForm = styled.form`

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

    const onSubmit = ({title, email, content: message}, e) => {
        e.target.reset();
        

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
        

          <StyledForm onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                  Message Title
                </label>
                <input ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" name="title" placeholder="Jane" />
                
              </div>

            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input ref={register({ required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" id="email" type="email" />
                
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
                  Message
                </label>
                <textarea ref={register({ required: true })} className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="content" id="content"></textarea>
                
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-yellow-400 border border-yellow-500 shadow-sm focus:ring-offset-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 rounded-none rounded-2xl" type="submit">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </StyledForm>
        </div>
    )
}