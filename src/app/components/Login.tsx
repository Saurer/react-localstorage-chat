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
            <h1>User: {store.user}</h1>
            <div>
                <input type="text" value={name} onChange={handleChange} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    ));
};

export default Login;
