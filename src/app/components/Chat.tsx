import { useState, useContext } from 'react';
import StoreContext from './StoreContext';
import { useObserver } from 'mobx-react-lite';
import User from './User';
import MessagesList from './MessagesList';

const KEY_ENTER = 13;

const Chat: React.FC = () => {
    const store = useContext(StoreContext);
    const [text, setText] = useState('');

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
            <div>
                <MessagesList
                    user={store.user}
                    values={store.messages.sortedValues}
                />
                <div>
                    <div className="form-row mt-3">
                        <div className="col-10">
                            <input
                                type="text"
                                placeholder="Enter your message here..."
                                value={text}
                                className="form-control"
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className="col-2">
                            <button
                                disabled={0 === text.length}
                                onClick={handleSend}
                                className="btn btn-primary btn-block"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
};

export default Chat;
