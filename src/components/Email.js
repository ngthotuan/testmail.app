import React from 'react';

export const Email = ({ email }) => {
    return (
        <div className="col-sm-8">
            <div className="border border-success p-3">
                <div>
                    <strong>
                        From: <i>{email.from}</i>
                    </strong>
                </div>
                <div>
                    <strong>
                        To <i>{email.to}</i>
                    </strong>
                </div>
                <div>
                    <strong>
                        Subject <i>{email.subject}</i>
                    </strong>
                </div>
                <div>
                    <strong>
                        Date: <i>{new Date(email.date).toString()}</i>
                    </strong>
                </div>
                <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: email.body }}
                ></div>

                {email.attachments.map((attachment) => (
                    <div key={attachment.checksum} className="mt-4">
                        <strong>Email attachment: </strong>
                        <a href={attachment.downloadUrl}>
                            {attachment.filename}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
