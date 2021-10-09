import React from 'react';
import { EmailListItem } from './EmailListItem';

export const EmailList = ({ emails, onEmailClick }) => {
    return (
        <div className="col-sm-4">
            <div className="list-group">
                {emails.map((mail, index) => (
                    <EmailListItem
                        key={mail.id}
                        from={mail.from}
                        to={mail.to}
                        subject={mail.subject}
                        onClick={() => onEmailClick(mail.id)}
                    />
                ))}
            </div>
        </div>
    );
};
