import Layout from 'components/Layout';
import { useObserver } from 'mobx-react-lite';
import { useContext } from 'react';
import StoreContext from 'components/StoreContext';
import Login from 'components/Login';
import Chat from 'components/Chat';

const Index: React.FC = () => {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <Layout>{store.isLogged ? <Chat /> : <Login />}</Layout>
    ));
};

export default Index;
