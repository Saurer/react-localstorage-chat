import { useContext } from 'react';
import StoreContext from './StoreContext';
import { useObserver } from 'mobx-react-lite';

const User: React.FC = () => {
    const store = useContext(StoreContext);

    const handleLogout = () => {
        store.logout();
    };

    const handleClear = () => {
        store.messages.clear();
    };

    return useObserver(() => (
        <div className="row pb-3">
            <div className="col-6">
                <h4>
                    <span>Logged as:</span>
                    <span>&nbsp;</span>
                    <span className="user__data__name">{store.user}</span>
                </h4>
            </div>
            <div className="col-6 text-right">
                <div className="btn-group">
                    <button className="btn btn-warning" onClick={handleLogout}>
                        Logout
                    </button>
                    <button className="btn btn-danger" onClick={handleClear}>
                        Clear chat data
                    </button>
                </div>
            </div>
        </div>
    ));
};

export default User;
