import NextApp, { Container, AppContext } from 'next/app';
import Head from 'next/head';
import StoreContext from 'components/StoreContext';
import store from 'stores';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends NextApp {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {
            pageProps
        };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>React Localstorage Chat</title>
                </Head>
                <StoreContext.Provider value={store}>
                    <Component {...pageProps} />
                </StoreContext.Provider>
            </Container>
        );
    }
}

export default App;
