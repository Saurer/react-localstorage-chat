import { useRef, useEffect } from 'react';
import { css } from '@emotion/core';
import Message from './Message';

interface Props {
    user: string;
    values: {
        user: string;
        text: string;
    }[];
}

const messagesStyle = css`
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const MessagesList: React.FC<Props> = props => {
    const messagesRef = useRef<HTMLDivElement>();

    useEffect(() => {
        messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
    }, [messagesRef.current, props.values]);

    return (
        <div css={messagesStyle} className="border" ref={messagesRef}>
            {props.values.map((message, index) => (
                <Message
                    key={index}
                    isOwn={message.user === props.user}
                    sender={message.user}
                >
                    {message.text}
                </Message>
            ))}
        </div>
    );
};

export default MessagesList;
