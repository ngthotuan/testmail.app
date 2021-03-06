import React, { useState } from 'react';
import { MailBox } from './components/MailBox';

const App = () => {
    const [apiUrl, setApiUrl] = useState(localStorage.getItem('apiUrl') || '');
    const [loading, setLoading] = useState(false);
    const [emails, setEmails] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await fetch(apiUrl).then((res) => res.json());
            const mails = data.emails.map((email) => ({
                id: email.id,
                from: email.from,
                to: email.to,
                date: email.date,
                attachments: email.attachments,
                subject: email.subject,
                body: email.html,
            }));
            setLoading(false);
            setEmails(mails);
            localStorage.setItem('apiUrl', apiUrl);
        } catch (e) {
            setLoading(false);
            alert('Error while loading emails');
        }
    };

    return (
        <div className="container">
            <div className="row mt-3 justify-content-center">
                <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your testmail.app api link"
                        value={apiUrl}
                        onChange={(e) => setApiUrl(e.target.value)}
                    />
                </div>
                <div className="col-2 text-center">
                    <button
                        onClick={() => fetchData()}
                        className="btn btn-success w-100"
                    >
                        Load Email
                    </button>
                </div>
            </div>

            {loading && (
                <div className="mt-5 text-center">
                    <div
                        className="spinner-border text-success"
                        role="status"
                    ></div>
                </div>
            )}
            {emails && <MailBox emails={emails} />}
        </div>
    );
};

export default App;
