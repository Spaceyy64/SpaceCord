import React from 'react';
import {fromatRelative} from 'date-fns';

const Message = ({
    createdAt = null,
    text = '',
    photoURL = '',
}) => {
    return ( <div>
        {photoURL ? (
            <img src={photoURL} alt="Avatar" width={45} height={45} />
        ) : null}
        {displayName ? <p>{displayName}</p> : null}
        {
            createdAt?.seconds ? (
                <span>
                {fromatRelative(new Date(createdAt.seconds * 1000), new Date())}
                </span>
            ) : null};
            <p>{text}</p>
        </div>
    );
};

export default Message;
