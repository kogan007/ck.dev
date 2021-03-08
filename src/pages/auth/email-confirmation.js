import React from 'react';
import queryString from 'query-string';
import ConfirmEmail from '../../components/user/ConfirmEmail';



const ConfirmEmailPage = ({location}) => {
    const query = location?.search;

    const {confirmation} = queryString.parse(query);
    return (
        <div>
            <ConfirmEmail code={confirmation} />
        </div>
    )
}

export default ConfirmEmailPage;