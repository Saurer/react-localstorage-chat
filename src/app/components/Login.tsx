import { useObserver } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import StoreContext from 'components/StoreContext';

const Login: React.FC = () => {
    const store = useContext(StoreContext);
    const [name, setName] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setName(e.target.value);
    };

    const handleLogin = () => {
        if (name.length) {
            store.login(name);
        }
    };

    return useObserver(() => (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">React Localstorage Chat</h1>
                <p className="lead">
                    This is a simple cross-tab communication using LocalStorage
                    API and storage event presented as a chat
                </p>
                <hr className="my-4" />
                <p>
                    Enter your name to begin using this application. It will not
                    be sent anywhere. All communication uses localstorage API
                    only
                </p>
            </div>
            <div className="form-group">
                <label htmlFor="user">Enter your name</label>
                <input
                    id="user"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <button
                className="btn btn-primary"
                disabled={0 === name.length}
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    ));
};

export default Login;
