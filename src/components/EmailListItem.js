import React from 'react';

export const EmailListItem = (props) => {
    return (
        <div
            key={props.id}
            onClick={props.onClick}
            className="list-group-item list-group-item-action pointer"
        >
            <h5 className="mb-1">{props.subject}</h5>
            <small className="text-muted">From: {props.from}</small>
            <br />
            <small className="text-muted">To: {props.to}</small>
        </div>
    );
};
