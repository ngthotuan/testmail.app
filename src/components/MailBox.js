import React, { useState } from 'react';
import { Email } from './Email';
import { EmailList } from './EmailList';

export const MailBox = ({ emails }) => {
    const [mailSelected, setMailSelected] = useState(null);
    const _onEmailClick = (mailId) => {
        const email = emails.find((email) => email.id === mailId);
        setMailSelected(email);
    };

    return (
        <div className="row mt-3">
            <EmailList emails={emails} onEmailClick={_onEmailClick} />
            {mailSelected ? (
                <Email email={mailSelected} />
            ) : (
                <div className="col-sm-8 text-center mt-5">
                    <span className="alert alert-warning">
                        Select an email to see
                    </span>
                </div>
            )}
        </div>
    );
};
