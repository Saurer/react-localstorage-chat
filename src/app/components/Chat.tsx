import Message from 'components/Message';
import { css } from '@emotion/core';
import { useState, useContext, useEffect, useRef } from 'react';
import StoreContext from './StoreContext';
import { useObserver } from 'mobx-react-lite';
import User from './User';

const chatStyle = css`
    border: solid 1px #000;

    > .chat__messages {
        height: 400px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    > .chat__controls {
        border-top: solid 1px #ccc;
        background: #f0f0f0;
        padding: 10px;
        display: flex;
        flex-direction: row;

        input {
            flex: 1;
            height: 30px;
            padding: 0 5px;
        }
    }
`;

const KEY_ENTER = 13;

const Chat: React.FC = () => {
    const store = useContext(StoreContext);
    const [text, setText] = useState('');
    const messagesRef = useRef<HTMLDivElement>();

    useEffect(() => {
        messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
    }, [messagesRef.current, store.messages.sortedValues]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setText(e.target.value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (KEY_ENTER === e.keyCode) {
            handleSend();
        }
    };

    const handleSend = () => {
        if (0 < text.length) {
            store.sendMessage(text);
            setText('');
        }
    };

    return useObserver(() => (
        <div>
            <div>
                <User />
            </div>
            <div css={chatStyle}>
                <div className="chat__messages" ref={messagesRef}>
                    {store.messages.sortedValues.map((message, index) => (
                        <Message
                            key={index}
                            isOwn={message.user === store.user}
                            sender={message.user}
                        >
                            {message.text}
                        </Message>
                    ))}
                </div>
                <div className="chat__controls">
                    <input
                        type="text"
                        placeholder="Enter your message here..."
                        value={text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    ));
};

export default Chat;
