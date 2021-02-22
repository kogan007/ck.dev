import React from 'react';
import queryString from 'query-string';
import ResetPassword from '../components/user/ResetPassword';


const ResetPasswordPage = ({location}) => {
    const query = location?.search;

    const {code} = queryString.parse(query);
    return (
        <div>
            <ResetPassword code={code}/>
        </div>
    )
}

export default ResetPasswordPage;