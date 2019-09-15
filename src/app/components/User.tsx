import { useContext } from 'react';
import StoreContext from './StoreContext';
import { css } from '@emotion/core';
import { useObserver } from 'mobx-react-lite';

const userStyle = css`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    > .user__data {
        flex: 1;
    }

    > .user__data__name {
        font-weight: bold;
    }
`;

const User: React.FC = () => {
    const store = useContext(StoreContext);

    const handleLogout = () => {
        store.logout();
    };

    const handleClear = () => {
        store.messages.clear();
    };

    return useObserver(() => (
        <div css={userStyle}>
            <div className="user__data">
                <span>Logged as:</span>
                <span className="user__data__name">{store.user}</span>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleClear}>Clear chat data</button>
            </div>
        </div>
    ));
};

export default User;
